"use client"
import { PostCard } from "@/components/organisms/PostCard/PostCard";
import { UserCardSmall } from "@/components/organisms/UserCard/UserCardSmall";
import { fetchPosts } from "@/services/posts";
import { fetchUsers } from "@/services/users";
import { TPostsResponse, TUser, TUserResponse } from "@/types/services";
import { useQuery } from "@tanstack/react-query";
import { LoadRecentPosts } from "../LoadRecentPosts/LoadRecentPosts";
import { UserContextProvider } from "@/components/context/userContext";


const WARNING = "The data you requested came back empty."

const Feed = () => {
    const { data: postsData } = useQuery<TPostsResponse>({
        queryKey: ['feedPosts'], queryFn: () => fetchPosts({
            limit: "0"
        })
    });
    const { data: userData } = useQuery<TUserResponse>({
        queryKey: ['users'], queryFn: () => fetchUsers({
            limit: "0"
        })
    });

    if (!postsData?.posts || !postsData?.posts.length) return WARNING;
    if (!userData?.users || !userData?.users.length) return WARNING;

    return <FeedContent userData={userData} postsData={postsData} />
}


type TFeedContent = {
    userData: TUserResponse;
    postsData: TPostsResponse
}


export const FeedContent: FC<TFeedContent> = ({ userData, postsData }) => {
    const userDict: Record<string, TUser> = {};
    userData?.users.forEach(user => {
        userDict[user.id] = user;
    })

    const suggestedPosts = postsData.posts.sort((a, b) => a.reactions.likes - b.reactions.likes).reverse().slice(0, 2);
    const topPostingUsers: Record<string, string[]> = {};
    postsData.posts.forEach(item => {
        if (topPostingUsers[item.userId]) {
            topPostingUsers[item.userId].push(item.userId)
        } else {
            topPostingUsers[item.userId] = [];
        }
    });

    const whoToFollow = Object.values(topPostingUsers).filter(entry => entry.length).sort((a, b) => a.length - b.length)
        .reverse().slice(0, 4).map((list) => userDict[list[0]]);

    return (<section>
        <div>
            <h2>Suggested Posts</h2>
            {suggestedPosts.map(post => <PostCard key={post.id} user={userDict[post.userId]} post={post} />)}
        </div>
        <div>
            <h2>Who to follow</h2>
            {whoToFollow.map(user => <UserCardSmall key={user.id} user={user} />)}
        </div>
        <UserContextProvider value={{ userDict }}>
            <h2>Recent</h2>
            <LoadRecentPosts posts={postsData.posts} totalPosts={postsData.total} />
        </UserContextProvider>
    </section>)
}


export default Feed
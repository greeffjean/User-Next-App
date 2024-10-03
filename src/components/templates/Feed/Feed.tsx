"use client"
import { PostCard } from "@/components/organisms/PostCard/PostCard";
import { UserCardSmall } from "@/components/organisms/UserCard/UserCardSmall";
import { fetchPosts } from "@/services/posts";
import { fetchUsers } from "@/services/users";
import { TPostsResponse, TUser, TUserResponse } from "@/types/services";
import { useQuery } from "@tanstack/react-query";
import { LoadRecentPosts } from "../LoadRecentPosts/LoadRecentPosts";
import { UserContextProvider } from "@/components/context/userContext";
import { ComposedErrorBoundary, ErrorComponent } from "@/components/organisms/Error/Error";
import { Title } from "@/components/atoms/Title/Title";


const WARNING = "The data you requested came back empty."

const Feed: FC = () => {
    const { data: postsData } = useQuery<TPostsResponse>({
        queryKey: ['feedPosts'], queryFn: () => fetchPosts({
            params: { limit: "0" }
        })
    });
    const { data: userData } = useQuery<TUserResponse>({
        queryKey: ['users'], queryFn: () => fetchUsers({
            params: { limit: "0" }
        })
    });

    if (!postsData?.posts || !postsData?.posts.length) return <ErrorComponent description={WARNING} title="Error" />;
    if (!userData?.users || !userData?.users.length) return <ErrorComponent description={WARNING} title="Error" />;

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

    return (<>
        <Title title={"Feed"} />
        <div className="suggested-posts">
            <h2 className="heading-2 mb-5">Suggested Posts</h2>
            <ComposedErrorBoundary>
                <div className="grid gap-5 mb-6">
                    {suggestedPosts.map(post => <PostCard key={post.id} user={userDict[post.userId]} post={post} />)}
                </div>
            </ComposedErrorBoundary>
        </div>
        <div className="follow">
            <h2 className="heading-2 mb-5">Who to follow</h2>
            <ComposedErrorBoundary>
                <div className="grid gap-4 md:grid-cols-2 mb-6">
                    {whoToFollow.map(user => <UserCardSmall key={user.id} user={user} />)}
                </div>
            </ComposedErrorBoundary>
        </div>
        <UserContextProvider value={{ userDict }}>
            <div className="recent-posts">
                <h2 className="heading-2 mb-5">Recent</h2>
                <ComposedErrorBoundary>
                    <LoadRecentPosts posts={postsData.posts} totalPosts={postsData.total} />
                </ComposedErrorBoundary>
            </div>
        </UserContextProvider>
    </>)
}


export default Feed
"use client"
import { fetchPosts } from "@/services/posts";
import { fetchUsers } from "@/services/users";
import { TPostsResponse, TUser } from "@/types/services";
import { useQuery } from "@tanstack/react-query";
import { THydratedProfile } from "./HydratedProfile";
import { ProfileCard } from "@/components/organisms/ProfileCard/ProfileCard";
import { LoadRecentPosts } from "../LoadRecentPosts/LoadRecentPosts";
import { UserContextProvider } from "@/components/context/userContext";
import { ComposedErrorBoundary } from "@/components/organisms/Error/Error";
import { Title } from "@/components/atoms/Title/Title";


type TProfile = THydratedProfile

const WARNING = "The data you requested came back empty."

const Profile: FC<TProfile> = ({ id }) => {
    const { data: postsData } = useQuery<TPostsResponse>({
        queryKey: [`recent-posts-${id}`], queryFn: () => fetchPosts(
            { subPaths: `/user/${id}`, params: { limit: "0" } }
        )
    });
    const { data: userData } = useQuery<TUser>({
        queryKey: [`user-${id}`], queryFn: () => fetchUsers<TUser>(
            { subPaths: `/${id}` }
        )
    });

    if (!postsData?.posts || !postsData?.posts.length) return WARNING;
    if (!userData) return WARNING;

    return <ProfileContent userData={userData} postsData={postsData} />;;
}


type TProfileContent = {
    userData: TUser;
    postsData: TPostsResponse
}


export const ProfileContent: FC<TProfileContent> = ({ userData, postsData }) => {
    const likesTotal = postsData.posts.map(post => post.reactions.likes).reduce((a, b) => (Number(a) + Number(b)))

    return (
        <UserContextProvider value={{ userDict: { [userData.id]: userData } }}>
            <section className="grid gap-12">
                <Title title={"Profile"} />
                <ComposedErrorBoundary>
                    <div className="profile-card">
                        <ProfileCard user={userData} posts={postsData.posts.length} likes={likesTotal} />
                    </div>
                </ComposedErrorBoundary>
                <div>
                    <h2 className="heading-2 mb-5">Recent</h2>
                    <ComposedErrorBoundary>
                        <LoadRecentPosts
                            posts={postsData.posts}
                            totalPosts={postsData.posts.length} />
                    </ComposedErrorBoundary>
                </div> 
            </section>
        </UserContextProvider>
       )
}


export default Profile
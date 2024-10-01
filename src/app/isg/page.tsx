import { FeedContent } from "@/components/templates/Feed/Feed";
import { fetchPosts } from "@/services/posts";
import { fetchUsers } from "@/services/users";

export const revalidate = 3600;

const Page = async () => {
    const [posts, userData] = await Promise.all([fetchPosts({
        params: { limit: "0" }
    }), fetchUsers({
        params: { limit: "0" }
    })])

    return (
        <main>
            <FeedContent userData={userData} postsData={posts} />
        </main>
    )
};

export default Page;
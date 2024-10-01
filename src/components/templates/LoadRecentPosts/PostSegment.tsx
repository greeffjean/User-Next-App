import { UserContext } from "@/components/context/userContext";
import { PostCard } from "@/components/organisms/PostCard/PostCard";
import { TPostsResponse } from "@/types/services";
import { useContext } from "react";


type TPostSegment = {
    posts: TPostsResponse["posts"];
    segmentId: number;
}

const PostSegment: FC<TPostSegment> = ({ posts, segmentId }) => {
    const { userDict } = useContext(UserContext);
    return posts.map(post => {
        if (!userDict[post.userId]) return `User with id:${post.userId} cannot be indexed`;
        return <PostCard user={userDict[post.userId]} key={post.id + segmentId} post={post} />
    })
}

export { PostSegment }
"use client"

import { useIntersection } from "@/components/utils/hooks/useIntersectionObserver";
import { TPostsResponse } from "@/types/services";
import { useEffect, useRef, useState } from "react";
import { PostSegment } from "./PostSegment";


type LoadRecentPosts = {
    posts: TPostsResponse["posts"];
    totalPosts: number;
}

const LoadRecentPosts: FC<LoadRecentPosts> = ({ posts, totalPosts }) => {
    const target = useRef<HTMLDivElement>(null as unknown as HTMLDivElement);
    const isVisible = useIntersection(target, "0%");
    const [chunks, setChunks] = useState<Array<number[]>>([[0, 5]]);

    useEffect(() => {
        const lastChunk = chunks[chunks.length - 1]
        if (lastChunk[1] > totalPosts) return
        if (isVisible && lastChunk) setChunks([...chunks, [lastChunk[1], lastChunk[1] + 5]])
    }, [isVisible])

    return <section>
        {chunks.map(chunk => {
            const postCollection = posts.slice(chunk[0], chunk[1])
            return <PostSegment segmentId={chunk[1]} key={chunk[1]} posts={postCollection} />
        })} 
        <div className="h-12" ref={target}></div>
    </section>
}

export { LoadRecentPosts }
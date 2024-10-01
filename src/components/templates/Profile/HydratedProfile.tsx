import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchPosts } from '@/services/posts';
import getQueryClient from '@/services/getQueryClient';
import { fetchUsers } from '@/services/users';
import Profile from './Profile';


export type THydratedProfile = {
    id: string;
}

export const HydratedProfile = async ({ id }: THydratedProfile) => {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
        queryKey: [`recent-posts-${id}`], queryFn: () => fetchPosts(
            { subPaths: `/user/${id}`, params: { limit: "0" } }
        )
    });
    await queryClient.prefetchQuery({
        queryKey: [`user-${id}`], queryFn: () => fetchUsers(
            { subPaths: `/${id}` }
        )
    });
    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <Profile id={id} />
        </HydrationBoundary>
    )
}
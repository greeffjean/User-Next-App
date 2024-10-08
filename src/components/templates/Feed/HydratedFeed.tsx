import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { fetchPosts } from '@/services/posts';
import getQueryClient from '@/services/getQueryClient';
import Feed from './Feed';
import { fetchUsers } from '@/services/users';


export const HydratedFeed = async () => {
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
        queryKey: ['feedPosts'], queryFn: () => fetchPosts({
            params: { limit: "0" }
        })
    });
    await queryClient.prefetchQuery({
        queryKey: ['users'], queryFn: () => fetchUsers({
            params: { limit: "0" }
        })
    });
    const dehydratedState = dehydrate(queryClient);

    return (
        <HydrationBoundary state={dehydratedState}>
            <Feed />
        </HydrationBoundary>
    )
}
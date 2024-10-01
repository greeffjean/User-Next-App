import { TPostsResponse } from "@/types/services";


type TFetchPosts = { params?: Record<string, string>; subPaths?: `/${string}` | "" };

const fetchPosts = ({params, subPaths = ""}: TFetchPosts): Promise<TPostsResponse> => {
  const queryParams = new URLSearchParams(params).toString();
  return fetch(
    `https://dummyjson.com/posts${subPaths}?${queryParams}`
  ).then((res) => res.json());
};

export { fetchPosts };

import { TPostsResponse } from "@/types/services";


const fetchPosts = (params?: Record<string, string>): Promise<TPostsResponse> => {
  const queryParams = new URLSearchParams(params).toString();
  return fetch("https://dummyjson.com/posts?" + queryParams).then((res) =>
    res.json()
  );
};

export { fetchPosts };

import { TUserResponse } from "@/types/services";


const fetchUsers = (params?: Record<string, string>): Promise<TUserResponse> => {
  const queryParams = new URLSearchParams(params).toString();
  return fetch("https://dummyjson.com/users?" + queryParams).then((res) =>
    res.json()
  );
};

export { fetchUsers };

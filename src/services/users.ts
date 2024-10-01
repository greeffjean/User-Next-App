import { TUserResponse } from "@/types/services";


type TFetchUsers = { params?: Record<string, string>, subPaths?: `/${string}` | "" };

const fetchUsers = <T = TUserResponse>({params, subPaths = ""}: TFetchUsers): Promise<T> => {
  const queryParams = new URLSearchParams(params).toString();
  return fetch(`https://dummyjson.com/users${subPaths}?${queryParams}`).then(
    (res) => res.json()
  );
};

export { fetchUsers };

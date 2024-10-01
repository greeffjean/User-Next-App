export type TUser = {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  address: {
    state: string;
    country: string;
  };
  company: {
    department: string;
  };
};

export type TPost = {
  id: string;
  title: string;
  userId: string;
  body: string;
  tags: Array<string>;
  views: number;
  reactions: { dislikes: number; likes: number };
};

type TBaseResponse = {
  limit: number;
  skip: number;
  total: number;
};

export type TPostsResponse = {
  posts: Array<TPost>;
} & TBaseResponse;

export type TUserResponse = {
  users: Array<TUser>;
} & TBaseResponse;

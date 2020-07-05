export interface IPost {
  title?: string
  content?: string
}

export interface IBlog extends Array<IPost>{}

export type PostType = {
  title: string;
  content: string;
};

export type InitialStateType = {
  posts: PostType[]
};
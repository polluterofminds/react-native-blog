import { IBlog, IPost } from './blog'

export interface IState {
  blogPosts:IBlog
}

export interface IBlogAction {
  type: string
  payload: IPost
}
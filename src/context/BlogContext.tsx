import React, { createContext, useReducer, Dispatch } from "react";
import {
  postReducer,
  PostActions,
} from "../reducers/index"
import { InitialStateType, PostType} from '../interfaces/blog'

const initialState = {
  posts: []
};

const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<PostActions>;
}>({
  state: initialState,
  dispatch: () => null
});

const mainReducer = (
  { posts }: InitialStateType,
  action: PostActions
) => ({
  posts: postReducer(posts, action)
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };

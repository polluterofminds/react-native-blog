type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      }
};

export enum Types {
  Create = "CREATE_POST",
  Delete = "DELETE_POST",
  Edit = "EDIT_POST"
}

// Post

type PostType = {
  title: string;
  content: string;
};

type PostPayload = {
  [Types.Create]: {
    title: string;
    content: string;
  };
  [Types.Delete]: {
    title: string;
  };
};

export type PostActions = ActionMap<PostPayload>[keyof ActionMap<
  PostPayload
>];

export const postReducer = (
  state: PostType[],
  action: PostActions
) => {
  switch (action.type) {
    case Types.Create:
      return [
        ...state,
        {
          title: action.payload.title,
          content: action.payload.content
        }
      ];
    case Types.Delete:
      return [...state.filter(post => post.title !== action.payload.title)];
    default:
      return state;
  }
};

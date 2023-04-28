import { UserType } from './UserType';
import { PostType } from './PostType';

export type AppStateType = {
  mode: string;
  user: UserType;
  token: string;
  posts: PostType[];
};

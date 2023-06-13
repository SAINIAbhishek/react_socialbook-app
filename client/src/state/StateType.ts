import { UserType } from '../types/UserType';
import { PostType } from '../types/PostType';

export type StateType = {
  mode: string;
  user: UserType;
  token: string;
  posts: PostType[];
};

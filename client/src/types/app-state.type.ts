import { UserType } from './user.type';
import { PostType } from './post.type';

export type AppStateType = {
  mode: string;
  user: UserType;
  token: string;
  posts: PostType[];
};

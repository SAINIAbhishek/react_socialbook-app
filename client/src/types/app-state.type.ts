import { UserType } from './user.type';

export type AppStateType = {
  mode: string;
  user: UserType;
  accessToken: string;
};

import { UserType } from './UserType';

export type AppStateType = {
  mode: string;
  user: UserType;
  accessToken: string;
};

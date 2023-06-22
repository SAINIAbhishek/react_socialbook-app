export type UserBasicType = {
  password?: string;
  email: string;
};

export type UserType = UserBasicType & {
  _id: string;
  friends: UserType[];
  firstName: string;
  lastName: string;
  picturePath: string;
  occupation: string;
  impressions: number;
  viewedProfile?: number;
  location?: string;
};

export type UserRegisterType = UserBasicType &
  Pick<UserType, 'firstName' | 'lastName' | 'occupation' | 'location'> & {
    picture: any;
  };

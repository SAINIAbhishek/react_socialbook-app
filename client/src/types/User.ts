export type UserType = {
  _id: string;
  friends: UserType[];
  firstName: string;
  lastName: string;
  picturePath: string;
  occupation: string;
  impressions: number
}

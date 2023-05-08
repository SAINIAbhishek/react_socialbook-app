/*
import { Box, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import { GET_USER, GET_USER_POSTS } from '../../apis/user/User';
import { UserType } from '../../types/UserType';
import { CONFIG } from '../../config/Config';
import UserWidget from '../../components/widgets/user-widget/UserWidget';
import FriendListWidget from '../../components/widgets/friend-list-widget/FriendListWidget';
import MyPostWidget from '../../components/widgets/my-post-widget/MyPostWidget';
import PostsWidget from '../../components/widgets/posts-widget/PostsWidget';
import Navbar from '../../layouts/navbar/Navbar';
import { useQuery } from 'react-query';
import { PostType } from '../../types/PostType';

export const ProfilePage = () => {
  const { userId }: any = useParams();
  const isNonMobileScreens = useMediaQuery(CONFIG.DESKTOP_MIN_WIDTH);

  const { data: userData } = useQuery(
    ['profile', userId],
    () => GET_USER(userId),
    {
      onError: (err: Error) => console.error(err),
    }
  );

  const user: UserType = userData?.data || null;

  const { data: userPostsData } = useQuery(
    ['profile-user-posts', userId],
    GET_USER_POSTS,
    {
      onError: (err: Error) => console.error(err),
      enabled: !!user,
    }
  );

  const userPosts: PostType[] = userPostsData?.data || [];

  if (!user) return <></>;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap="2rem"
        justifyContent="center">
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendListWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}>
          <MyPostWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <PostsWidget data={userPosts} />
        </Box>
      </Box>
    </Box>
  );
};
*/

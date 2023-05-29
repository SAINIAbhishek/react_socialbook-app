import * as React from 'react';
import { useEffect, useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_USER } from '../../apis/user.api';
import UserWidget from '../../components/widgets/user-widget';
import FriendListWidget from '../../components/widgets/friend-list-widget';
import MyPostWidget from '../../components/widgets/my-post-widget';
import PostsWidget from '../../components/widgets/posts-widget';
import Navbar from '../../components/navbar';
import { UserType } from '../../types/user.type';
import { AppStateType } from '../../types/app-state.type';

const ProfilePage = () => {
  const [user, setUser] = useState({} as UserType);
  const { userId }: any = useParams();
  const token = useSelector((state: AppStateType) => state.token);
  const isNonMobileScreens = useMediaQuery('(min-width:1000px)');

  const getUser = async () => {
    const data = await GET_USER(userId, token);
    setUser(data);
  };

  useEffect(() => {
    getUser().then();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

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
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage;

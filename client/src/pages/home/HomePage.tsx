import * as React from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { Navbar } from '../../layouts/navbar/Navbar';
import { AppStateType } from '../../types/AppStateType';
import { CONFIG } from '../../config/Config';
import UserWidget from '../../components/user-widget/UserWidget';
import MyPostWidget from '../../components/my-post-widget/MyPostWidget';
import PostsWidget from '../../components/posts-widget/PostsWidget';
import AdvertWidget from '../../components/advert-widget/AdvertWidget';
import FriendListWidget from '../../components/friend-list-widget/FriendListWidget';

export const HomePage = () => {
  const isNonMobileScreens = useMediaQuery(CONFIG.DESKTOP_MIN_WIDTH);
  const { _id, picturePath } = useSelector((state: AppStateType) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap="0.5rem"
        justifyContent="space-between">
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}>
          <MyPostWidget picturePath={picturePath} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

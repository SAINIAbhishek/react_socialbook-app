import { Box, useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import { CONFIG } from '../../config/Config';
import { UserType } from '../../types/UserType';
import { useCallback, useEffect, useState } from 'react';
import { GET_USER } from '../../apis/UserApi';
import UserWidget from '../../components/widgets/user-widget/UserWidget';
import PostsWidget from '../../components/widgets/posts-widget/PostsWidget';
import FriendsListWidget from '../../components/widgets/friends-list-widget/FriendsListWidget';

const ProfilePage = () => {
  const { userId }: any = useParams();
  const isNonMobileScreens = useMediaQuery(CONFIG.IS_NON_MOBILE_SCREENS_WIDTH);

  const [user, setUser] = useState<UserType>({} as UserType);

  const fetchUser = useCallback(async () => {
    if (!!userId) {
      const fetchedUser = await GET_USER(userId);
      setUser(fetchedUser);
    }
  }, [userId]);

  useEffect(() => {
    fetchUser().then();
  }, [fetchUser]);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? 'flex' : 'block'}
        gap="0.5rem"
        justifyContent="center">
        <Box flexBasis={isNonMobileScreens ? '26%' : undefined}>
          <UserWidget user={user} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? '-2rem' : ''}>
          <PostsWidget userId={userId} />
        </Box>
        {isNonMobileScreens && !!user && (
          <Box flexBasis="26%">
            <FriendsListWidget userId={userId} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ProfilePage;

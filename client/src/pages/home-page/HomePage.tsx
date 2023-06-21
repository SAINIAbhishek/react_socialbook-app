import { Box, useMediaQuery } from '@mui/material';
import { CONFIG } from '../../config/Config';
import AdvertWidget from '../../components/widgets/advert-widget/AdvertWidget';
import Navbar from '../../components/navbar/Navbar';
import PostsWidget from '../../components/widgets/posts-widget/PostsWidget';
import { useAppSelector } from '../../app/StoreHooks';
import UserWidget from '../../components/widgets/user-widget/UserWidget';
import FriendsListWidget from '../../components/widgets/friends-list-widget/FriendsListWidget';

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery(CONFIG.IS_NON_MOBILE_SCREENS_WIDTH);
  const user = useAppSelector((state) => state.user);

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
          {!!user && <UserWidget user={user} />}
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}>
          {!!user && <PostsWidget userId={user._id} />}
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            {!!user && <FriendsListWidget userId={user._id} />}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;

import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from '../../layouts/navbar/Navbar';
import { AppStateType } from '../../types/AppStateType';
import { CONFIG } from '../../config/Config';
import { useQuery } from 'react-query';
import { GET_POSTS } from '../../apis/post/Post';
import { PostType } from '../../types/PostType';
import AdvertWidget from '../../components/widgets/advert-widget/AdvertWidget';
import PostsWidget from '../../components/widgets/posts-widget/PostsWidget';
import UserWidget from 'src/components/widgets/user-widget/UserWidget';

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery(CONFIG.DESKTOP_MIN_WIDTH);
  const { user, accessToken } = useSelector((state: AppStateType) => state);
  const { data } = useQuery('posts', () => GET_POSTS(accessToken));
  const posts: PostType[] = data?.data || [];

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
          <UserWidget user={user} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}>
          {/*<MyPostWidget picturePath={picturePath} />*/}
          <PostsWidget data={posts} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget />
            <Box m="2rem 0" />
            {/*<FriendListWidget userId={_id} />*/}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;

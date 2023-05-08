import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from '../../layouts/navbar/Navbar';
import { AppStateType } from '../../types/AppStateType';
import { CONFIG } from '../../config/Config';
import { useQuery } from 'react-query';
import { GET_POSTS } from '../../apis/post/Post';
import { PostType } from '../../types/PostType';

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery(CONFIG.DESKTOP_MIN_WIDTH);
  const { _id, picturePath } = useSelector((state: AppStateType) => state.user);
  const { data } = useQuery('posts', GET_POSTS);
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
          {/*<UserWidget userId={_id} picturePath={picturePath} />*/}
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? '42%' : undefined}
          mt={isNonMobileScreens ? undefined : '2rem'}>
          {/*<MyPostWidget picturePath={picturePath} />*/}
          {/*<PostsWidget data={posts} />*/}
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            {/*<AdvertWidget />*/}
            <Box m="2rem 0" />
            {/*<FriendListWidget userId={_id} />*/}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;

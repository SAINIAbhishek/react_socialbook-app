import { Box, Typography, useTheme } from '@mui/material';
import WidgetWrapper from '../widget-wrapper/WidgetWrapper';
import Friend from '../../friend/Friend';
import { useAppDispatch, useAppSelector } from '../../../app/StoreHooks';
import { useCallback, useEffect } from 'react';
import { GET_USER_FRIENDS } from '../../../apis/UserApi';
import { setFriends } from '../../../slices/AuthSlice';

type Props = {
  userId: string;
};

const FriendsListWidget = ({ userId }: Props) => {
  const dispatch = useAppDispatch();
  const friends = useAppSelector((state) => state?.user?.friends ?? []);

  const { palette }: any = useTheme();

  const fetchFriends = useCallback(async () => {
    if (!!userId) {
      const fetchedFriends = await GET_USER_FRIENDS(userId);
      dispatch(
        setFriends({
          friends: fetchedFriends,
        })
      );
    }
  }, [dispatch, userId]);

  useEffect(() => {
    fetchFriends().then();
  }, [fetchFriends]);

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: '1.5rem' }}>
        Friends List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {!!friends.length &&
          friends.map((friend) => (
            <Friend
              key={friend._id}
              friendId={friend._id}
              name={`${friend.firstName} ${friend.lastName}`}
              subtitle={friend.occupation}
              userPicturePath={friend.picturePath}
            />
          ))}
      </Box>
    </WidgetWrapper>
  );
};

export default FriendsListWidget;

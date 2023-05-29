import * as React from 'react';
import { useEffect } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { GET_FRIENDS } from '../../../apis/user.api';
import WidgetWrapper from '../../widget-wrapper';
import Friend from '../../friend';
import { AppStateType } from '../../../types/app-state.type';
import { setFriends } from '../../../states/app-state';

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette }: any = useTheme();
  const token = useSelector((state: AppStateType) => state.token);
  const friends = useSelector((state: AppStateType) => state.user.friends);

  const getFriends = async () => {
    const data = await GET_FRIENDS(userId, token);
    dispatch(setFriends({ friends: data }));
  };

  useEffect(() => {
    getFriends().then();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: '1.5rem' }}>
        Friend List
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">
        {friends.map((friend) => (
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

export default FriendListWidget;

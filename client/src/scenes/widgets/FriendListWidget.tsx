import * as React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_FRIENDS } from "../../apis/user";
import {setFriends, StateType} from "../../state";
import WidgetWrapper from "../../components/WidgetWrapper";
import Friend from "../../components/Friend";

const FriendListWidget = ({ userId }) => {
  const dispatch = useDispatch();
  const { palette }: any = useTheme();
  const token = useSelector((state: StateType) => state.token);
  const friends = useSelector((state: StateType) => state.user.friends);

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
        sx={{ mb: "1.5rem" }}
      >
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

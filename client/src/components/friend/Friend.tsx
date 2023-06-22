import { PersonAddOutlined, PersonRemoveOutlined } from '@mui/icons-material';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/StoreHooks';
import FlexBetween from '../flex-between/FlexBetween';
import UserImage from '../user-image/UserImage';
import { PATCH_USER_FRIEND } from '../../apis/UserApi';
import { setFriends } from '../../slices/AuthSlice';

type Props = {
  friendId: string;
  name: string;
  subtitle: string;
  userPicturePath: string;
};

const Friend = ({ friendId, name, subtitle, userPicturePath }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state?.user);
  const isFriend = user?.friends?.find((friend) => friend._id === friendId);
  const showAddFriendIcon = (user && user._id !== friendId) ?? true;

  const { palette }: any = useTheme();
  const primaryLight = palette.primary.light;
  const primaryDark = palette.primary.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  const handleFriend = async () => {
    if (user && user._id) {
      const updatedFriends = await PATCH_USER_FRIEND(user._id, friendId);
      dispatch(
        setFriends({
          friends: updatedFriends,
        })
      );
    }
  };

  return (
    <FlexBetween>
      <FlexBetween gap="1rem">
        <UserImage image={userPicturePath} size="55px" />
        <Box
          onClick={() => {
            navigate(`/profile/${friendId}`);
            navigate(0);
          }}>
          <Typography
            color={main}
            variant="h5"
            fontWeight="500"
            sx={{
              '&:hover': {
                color: palette.primary.light,
                cursor: 'pointer',
              },
            }}>
            {name}
          </Typography>
          <Typography color={medium} fontSize="0.75rem">
            {subtitle}
          </Typography>
        </Box>
      </FlexBetween>
      {showAddFriendIcon && (
        <IconButton
          onClick={handleFriend}
          sx={{ backgroundColor: primaryLight, p: '0.6rem' }}>
          {isFriend ? (
            <PersonRemoveOutlined sx={{ color: primaryDark }} />
          ) : (
            <PersonAddOutlined sx={{ color: primaryDark }} />
          )}
        </IconButton>
      )}
    </FlexBetween>
  );
};

export default Friend;

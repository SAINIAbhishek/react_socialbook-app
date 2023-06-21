import { Box, Typography, useTheme } from '@mui/material';
import WidgetWrapper from '../widget-wrapper/WidgetWrapper';
import Friend from '../../friend/Friend';
import { UserType } from '../../../types/UserType';

type Props = {
  friends: UserType[];
};

const FriendsListWidget = ({ friends }: Props) => {
  const { palette }: any = useTheme();

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
        {friends?.map((friend) => (
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

import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from '@mui/icons-material';
import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStateType } from '../../../types/AppStateType';
import { FlexBetween } from '../../../layouts/flex-between/FlexBetween';
import { WidgetWrapper } from '../../../layouts/widget-wrapper/WidgetWrapper';
import { PostType } from '../../../types/PostType';
import Friend from '../../friend/Friend';

// TODO

type Props = {
  data: PostType;
};

const PostWidget = ({ data }: Props) => {
  const {
    _id,
    userId,
    firstName,
    lastName,
    description,
    location,
    picturePath,
    userPicturePath,
    likes,
    comments,
  } = data;

  const [isComments, setIsComments] = useState(false);

  const dispatch = useDispatch();
  const name = `${firstName} ${lastName}`;
  const { user: loggedUser, accessToken } = useSelector(
    (state: AppStateType) => state
  );
  const loggedInUserId = loggedUser._id;
  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette }: any = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const patchLike = () => {
    /*const updatedPost = await LIKE_POST(loggedInUserId, _id, token);
    dispatch(setPost({ post: updatedPost }));*/
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={userId}
        name={name}
        subtitle={location}
        userPicturePath={userPicturePath}
      />
      <Typography color={main} sx={{ mt: '1rem' }}>
        {description}
      </Typography>
      {picturePath && (
        <img
          width="100%"
          height="auto"
          alt="post"
          style={{ borderRadius: '0.75rem', marginTop: '0.75rem' }}
          src={`http://localhost:3001/assets/${picturePath}`}
        />
      )}
      <FlexBetween mt="0.25rem">
        <FlexBetween gap="1rem">
          <FlexBetween gap="0.3rem">
            <IconButton onClick={patchLike}>
              {isLiked ? (
                <FavoriteOutlined sx={{ color: primary }} />
              ) : (
                <FavoriteBorderOutlined />
              )}
            </IconButton>
            <Typography>{likeCount}</Typography>
          </FlexBetween>
          <FlexBetween gap="0.3rem">
            <IconButton onClick={() => setIsComments(!isComments)}>
              <ChatBubbleOutlineOutlined />
            </IconButton>
            <Typography>{comments.length}</Typography>
          </FlexBetween>
        </FlexBetween>

        <IconButton>
          <ShareOutlined />
        </IconButton>
      </FlexBetween>

      {isComments && (
        <Box mt="0.5rem">
          {comments.map((comment, i) => (
            <Box key={`${name}-${i}`}>
              <Divider />
              <Typography sx={{ color: main, m: '0.5rem 0', pl: '1rem' }}>
                {comment}
              </Typography>
            </Box>
          ))}
          <Divider />
        </Box>
      )}
    </WidgetWrapper>
  );
};

export default PostWidget;

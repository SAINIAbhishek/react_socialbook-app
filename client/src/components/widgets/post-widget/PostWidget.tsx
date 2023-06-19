import { useState } from 'react';
import {
  ChatBubbleOutlineOutlined,
  FavoriteBorderOutlined,
  FavoriteOutlined,
  ShareOutlined,
} from '@mui/icons-material';
import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material';
import { PostType } from '../../../types/PostType';
import WidgetWrapper from '../widget-wrapper/WidgetWrapper';
import { useAppDispatch, useAppSelector } from '../../../app/StoreHooks';
import FlexBetween from '../../flex-between/FlexBetween';
import { PATCH_LIKE_POST } from '../../../apis/PostApi';
import { setPost } from '../../../slices/AuthSlice';
import Friend from '../../friend/Friend';

type Props = {
  post: PostType;
};

const PostWidget = ({ post }: Props) => {
  const dispatch = useAppDispatch();
  const [isComments, setIsComments] = useState(false);
  const loggedInUserId = useAppSelector((state) => state?.user?._id ?? '');

  const {
    _id,
    lastName,
    firstName,
    location,
    userPicturePath,
    likes,
    description,
    picturePath,
    comments,
    userId,
  } = post;

  const isLiked = Boolean(likes[loggedInUserId]);
  const likeCount = Object.keys(likes).length;

  const { palette }: any = useTheme();
  const main = palette.neutral.main;
  const primary = palette.primary.main;

  const handleLike = async () => {
    if (!!loggedInUserId) {
      const updatedPost = await PATCH_LIKE_POST(loggedInUserId, _id);
      dispatch(
        setPost({
          post: updatedPost,
        })
      );
    }
  };

  return (
    <WidgetWrapper m="2rem 0">
      <Friend
        friendId={userId}
        name={`${firstName} ${lastName}`}
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
            <IconButton onClick={handleLike}>
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
            <Box key={`comment-${i}`}>
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

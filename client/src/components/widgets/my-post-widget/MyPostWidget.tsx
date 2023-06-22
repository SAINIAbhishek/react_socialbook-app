import { useCallback, useState } from 'react';
import {
  AttachFileOutlined,
  DeleteOutlined,
  EditOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Dropzone from 'react-dropzone';
import { CONFIG } from '../../../config/Config';
import { useAppDispatch, useAppSelector } from '../../../app/StoreHooks';
import WidgetWrapper from '../widget-wrapper/WidgetWrapper';
import FlexBetween from '../../flex-between/FlexBetween';
import UserImage from '../../user-image/UserImage';
import { CREATE_POST } from '../../../apis/PostApi';
import { setPosts } from '../../../slices/AuthSlice';

const MyPostWidget = () => {
  const isNonMobileScreens = useMediaQuery(CONFIG.IS_NON_MOBILE_SCREENS_WIDTH);
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);

  const [isImage, setIsImage] = useState<boolean>(false);
  const [image, setImage] = useState<any>({});
  const [post, setPost] = useState<string>('');

  const { palette }: any = useTheme();
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const handlePost = useCallback(async () => {
    if (!!user?._id) {
      const posts = await CREATE_POST(user._id, post, image);
      dispatch(
        setPosts({
          posts,
        })
      );
      setImage(null);
      setPost('');
    }
  }, [image, post, user?._id, dispatch]);

  return (
    <WidgetWrapper>
      <FlexBetween gap="1.5rem">
        {!!user && <UserImage image={user.picturePath} />}
        <InputBase
          placeholder="What's on your mind..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
          sx={{
            width: '100%',
            backgroundColor: palette.neutral.light,
            borderRadius: '2rem',
            padding: '1rem 2rem',
          }}
        />
      </FlexBetween>
      {isImage && (
        <Box
          border={`1px solid ${medium}`}
          borderRadius="5px"
          mt="1rem"
          p="1rem">
          <Dropzone
            multiple={false}
            onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}>
            {({ getRootProps, getInputProps }) => (
              <FlexBetween>
                <Box
                  {...getRootProps()}
                  border={`2px dashed ${palette.primary.main}`}
                  p="1rem"
                  width="100%"
                  sx={{ '&:hover': { cursor: 'pointer' } }}>
                  <input {...getInputProps()} />
                  {!image ? (
                    <p>Add Image Here</p>
                  ) : (
                    <FlexBetween>
                      <Typography>{image.name}</Typography>
                      <EditOutlined />
                    </FlexBetween>
                  )}
                </Box>
                {image && (
                  <IconButton
                    onClick={() => setImage(null)}
                    sx={{ width: '15%' }}>
                    <DeleteOutlined />
                  </IconButton>
                )}
              </FlexBetween>
            )}
          </Dropzone>
        </Box>
      )}

      <Divider sx={{ margin: '1.25rem 0' }} />

      <FlexBetween>
        <FlexBetween gap="0.25rem" onClick={() => setIsImage(!isImage)}>
          <ImageOutlined sx={{ color: mediumMain }} />
          <Typography
            color={mediumMain}
            sx={{ '&:hover': { cursor: 'pointer', color: medium } }}>
            Image
          </Typography>
        </FlexBetween>

        {isNonMobileScreens ? (
          <>
            <FlexBetween gap="0.25rem">
              <GifBoxOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Clip</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem">
              <AttachFileOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Attachment</Typography>
            </FlexBetween>

            <FlexBetween gap="0.25rem">
              <MicOutlined sx={{ color: mediumMain }} />
              <Typography color={mediumMain}>Audio</Typography>
            </FlexBetween>
          </>
        ) : (
          <FlexBetween gap="0.25rem">
            <MoreHorizOutlined sx={{ color: mediumMain }} />
          </FlexBetween>
        )}

        <Button
          disabled={!post}
          onClick={handlePost}
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: '3rem',
          }}>
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default MyPostWidget;

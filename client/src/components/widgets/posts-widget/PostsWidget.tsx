import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/StoreHooks';
import { PostType } from '../../../types/PostType';
import { GET_USER_POSTS } from '../../../apis/UserApi';
import { GET_POSTS } from '../../../apis/PostApi';
import PostWidget from '../post-widget/PostWidget';
import { setPosts } from '../../../slices/AuthSlice';

type Props = {
  isAuthUserProfile?: boolean;
  userId: string;
};

const PostsWidget = ({ userId, isAuthUserProfile = false }: Props) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);

  const fetchPosts = useCallback(async () => {
    let fetchedPosts: PostType[];

    if (isAuthUserProfile) {
      fetchedPosts = await GET_USER_POSTS(userId);
    } else {
      fetchedPosts = await GET_POSTS();
    }

    dispatch(
      setPosts({
        posts: fetchedPosts,
      })
    );
  }, [dispatch, isAuthUserProfile, userId]);

  useEffect(() => {
    fetchPosts().then();
  }, [fetchPosts]);

  return (
    <>
      {posts.map((post) => (
        <PostWidget key={post._id} post={post} />
      ))}
    </>
  );
};

export default PostsWidget;

import { useCallback, useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/StoreHooks';
import { PostType } from '../../../types/PostType';
import { GET_USER_POSTS } from '../../../apis/UserApi';
import { GET_POSTS } from '../../../apis/PostApi';

type Props = {
  isAuthUserProfile?: boolean;
};

const PostsWidget = ({ isAuthUserProfile = false }: Props) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const state = useAppSelector((state) => state);
  const { authUser } = state;

  const fetchPosts = useCallback(async () => {
    let fetchedPosts: PostType[] = [];

    if (authUser?._id) {
      if (isAuthUserProfile) {
        fetchedPosts = await GET_USER_POSTS(authUser?._id);
      } else {
        fetchedPosts = await GET_POSTS();
      }
    }

    setPosts(fetchedPosts);
  }, [isAuthUserProfile, authUser]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      K
      {posts.map((post) => (
        <>Post Widget</>
      ))}
      K
    </>
  );
};

export default PostsWidget;

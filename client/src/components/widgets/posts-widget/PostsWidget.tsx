import React from 'react';
import PostWidget from '../post-widget/PostWidget';
import { PostType } from '../../../types/PostType';

type Props = {
  data: PostType[];
};

const PostsWidget = ({ data }: Props) => {
  return (
    <>
      {data.map((post: PostType) => (
        <React.Fragment key={post._id}>
          <PostWidget data={post} />
        </React.Fragment>
      ))}
    </>
  );
};

export default PostsWidget;

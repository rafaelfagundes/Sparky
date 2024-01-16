import React from "react";
import Title from "../../typo/title";

interface PostProps {
  title: string;
  children: string;
}

const Post: React.FC<PostProps> = ({ title, children }) => {
  return (
    <div className="markdown">
      <Title>{title}</Title>
      <span
        dangerouslySetInnerHTML={{
          __html: children,
        }}
      />
    </div>
  );
};

export default Post;

import Post from "@/app/components/templates/post";
import { getOnePost } from "@/lib/posts";
import { highlightCodeInHtml } from "@/lib/syntax-highlight";
import "../../../markdown.css";

export default function PostPage({ params }: { params: { slug: string } }) {
  let post = undefined;
  let postContent = "";

  if (typeof params.slug === "string") {
    post = getOnePost(params.slug);
    postContent = highlightCodeInHtml(post.content);
  }

  return (
    <>
      {post && (
        <div className="mx-6">
          <Post title={post.data.title}>{postContent}</Post>
        </div>
      )}
    </>
  );
}

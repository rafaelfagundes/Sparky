import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";

export default function Posts() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="m-10">
      {allPostsData.map((post) => (
        <div key={post.id} className="mb-10">
          <Link href={`/blog/posts/${post.id}`}>
            <h2 className="text-2xl font-bold">{post.title}</h2>
          </Link>
          <p className="text-lg">{post.date}</p>
        </div>
      ))}
    </div>
  );
}

import Link from "next/link";
import Title from "./components/typo/title";

export default function Home() {
  return (
    <div className="m-10">
      <Title>Sparky</Title>
      <div className="mt-3"></div>
      <Link href="/blog/posts">Posts</Link>
    </div>
  );
}

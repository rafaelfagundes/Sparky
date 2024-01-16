// Import types for fs, path, and matter modules
import fs from "fs";
import type { GrayMatterFile } from "gray-matter";
import matter from "gray-matter";
import path from "path";
import showdown from "showdown";

// Define an interface for the post data
export interface PostData {
  id: string;
  date: string;
  title: string;
  tags: string[];
}

export interface Post {
  data: PostData;
  content: string;
}

// Define the posts directory path
const postsDirectory = path.join(process.cwd(), "posts");

// Get matterResult
function getMatterResult(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult: GrayMatterFile<string> = matter(fileContents);
  return matterResult;
}

// Export a function that returns the sorted posts data
export function getSortedPostsData(): PostData[] {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Use gray-matter to parse the post metadata section
    const matterResult: GrayMatterFile<string> = getMatterResult(id);
    if (typeof matterResult.data.tags === "string") {
      matterResult.data.tags = matterResult.data.tags
        .split(",")
        .map((tag) => tag.trim());
    }

    // Combine the data with the id
    const postData: PostData = {
      ...(matterResult.data as PostData), // Cast the data to PostData interface
    };
    postData.id = id;

    return postData;
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getOnePost(id: string) {
  const converter = new showdown.Converter();

  const matterResult: GrayMatterFile<string> = getMatterResult(id);
  const postData: Post = {
    data: {
      ...(matterResult.data as PostData),
    },
    content: converter.makeHtml(matterResult.content),
  };
  return postData;
}

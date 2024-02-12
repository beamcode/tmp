import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Post } from '../../utils/types'; // Adjust the path as necessary
import { getPosts } from '../../utils/posts'; // Adjust the path as necessary

const NewsPage = () => {
  // Assuming getPosts is a synchronous function that reads MDX files
  // and returns an array of Post objects. If it's asynchronous, you'd
  // need to adjust this logic to use server-side functionalities or
  // a static generation feature compatible with Next.js 14.
  const posts: Post[] = getPosts();

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <article key={post.slug} className="p-4 shadow rounded-lg">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <Link href={`/news/${post.slug}`} className="text-blue-500 hover:text-blue-700">
            Read more
          </Link>
        </article>
      ))}
    </div>
  );
};

export default NewsPage;
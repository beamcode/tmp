// import { getPosts } from '../../../utils/posts';
// import { Post } from '../../../utils/types';

// // Note: Removed `useRouter` import since it's part of client-side navigation and causes issues in server components.

// export async function loader({ params }: { params: { slug: string } }) {
//   const posts = getPosts();
//   const post = posts.find((p) => p.slug === params.slug);
//   if (!post) {
//     throw new Error('Post not found');
//   }
//   return { post };
// }

// // Since we cannot use client-side navigation or hooks like `useRouter`, we focus on the loader for fetching data
// // and rendering content directly based on the loader's result, avoiding client-side specific operations.

// export default function PostPage({ data }: { data: { post: Post } }) {
//   // Directly render the post content without relying on client-side hooks or navigation.
//   return (
//     <article className="prose lg:prose-xl p-4">
//       <h1>{data.post.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
//     </article>
//   );
// }
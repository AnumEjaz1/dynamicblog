import fs from 'fs';
import path from 'path';
import Head from 'next/head';

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

// Server Component
export default async function PostPage({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), 'src/data/posts.json');
  let post: Post | null = null;

  try {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const posts: Post[] = JSON.parse(fileData);
    post = posts.find((p) => p.id === params.id) || null;
  } catch (error) {
    console.error('Error reading posts file:', error);
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} - Eastern Dresses, Fashion Trends, and Style Tips</title>
        <meta name="description" content={post.content} />
      </Head>
      <div className="max-w-6xl mx-auto p-8">
        <h1 className="text-5xl font-bold text-gray-900">{post.title}</h1>
        <p className="text-gray-600 mt-4">{post.date}</p>
        <p className="mt-6 text-lg">{post.content}</p>
      </div>
    </>
  );
}

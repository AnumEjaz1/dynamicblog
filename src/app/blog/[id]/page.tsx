"use client"; // 👈 Mark as Client Component

import { usePathname } from "next/navigation"; // Updated import
import fs from 'fs';
import path from 'path';
import Head from 'next/head';

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface PostPageProps {
  post: Post | null;
}

const PostPage = ({ post }: PostPageProps) => {
  const pathname = usePathname();
  const id = pathname.split("/").pop(); // Extract the ID from the URL

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
};

export async function getStaticPaths() {
  const filePath = path.join(process.cwd(), 'src/data/posts.json');

  try {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const posts: Post[] = JSON.parse(fileData);

    const paths = posts.map(post => ({
      params: { id: post.id },
    }));

    return {
      paths,
      fallback: true, // Can set to false if all posts are pre-generated
    };
  } catch (error) {
    console.error('Error reading posts file:', error);

    return {
      paths: [],
      fallback: true,
    };
  }
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const filePath = path.join(process.cwd(), 'src/data/posts.json');

  try {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const posts: Post[] = JSON.parse(fileData);

    const post = posts.find(post => post.id === params.id) || null;

    return {
      props: {
        post,
      },
    };
  } catch (error) {
    console.error('Error reading posts file:', error);

    return {
      props: {
        post: null,
      },
    };
  }
}

export default PostPage;

// src/app/blog/page.tsx
"use client"; // Ensure this page is client-side

import Link from "next/link"; // Import Link for navigation
import Head from "next/head"; // Import Head for meta tags
import dynamic from "next/dynamic";
import Comments from "../components/comments";

// Dynamically import the LikeButton component with SSR disabled
const LikeButton = dynamic(() => import("../components/likebutton"), {
  ssr: false, // Disable SSR for this component
});

const BlogPage = () => {
  return (
    <>
      <Head>
        <title>Blog - Eastern Dresses, Fashion Trends, and Style Tips</title>
        <meta name="description" content="Explore our latest blog posts on traditional Eastern dresses, modern styling tips, and global fashion trends." />
        <meta name="keywords" content="Eastern Dresses, Fashion Trends, Style Tips, Traditional Dresses, Modern Fashion" />
        <meta name="author" content="Your Name or Blog Name" />
      </Head>

      <div className="text-center min-h-screen bg-gradient-to-br from-rose-500 via-red-400 to-yellow-300 p-12">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">✨ Blog ✨</h1>
        <p className="mt-4 text-xl text-white font-medium">
          Explore our latest posts about **Eastern Dresses, Fashion Trends, and Style Tips!**
        </p>

        {/* Blog Posts List */}
        <div className="mt-12 space-y-8">
          {/* Blog Post 1 */}
          <div className="bg-white/80 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900">The Beauty of Traditional Eastern Dresses</h2>
            <p className="text-gray-700 mt-2">
              An in-depth look into the intricate designs and cultural significance of Eastern fashion.
            </p>
            <Link href="/blog/post1" className="text-red-600 mt-4 block font-semibold hover:underline">Read More →</Link>
            {/* Like Button */}
            <LikeButton /> {/* This is where LikeButton is dynamically imported */}
          </div>

          {/* Blog Post 2 */}
          <div className="bg-white/80 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900">How to Style Eastern Dresses for Modern Occasions</h2>
            <p className="text-gray-700 mt-2">
              Tips and tricks on incorporating traditional attire into everyday modern fashion.
            </p>
            <Link href="/blog/post2" className="text-red-600 mt-4 block font-semibold hover:underline">Read More →</Link>
            {/* Like Button */}
            <LikeButton /> {/* This is where LikeButton is dynamically imported */}
          </div>

          {/* Blog Post 3 */}
          <div className="bg-white/80 p-6 rounded-lg shadow-lg transition transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-2xl font-semibold text-gray-900">The Influence of Eastern Fashion on Western Trends</h2>
            <p className="text-gray-700 mt-2">
              Exploring how Eastern dress styles are making their way into global fashion trends.
            </p>
            <Link href="/blog/post3" className="text-red-600 mt-4 block font-semibold hover:underline">Read More →</Link>
            {/* Like Button */}
            <LikeButton /> {/* This is where LikeButton is dynamically imported */}
               {/* Comments Section */}
      <Comments />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;

// src/app/blog/post3/page.tsx

'use client'; // Mark this as a client-side component

import Image from "next/image";
import Head from "next/head"; // Import Head for SEO
import Link from "next/link";
import LikeButton from "@/app/components/likebutton";

const Post3 = () => {
  return (
    <>
      <Head>
        <title>The Influence of Eastern Fashion on Western Trends</title>
        <meta
          name="description"
          content="Explore how Eastern dress styles, including luxurious fabrics, intricate embroidery, and flowing silhouettes, are influencing global fashion trends."
        />
        <meta
          name="keywords"
          content="Eastern Fashion, Western Fashion, Global Fashion Trends, Embroidery, Eastern Dress Styles, Modern Designers"
        />
        <meta name="author" content="Your Name or Blog Name" />
      </Head>

      <div className="max-w-6xl mx-auto p-8 rounded-xl shadow-xl bg-gradient-to-br from-pink-500 via-purple-400 to-blue-300 text-white">
        
        {/* 🚀 Scrolling Marquee Title */}
        <div className="relative w-full overflow-hidden h-16">
          <div className="absolute whitespace-nowrap animate-marquee">
            <h1 className="text-5xl font-extrabold text-yellow-300 drop-shadow-lg">
              ✨ The Influence of Eastern Fashion on Western Trends ✨
            </h1>
          </div>
        </div>

        {/* 📅 Post Date */}
        <p className="mt-4 text-lg text-gray-200 italic">📅 Posted on February 14, 2025</p>

        {/* 📖 Blog Content */}
        <div className="mt-6 space-y-6">
          <p className="text-lg leading-relaxed text-gray-100">
            Eastern fashion has made a <strong>bold mark</strong> on global trends. With <strong>luxurious fabrics</strong>, intricate embroidery, and flowing silhouettes,  
            Eastern fashion is influencing <strong>modern designers worldwide</strong>. 🌏✨  
          </p>

          {/* 🌟 Image Grid Section */}
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* 🟢 Image 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-green-500 opacity-40 rounded-xl transition duration-300 group-hover:opacity-0"></div>
              <Image
                src="/suit1.jpg"
                alt="Eastern Suit 1"
                width={700}
                height={700}
                className="object-cover w-full h-auto rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
              />
              {/* Like Button */}
            <LikeButton /> {/* This is where LikeButton is dynamically imported */}
            </div>

            {/* 🟡 Image 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-yellow-600 opacity-40 rounded-xl transition duration-300 group-hover:opacity-0"></div>
              <Image
                src="/suit2.jpg"
                alt="Eastern Suit 2"
                width={700}
                height={700}
                className="object-cover w-full h-auto rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
              />
               {/* Add the LikeButton component */}
               <LikeButton />
            </div>

            {/* 🟣 Image 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-purple-400 opacity-40 rounded-xl transition duration-300 group-hover:opacity-0"></div>
              <Image
                src="/suit3.jpg"
                alt="Eastern Suit 3"
                width={700}
                height={700}
                className="object-cover w-full h-auto rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
              />
               {/* Add the LikeButton component */}
               <LikeButton />
            </div>

          </div>

          {/* 🔗 Call-to-Action */}
          <div className="text-center">
            <button className="px-6 py-3 bg-yellow-400 text-purple-800 font-bold text-lg rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
              Read More
            </button>
            {/* Back to Blog Link */}
            <Link
              href="/blog"
              className="text-blue-600 mt-6 block hover:underline"
            >
              Back to Blog
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Post3;

// src/app/blog/post2/page.tsx
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Post2 = () => {
  return (
    <>
      <Head>
        <title>How to Style Eastern Dresses for Modern Occasions</title>
        <meta
          name="description"
          content="Learn how to modernize traditional Eastern dresses for contemporary fashion trends. Style sarees, kurtas, and more for a fashionable yet cultural look."
        />
        <meta property="og:title" content="How to Style Eastern Dresses for Modern Occasions" />
        <meta
          property="og:description"
          content="Learn how to modernize traditional Eastern dresses for contemporary fashion trends. Style sarees, kurtas, and more for a fashionable yet cultural look."
        />
      </Head>

      <div className="max-w-6xl min-h-screen bg-gradient-to-br from-red-400 via-orange-300 to-yellow-200 mx-auto p-8">
        <div className="overflow-hidden whitespace-nowrap">
          <h1 className="text-4xl font-bold text-white animate-marquee">
            How to Style Eastern Dresses for Modern Occasions
          </h1>
          <p className="text-gray-600 mt-4">Posted on February 14, 2025</p>
          <div className="mt-6">
            <p className="text-lg">
              Traditional Eastern dresses can be styled in a variety of modern
              ways. Whether it is pairing a vibrant saree with a denim jacket or
              wearing a stylish kurta with casual jeans, these outfits can be made
              more approachable for modern times without losing their cultural
              essence.
            </p>
            <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Image
                src="/post1.jpg"
                alt="Main Banner"
                width={1200}
                height={500}
                layout="responsive"
              />
              <Image
                src="/kurta.jpg"
                alt="Main Banner"
                width={1200}
                height={500}
                layout="responsive"
              />
              <Image
                src="/saree.jpg"
                alt="Main Banner"
                width={1200}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </div>

        {/* Back to Blog Link */}
        <Link
          href="/blog"
          className="text-gray-900 font-bold mt-6 block hover:underline"
        >
          Back to Blog
        </Link>
      </div>
    </>
  );
};

export default Post2;

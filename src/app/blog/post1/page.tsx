import Link from 'next/link';  // Importing Link here as well
import Head from 'next/head';
import Image from "next/image";

const Post1 = () => {
  return (
    <>
      <Head>
        <title>The Beauty of Traditional Eastern Dresses</title>
        <meta name="description" content="Discover the elegance, intricate designs, and cultural significance of traditional Eastern dresses." />
        <meta name="keywords" content="Traditional Eastern Dresses, Embroidery, Cultural Significance, Fashion" />
        <meta name="author" content="Your Name or Blog Name" />
      </Head>
      
      <div className="max-w-6xl bg-gradient-to-b from-gray-900 via-gray-600 to-yellow-500 mx-auto p-8 rounded-2xl shadow-lg">
        <h1 className="text-5xl overflow-hidden whitespace-nowrap text-4xl font-bold text-white animate-marquee font-4xl text-white drop-shadow-md text-center">
          ✨ The Beauty of Traditional Eastern Dresses ✨
        </h1>

        {/* Post Date */}
        <p className="text-gray-300 mt-4 text-center">📅 Posted on February 14, 2025</p>

        <div className="mt-6 space-y-6">
          {/* Content */}
          <p className="text-lg text-white leading-relaxed">
            Eastern dresses are known for their **elegance, intricate designs, and cultural significance**. These dresses are not just a fashion statement; they represent a deep connection to the cultural and historical heritage of the East.
            The **embroidery, colors, and fabrics** used in these dresses tell stories passed down through generations.
          </p>

          {/* Main Image */}
          <div className="overflow-hidden rounded-lg shadow-md">
            <Image 
              src="/main.jpg" 
              alt="Traditional Eastern Dress" 
              width={1200} 
              height={600} 
              className="rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Additional Description */}
          <p className="text-lg text-white leading-relaxed">
            From **delicate hand-stitched patterns** to **luxurious silk fabrics**, each piece embodies **centuries of tradition**.
            Eastern dresses are widely admired for their **graceful drapery and breathtaking craftsmanship**.
          </p>
           {/* Back to Blog Link */}
        <Link
          href="/blog"
          className="text-gray-900 font-bold mt-6 block  hover:underline"
        >
          Back to Blog
        </Link>
        </div>
      </div>
    </>
  );
}

export default Post1;

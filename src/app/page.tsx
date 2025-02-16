// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
import LikeButton from './components/likebutton';
const Home = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: "url('/main.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Explore the Elegance of Eastern Fashion
          </h1>
          <p className="text-xl mb-8 max-w-lg">
            Discover our exquisite collection of traditional eastern dresses that blend culture and style.
          </p>
          <a href="#shop" className="px-6 py-3 text-lg bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300">
            Shop Now
          </a>
           {/* Link to Checkout Page */}
      <Link href="/checkout">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full mt-2 hover:bg-orange-700 transition-all duration-300">
          Proceed to Checkout
        </button>
      </Link>
        </div>
      </section>
      

      {/* Additional Section (e.g., Featured Products) */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">Featured Collections</h2>
        <p className="text-lg mb-6">Explore our top picks for this season.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    
          <div className="p-6 bg-white shadow-lg rounded-lg  transition duration-300 transform hover:scale-105">
            <Image src="/main1.jpg" alt="Dress" width={400} height={300} className="rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">Elegant Silk Dress</h3>
            <p className="text-gray-600">From $299.99</p>
          {/* Like Button */}
          <LikeButton /> {/* This is where LikeButton is dynamically imported */}
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg  transition duration-300 transform hover:scale-105">
            <Image src="/main2.jpg" alt="Dress" width={400} height={300} className="rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">Elegant Silk Dress</h3>
            <p className="text-gray-600">From $199.99</p>
            {/* Like Button */}
            <LikeButton /> {/* This is where LikeButton is dynamically imported */}
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg  transition duration-300 transform hover:scale-105">
            <Image src="/post1.jpg" alt="Dress" width={400} height={300} className="rounded-lg" />
            <h3 className="mt-4 text-xl font-semibold">Elegant Silk Dress</h3>
            <p className="text-gray-600">From $99.99</p>
          {/* Like Button */}
          <LikeButton /> {/* This is where LikeButton is dynamically imported */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

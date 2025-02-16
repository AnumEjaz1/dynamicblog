import Link from 'next/link';

export default function Header() {
  return (
    <header className=" bg-gradient-to-br from-blue-900 via-green-600 to-teal-400 text-white p-4">
      <nav className="flex justify-center space-x-6">
        <Link href="/" className="text-xl font-semibold hover:text-blue-400">
          Home
        </Link>
        <Link href="/about" className="text-xl font-semibold hover:text-blue-400">
          About
        </Link>
        <Link href="/blog" className="text-xl font-semibold hover:text-blue-400">
          Blog
        </Link>
        <Link href="/contact" className="text-xl font-semibold hover:text-blue-400">
          Contact
        </Link>
      </nav>
    </header>
  );
}

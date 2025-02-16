export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-blue-600 text-white p-8">
      
      {/* 🌟 Contact Title */}
      <h1 className="text-5xl font-extrabold drop-shadow-lg">📞 Contact Us</h1>
      
      {/* 📜 Description */}
      <p className="mt-4 text-lg text-gray-200 text-center max-w-2xl">
        We would love to hear from you! Whether you have a question, feedback, or just want to say hi, feel free to reach out.
      </p>

      {/* 📩 Contact Info */}
      <div className="mt-6 text-lg space-y-3">
        <p className="flex items-center gap-2">
          📧 <span className="font-semibold">Email:</span> <a href="mailto:contact@easterndressesblog.com" className="underline hover:text-yellow-300 transition">contact@easterndressesblog.com</a>
        </p>
        <p className="flex items-center gap-2">
          📞 <span className="font-semibold">Phone:</span> +1 234 567 890
        </p>
        <p className="flex items-center gap-2">
          📍 <span className="font-semibold">Address:</span> 123 Eastern Dress St, Fashion City, Country
        </p>
      </div>

      {/* 💌 Contact Form */}
      <div className="mt-8 bg-white p-6 rounded-xl shadow-lg w-full max-w-lg text-gray-800">
        <h2 className="text-2xl font-bold text-center text-purple-700">Send Us a Message</h2>
        
        <form className="mt-4 space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-300 outline-none" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-300 outline-none" />
          <textarea placeholder="Your Message" rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-purple-300 outline-none"></textarea>
          <button type="submit" className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition">
            ✉️ Send Message
          </button>
        </form>
      </div>

    </div>
  );
}

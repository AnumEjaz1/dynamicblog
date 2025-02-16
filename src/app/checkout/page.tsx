export default function Checkout() {
    return (
      <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 shadow-lg rounded-xl">
        <h1 className="text-4xl font-bold text-center text-white">Checkout</h1>
        <p className="text-center text-white mt-2 text-lg">Complete your order details below and enjoy exclusive deals!</p>
  
        {/* Order Summary */}
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Order Summary</h2>
          <div className="mt-4 flex justify-between text-lg">
            <p className="text-gray-700">Item: Stylish Eastern Suit</p>
            <p className="text-gray-700 font-semibold">$120</p>
          </div>
          <div className="mt-2 flex justify-between text-lg">
            <p className="text-gray-700">Shipping: Standard</p>
            <p className="text-gray-700 font-semibold">$15</p>
          </div>
          <div className="mt-4 flex justify-between text-xl font-semibold text-gray-800">
            <p>Total:</p>
            <p className="text-green-500">$135</p>
          </div>
        </div>
  
        {/* Form Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white">Shipping Details</h2>
          <form className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="text"
              placeholder="Shipping Address"
              className="w-full p-3 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
  
            <button className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200">
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    );
  }
  
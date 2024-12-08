export default function Contact() {
  return (
    <>
      {/* Header Section */}
      <div className="relative w-full h-[200px] bg-[#F6F5FF] text-left p-9">
        <h1 className="text-[#151875] font-bold text-2xl">Contact Us</h1>
        <p>
          Home . Page . <span className="text-pink-500">Contact</span>
        </p>
      </div>

      {/* Two-Column Section */}
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-5 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Column: Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-[28px] font-bold text-gray-800 mb-6">Get in Touch</h2>
            <form className="space-y-6">
              {/* Name and Email in one row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200"
                />
              </div>

              {/* Subject */}
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200"
              />

              {/* Message */}
              <textarea
  placeholder="Message"
  rows={5} // Use a number, not a string
  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-200"
></textarea>


              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center">
            <img
              src="/contact-image.jpg"
              alt="Contact Us"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}

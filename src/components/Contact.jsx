const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#111827] text-gray-200 px-4">
      <div className="max-w-lg w-full bg-[#1F2937] p-8 rounded-2xl shadow-xl border border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-4">
          Get in <span className="text-[#F7B500]">Touch</span>
        </h1>
        <p className="text-gray-400 text-center mb-8">
          We would love to hear from you. Please fill out the form below and
          we’ll get back soon.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-600 focus:outline-none focus:border-[#F7B500] text-gray-200"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-600 focus:outline-none focus:border-[#F7B500] text-gray-200"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-[#111827] border border-gray-600 focus:outline-none focus:border-[#F7B500] text-gray-200"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-[#F7B500] text-black font-semibold rounded-lg hover:bg-[#e2a200] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

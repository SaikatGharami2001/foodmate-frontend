const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 – Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <h2 className="text-white font-semibold text-xl">FoodX</h2>
          </div>

          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering happiness, one meal at a time. Built with React,
            Tailwind, and passion.
          </p>
        </div>

        {/* Column 2 – Company */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition-colors cursor-pointer">
              About Us
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Careers
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Press
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Blog
            </li>
          </ul>
        </div>

        {/* Column 3 – Support */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition-colors cursor-pointer">
              Help Center
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              FAQs
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Cancellation
            </li>
            <li className="hover:text-white transition-colors cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>

        {/* Column 4 – Social */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Connect</h3>

          <div className="flex items-center gap-4">
            {/* Twitter */}
            <a
              href="#"
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M24 4.557c-.883.392-1.832..." />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M19.615 3.184c-3.604..." />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M4.98 3.5c0 1.38-1.1..." />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-5">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FoodX · All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

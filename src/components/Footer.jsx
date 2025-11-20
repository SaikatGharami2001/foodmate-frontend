const Footer = () => {
  return (
    <footer className="bg-[#0B0F15] text-gray-300 border-t border-[#1a1f27] mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1 – Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
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
            {/* Social Button */}
            <a
              href="#"
              className="p-2 rounded-lg bg-[#1b2534] hover:bg-[#273345] transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.918 4.918 0 0 0-8.384 4.482A13.953 13.953 0 0 1 1.671 3.149 4.917 4.917 0 0 0 3.195 9.723a4.903 4.903 0 0 1-2.229-.616v.061a4.918 4.918 0 0 0 3.946 4.827 4.996 4.996 0 0 1-1.292.172c-.314 0-.622-.03-.921-.086a4.93 4.93 0 0 0 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.01-7.51 14.01-14.01 0-.213-.005-.425-.015-.636A9.935 9.935 0 0 0 24 4.557z" />
              </svg>
            </a>

            <a
              href="#"
              className="p-2 rounded-lg bg-[#1b2534] hover:bg-[#273345] transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C1.855 3.45 1.4 5.804 1.37 12c.03 6.185.485 8.549 3.016 8.816 3.6.245 11.626.246 15.23 0 2.708-.185 3.177-2.29 3.385-5.603.062-.954.03-6.92-.016-7.855-.208-3.313-.677-5.417-3.37-5.808zM9 16.5v-9l7 4.5-7 4.5z" />
              </svg>
            </a>

            <a
              href="#"
              className="p-2 rounded-lg bg-[#1b2534] hover:bg-[#273345] transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h4v1.71c.56-.89 1.67-1.71 3.44-1.71 3.3 0 4.56 2.02 4.56 5.57V21h-4v-5.06c0-1.48-.03-3.39-2.06-3.39-2.07 0-2.39 1.62-2.39 3.29V21H9z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700/40 py-5">
        <p className="text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} FoodX · All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

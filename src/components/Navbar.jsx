import { useContext } from "react";
import { DataContext } from "../App";

import { Link } from "react-router-dom";
import { useStore } from "../store/useStore";

const Navbar = () => {
  const count = useStore((state) => state.count);

  const { handleSearch, setFilteredData } = useContext(DataContext);

  return (
    <nav className="w-full bg-[#0B0F15] border-b border-[#1a1f27] sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between gap-8">
        {/* LEFT — LOGO + MENU */}
        <div className="flex items-center gap-12">
          <div className="text-3xl font-extrabold tracking-tight cursor-pointer select-none">
            <Link to="/" onClick={() => setFilteredData(null)}>
              <span className="text-white">Food</span>
              <span className="text-[#F7B500]">Mate</span>
              <span className="text-[#FF5C8A]">🍗</span>
            </Link>
          </div>

          {/* MENU */}
          <div className="hidden md:flex items-center gap-8 text-gray-300 text-[15px] font-medium">
            <Link
              to="/"
              onClick={() => setFilteredData(null)}
              className="hover:text-[#F7B500] transition cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#F7B500] transition cursor-pointer"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#F7B500] transition cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* CENTER — SEARCH */}
        <div className="hidden md:flex flex-1 max-w-md items-center bg-[#0F131A] border border-[#2a3140] rounded-xl px-4 py-2 focus-within:border-[#4ADE80] transition">
          <input
            type="text"
            placeholder="Search restaurants or cuisines…"
            onChange={handleSearch}
            className="bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none w-full text-sm"
          />
          <span className="text-gray-400 text-lg">🔍</span>
        </div>

        {/* RIGHT — CART + PROFILE */}
        <div className="flex items-center gap-6">
          {/* CART */}
          <button className="relative p-2 rounded-full hover:bg-[#141a22] transition">
            <span className="text-[#F7B500] text-xl">🛒</span>
            <span className="absolute -top-1 -right-1 bg-[#FF5C8A] text-white text-[10px] px-[6px] py-[1px] rounded-full shadow-md font-semibold">
              {count}
            </span>
          </button>

          {/* PROFILE */}
          <div className="w-11 h-11 rounded-full overflow-hidden border border-[#2d3340] shadow-md cursor-pointer hover:scale-105 hover:border-[#4ADE80] transition-all">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

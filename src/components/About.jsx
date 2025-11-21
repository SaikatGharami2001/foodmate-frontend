const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#0d1117] text-white px-6 md:px-20 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-yellow-400">
          About <span className="text-white">FoodMate</span> 🥘
        </h1>

        {/* Description */}
        <p className="text-lg leading-7 text-gray-300 mb-10">
          FoodMate is your personal food discovery companion — crafted with
          love, clean UI, and a mission to make ordering food feel premium and
          smooth. Whether you're craving something spicy, sweet,
          budget-friendly, or fast delivery, FoodMate helps you discover the
          best restaurants around you.
        </p>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <div className="bg-[#161b22] p-6 rounded-xl border border-[#262c36] hover:border-yellow-400 transition">
            <h2 className="text-xl font-semibold mb-3 text-yellow-300">
              🔥 Curated Listings
            </h2>
            <p className="text-gray-400">
              From top-rated places to best budget eateries—everything is
              organized for your comfort.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#161b22] p-6 rounded-xl border border-[#262c36] hover:border-yellow-400 transition">
            <h2 className="text-xl font-semibold mb-3 text-green-300">
              ⚡ Fast Delivery Picks
            </h2>
            <p className="text-gray-400">
              Quickly find restaurants with the shortest delivery times near
              you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#161b22] p-6 rounded-xl border border-[#262c36] hover:border-yellow-400 transition">
            <h2 className="text-xl font-semibold mb-3 text-blue-300">
              🥗 Pure Veg & Non-Veg Filters
            </h2>
            <p className="text-gray-400">
              Easy filtering to match your taste, preference, and mood.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-[#161b22] p-8 rounded-2xl border border-[#262c36]">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-400">
            Built With Passion 💛
          </h2>
          <p className="text-gray-300 leading-7">
            This platform is designed to deliver a smooth, visually satisfying
            experience — from browsing restaurants to reading their ratings and
            delivery times. FoodMate represents modern UI, fast performance, and
            a user-centric flow inspired by real food apps but built from
            scratch with creativity and precision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
      {Array(12)
        .fill("")
        .map((_, i) => (
          <div
            key={i}
            className="bg-[#0F131A] rounded-2xl overflow-hidden shadow-lg border border-[#1b2030] p-3 animate-pulse"
          >
            {/* Image */}
            <div className="w-full h-40 bg-gray-800 rounded-xl"></div>

            {/* Content */}
            <div className="mt-4 space-y-3">
              <div className="h-4 bg-gray-700 w-3/4 rounded-md"></div>
              <div className="h-3 bg-gray-700 w-1/2 rounded-md"></div>

              <div className="flex justify-between mt-4">
                <div className="h-4 bg-gray-700 w-20 rounded-md"></div>
                <div className="h-4 bg-gray-700 w-16 rounded-md"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="relative w-44 h-44">
        {/* Rotating Border */}
        <div className="absolute inset-0 border-8  border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>

        {/* Centered Image */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h2 className="text-[#232321] text-5xl font-bold uppercase rubik">
            Kicks
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

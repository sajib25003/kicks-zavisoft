import banner_img from "../assets/banner.jpg";
import thumb1 from "../assets/thumb1.jpg"; // ছোট image গুলো import করো
import thumb2 from "../assets/thumb2.jpg";

const Banner = () => {
  return (
    <div
      className="relative rounded-3xl md:rounded-[64px] overflow-hidden 
                 bg-cover bg-center bg-no-repeat 
                 h-95.5 md:h-187.5 w-full"
      style={{ backgroundImage: `url(${banner_img})` }}
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 
                   bg-linear-to-b 
                   from-black/0 from-[31.12%] 
                   to-black/60 to-[75.06%]"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 h-full w-full  flex justify-between">
        {/* LEFT SIDE */}
        <div className="relative flex flex-col justify-between h-full">
          {/* Vertical Badge */}
          <div className="absolute -left-16 md:-left-20 top-15 md:top-20 mt-5.75 md:mt-20">
            <div className="bg-[#232321] p-2 md:p-6 rounded-b-lg md:rounded-b-2xl -rotate-90">
              <p className="text-[#E7E7E3] rubik text-xs md:text-base font-semibold">
                Nike product of the year
              </p>
            </div>
          </div>

          {/* Bottom Text Content */}
          <div className="max-w-xl mt-auto ml-4 md:ml-12 mb-4 md:mb-12">
            <h1 className="text-[#E7E7E3] rubik uppercase text-2xl md:text-[74px] font-semibold">
              NIKE AIR MAX
            </h1>
            <p className="text-[#E7E7E3] open-sans mt-1 text-sm md:text-2xl font-semibold">
              Nike introducing the new air max for everyone's comfort
            </p>

            <button
              className="mt-4 bg-[#4A69E2] rubik
                               text-[#E7E7E3] px-4 md:px-8 py-3 md:py-4 rounded-lg 
                               text-sm font-semibold transition hover:cursor-pointer"
            >
              SHOP NOW
            </button>
          </div>
        </div>

        {/* RIGHT SIDE THUMBNAILS */}
        <div className=" flex flex-col justify-end gap-2 md:gap-4 mb-4 mr-4 md:mb-8 md:mr-8">
          {/* <div
            className="absolute inset-0 
                   bg-linear-to-b 
                   from-black/0 from-[31.12%] 
                   to-black/20 to-[75.06%]"
          /> */}
          <img
            src={thumb1}
            alt="thumb1"
            className="w-16 aspect-square md:w-40 md:aspect-square object-cover rounded-lg md:rounded-4xl border md:border-3 border-[#E7E7E3]"
          />
          <img
            src={thumb2}
            alt="thumb2"
            className="w-16 aspect-square md:w-40 md:aspect-square object-cover rounded-lg md:rounded-4xl border md:border-3 border-[#E7E7E3]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

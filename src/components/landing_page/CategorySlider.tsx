import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useGet } from "../../custom-hooks/apiHooks";
import type { ICategory } from "../../types/types";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function CategoriesSlider() {
  const { data: categories, isLoading } = useGet<ICategory[]>(
    ["categories"],
    "/categories",
  );

  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-[#232321] p-6 md:pl-15 md:pt-16">
      <div className="flex justify-between items-center mb-6 md:mb-10">
        <h2 className="text-white text-2xl md:text-[74px] font-semibold tracking-wide">
          CATEGORIES
        </h2>

        <div className="flex gap-4 mr-4 md:mr-16">
          <button
            disabled={isBeginning}
            onClick={() => swiper?.slidePrev()}
            className={`rounded-lg p-2 md:p-2 transition-all
              ${
                isBeginning
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#E7E7E3] hover:bg-white hover:cursor-pointer"
              }
            `}
          >
            <RiArrowLeftSLine className="text-3xl text-[#232321]" />
          </button>

          <button
            disabled={isEnd}
            onClick={() => swiper?.slideNext()}
            className={`rounded-lg p-2 md:p-2 transition-all
              ${
                isEnd
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#E7E7E3] hover:bg-white hover:cursor-pointer"
              }
            `}
          >
            <RiArrowRightSLine className="text-3xl text-[#232321]" />
          </button>
        </div>
      </div>

      <div className="bg-[#ECEEF0] rounded-tl-[64px] overflow-hidden">
        <Swiper
          slidesPerView={2}
          spaceBetween={0}
          onSwiper={(s) => {
            setSwiper(s);
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
          onSlideChange={(s) => {
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
        >
          {Array.isArray(categories) &&
            categories.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="w-full object-cover bg-[#F6F6F6]"
                  />

                  <div className="my-4 md:mt-6 px-4 md:px-16 md:mb-7.5 flex justify-between items-center text-black w-full gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {item.name}
                    </h3>
                    <div className="bg-[#232321] text-white w-6 md:w-8 aspect-square rounded-lg flex justify-center items-center">
                      ↗
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

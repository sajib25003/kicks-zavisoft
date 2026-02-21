import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { useGet } from "../../custom-hooks/apiHooks";
import type { ICategory } from "../../types/types";

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
      {/* Header */}
      <div className="flex justify-between items-center mb-6 md:mb-10">
        <h2 className="text-white text-2xl md:text-[74px] font-semibold tracking-wide">
          CATEGORIES
        </h2>

        {/* Custom Arrows */}
        <div className="flex gap-4 items-center relative mr-4 md:mr-16">
          <div
            className={`px-2.5 py-1.5 md:px-3.75 md:py-2.5 rounded-lg swiper-button-prev text-[#232321] bg-[#E7E7E3] rotate-180 ${
              isBeginning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => swiper?.slidePrev()}
          ></div>

          <div
            className={`px-2.5 py-1.5 md:px-3.75 md:py-2.5 rounded-lg swiper-button-next text-[#232321] bg-[#E7E7E3] ${
              isEnd ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={() => swiper?.slideNext()}
          ></div>
        </div>
      </div>

      {/* Slider */}
      <div className="bg-[#ECEEF0] rounded-tl-[64px] overflow-hidden">
        <Swiper
          modules={[Navigation]}
          onSwiper={(s) => {
            setSwiper(s);
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
          onSlideChange={(s) => {
            setIsBeginning(s.isBeginning);
            setIsEnd(s.isEnd);
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={0}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {Array.isArray(categories) &&
            categories.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full object-cover bg-[#F6F6F6] "
                  />

                  <div className="my-4 md:mt-6 px-4 md:px-16 md:mb-7.5 flex justify-between items-center text-black w-full gap-4">
                    <h3 className="text-xl md:text-2xl font-semibold">
                      {item.name}
                    </h3>
                    <div className="bg-[#232321] text-white px-2 w-6 md:w-8 aspect-square text-center rounded-lg flex justify-center items-center">
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

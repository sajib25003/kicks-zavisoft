import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { useGet } from "../../custom-hooks/apiHooks";
import type { ICategory } from "../../types/types";
import LoadingSpinner from "../common/LoadingSpinner";
import { toast } from "react-toastify";

export default function CategoriesMobile() {
  const {
    data: categories,
    isLoading,
    isError,
  } = useGet<ICategory[]>(["categories"], "/categories");

  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  if (isLoading) return <LoadingSpinner />;
  if (!categories) return null;

  const groupedCategories = [];
  for (let i = 0; i < categories.length; i += 2) {
    groupedCategories.push(categories.slice(i, i + 2));
  }

  if (isError) {
    toast.error("Data Fetching Failed!");
  }

  return (
    <div className="bg-[#232321] px-4 py-6">
      <div className="flex justify-between items-center px-4 mb-6">
        <h2 className="text-white text-2xl font-semibold">Categories</h2>

        <div className="flex gap-3">
          <button
            disabled={isBeginning}
            onClick={() => swiper?.slidePrev()}
            className={`w-9 h-9 rounded-lg flex items-center justify-center
              ${isBeginning ? "bg-gray-500" : "bg-[#E7E7E3]"}
            `}
          >
            <RiArrowLeftSLine className="text-xl text-black" />
          </button>

          <button
            disabled={isEnd}
            onClick={() => swiper?.slideNext()}
            className={`w-9 h-9 rounded-lg flex items-center justify-center
              ${isEnd ? "bg-gray-500" : "bg-[#E7E7E3]"}
            `}
          >
            <RiArrowRightSLine className="text-xl text-black" />
          </button>
        </div>
      </div>

      {categories.length === 0 ? (
        <p className="text-center text-red-500 text-2xl font-bold">
          No category available
        </p>
      ) : (
        <div className="bg-[#ECEEF0] rounded-tl-[40px] overflow-hidden ">
          <Swiper
            slidesPerView={1}
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
            {groupedCategories.map((group, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col">
                  {group.map((item) => (
                    <div key={item.id}>
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-full object-cover min-h-100 bg-gray-300"
                      />

                      <div className="px-4 py-6 flex justify-between items-center">
                        <h3 className="text-2xl rubik font-semibold text-[#232321]">
                          {item.name}
                        </h3>

                        <div className="bg-[#232321] text-white w-7 aspect-square rounded-lg flex justify-center items-center">
                          ↗
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
}

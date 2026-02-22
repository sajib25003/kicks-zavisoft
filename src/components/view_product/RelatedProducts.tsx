import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IProduct } from "../../types/types";
import { useGet } from "../../custom-hooks/apiHooks";
import ProductCard from "../common/ProductCard";
import { useState } from "react";

export default function RelatedProducts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { data: products, isLoading } = useGet<IProduct[]>(
    ["products"],
    "/products",
  );
  if (isLoading) return <div>Loading...</div>;
  return (
    <section className=" py-16 px-6 md:px-16 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold rubik text-[#232321]">
          You may also like
        </h2>

        {/* Arrows */}
        <div className="flex gap-3">
          <div className="related-prev w-10 h-10 rounded-lg bg-gray-400 flex items-center justify-center cursor-pointer">
            ‹
          </div>
          <div className="related-next w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center cursor-pointer">
            ›
          </div>
        </div>
      </div>

      {/* Slider */}
      <Swiper
        className="h-110"
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".related-prev",
          nextEl: ".related-next",
        }}
        // pagination={{
        //   clickable: true,
        // }}
        spaceBetween={24}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex % 4);
        }}
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {Array.isArray(products) &&
          products.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard product={item} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="flex justify-center gap-1 mt-8 ">
        {[0, 1, 2, 3].map((item) => (
          <div
            key={item}
            className={`h-1 w-8 rounded-full transition-all duration-300 ${
              activeIndex === item ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

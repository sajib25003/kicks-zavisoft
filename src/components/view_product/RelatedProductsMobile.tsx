import { useState } from "react";
import ProductCard from "../common/ProductCard";
import { useGet } from "../../custom-hooks/apiHooks";
import { IProduct } from "../../types/types";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function RelatedProductsMobile() {
  const { data: products, isLoading } = useGet<IProduct[]>(
    ["products"],
    "/products",
  );

  const [page, setPage] = useState(0);
  const itemsPerPage = 4;

  if (isLoading) return <div>Loading...</div>;
  if (!products) return null;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const paginatedProducts = products.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage,
  );

  return (
    <section className=" py-12 px-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold rubik text-[#232321]">
          You may also like
        </h2>

        <div className="flex gap-3">
          <button
            disabled={page === 0}
            onClick={() => setPage((prev) => prev - 1)}
            className={`w-9 h-9 rounded-lg flex items-center justify-center ${
              page === 0 ? "bg-gray-300 text-white" : "bg-[#232321] text-white"
            }`}
          >
            <RiArrowLeftSLine className="text-white text-lg" />
          </button>

          <button
            disabled={page === totalPages - 1}
            onClick={() => setPage((prev) => prev + 1)}
            className={`w-9 h-9 rounded-lg flex items-center justify-center ${
              page === totalPages - 1
                ? "bg-gray-300 text-white"
                : "bg-[#232321] text-white"
            }`}
          >
            <RiArrowRightSLine className="text-white text-lg" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex justify-center gap-1 mt-8">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all w-8 duration-300 ${
              page % 4 === index ? "bg-[#4A69E2]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

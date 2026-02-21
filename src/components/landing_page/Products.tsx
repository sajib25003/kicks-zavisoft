import { Link } from "react-router-dom";
import { useGet } from "../../custom-hooks/apiHooks";
import { IProduct } from "../../types/types";
import ProductCard from "../common/ProductCard";

const Products = () => {
  const { data: products, isLoading } = useGet<IProduct[]>(
    ["products"],
    "/products",
  );
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <div className="flex justify-between items-end">
        <h2 className="md:uppercase rubik text-2xl md:text-[74px] font-semibold text-[#232321] leading-none">
          Don&apos;t miss out <br />
          new drops
        </h2>
        <Link
          to={"/all-products"}
          className="bg-[#4A69E2] text-[14px]  rounded-lg py-2 px-8 uppercase mb-3"
        >
          {" "}
          Shop New Drops
        </Link>
      </div>
      <div className=" pt-8 grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-4">
        {Array.isArray(products) &&
          products
            .slice(0, 4)
            .map((item) => <ProductCard key={item.id} product={item} />)}
      </div>
    </div>
  );
};

export default Products;

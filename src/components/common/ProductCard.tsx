import { Link } from "react-router-dom";
import { IProduct } from "../../types/types";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.title}
          className="rounded-2xl md:rounded-[28px] p-2 bg-[#FAFAFA] h-45 md:min-h-65 aspect-square "
        />
        <div className="text-xs rubik font-semibold text-white bg-[#4A69E2] px-3 py-1.75 md:px-4 md:py-3 rounded-tl-2xl rounded-br-[20px] md:rounded-tl-3xl md:rounded-br-3xl absolute top-2 left-2">
          New
        </div>
      </div>
      <div className="flex flex-col justify-between h-full">
        <div className=" flex-1 h-full">
          <h3 className=" rubik text-[16px] md:text-[24px] font-semibold text-[#232321]">
            {product.title}
          </h3>
        </div>
        <Link
          to={`/view-product/${product.id}`}
          className=" bg-[#232321] rounded-lg uppercase mt-4 py-4 md:py-3 px-4 text-white text-xs md:text-[14px] rubik font-medium w-full text-center"
        >
          View Product -{" "}
          <span className="text-[#FFA52F]"> ${product.price}</span>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

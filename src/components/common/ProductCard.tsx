import { IProduct } from "../../types/types";

const ProductCard = ({ product }: { product: IProduct }) => {
  return (
    <div>
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.title}
          className="rounded-2xl md:rounded-[28px] p-2 bg-[#FAFAFA]"
        />
        <div className="text-xs rubik font-semibold bg-[#4A69E2] px-3 py-1.75 md:px-4 md:py-3 rounded-tl-2xl rounded-br-[20px] md:rounded-tl-3xl md:rounded-br-3xl absolute top-2 left-2">
          New
        </div>
      </div>
      <h3 className="rubik text-[16px] md:text-[24px] font-semibold text-[#232321]">
        {product.title}
      </h3>
      <button className="bg-[#232321] rounded-lg uppercase mt-4 py-2 px-4 text-white text-xs md:text-[14px] rubik font-medium w-full">
        View Product - <span className="text-[#FFA52F]"> ${product.price}</span>
      </button>
    </div>
  );
};

export default ProductCard;

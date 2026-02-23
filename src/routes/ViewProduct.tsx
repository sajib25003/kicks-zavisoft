import { Link, useNavigate, useParams } from "react-router-dom";
import { useGet } from "../custom-hooks/apiHooks";
import { IProduct } from "../types/types";
import { useState } from "react";
// import heart_icon from "../assets/icons/heart.svg";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import RelatedProducts from "../components/view_product/RelatedProducts";
import RelatedProductsMobile from "../components/view_product/RelatedProductsMobile";
import ViewProductImageSliderMobile from "../components/view_product/ViewProductImageSliderMobile";
import LoadingSpinner from "../components/common/LoadingSpinner";
import { toast } from "react-toastify";
import { Tooltip } from "react-tooltip";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { toggleFavorite } from "../redux/features/favoritesSlice";
import { addToCart } from "../redux/features/cartSlice";

const ViewProduct = () => {
  const { id } = useParams();
  const [selected, setSelected] = useState("blue");
  const [size, setSize] = useState("XS");
  const navigate = useNavigate();
  const {
    data: product,
    isLoading,
    isError,
  } = useGet<IProduct>(["product", `${id}`], `/products/${id}`);

  const images = Array.isArray(product?.images) ? product.images : [];
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites.items);

  const isFavorite = favorites.includes(Number(id));

  const sizeList: { size: string; available: boolean }[] = [
    {
      size: "XS",
      available: true,
    },
    {
      size: "S",
      available: true,
    },
    {
      size: "M",
      available: false,
    },
    {
      size: "L",
      available: true,
    },
    {
      size: "XL",
      available: true,
    },
    { size: "2XL", available: false },
    { size: "3XL", available: true },
  ];

  if (!product) return null;
  //add to card : using redux store
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: product.id.toString(),
        image: product.images[0],
        title: product.title,
        description: product.description,
        size: size,
        color: selected,
        quantity: 1,
        isFavorite: favorites.includes(product.id),
      }),
    );
  };
  //buy now: add to cart and then navigate to cart page
  const handleBuyNow = () => {
    if (!product) return;

    dispatch(
      addToCart({
        productId: product.id.toString(),
        image: product.images[0],
        title: product.title,
        description: product.description,
        size: size,
        color: selected,
        quantity: 1,
        isFavorite: favorites.includes(product.id),
      }),
    );

    navigate("/cart");
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    toast.error("Data Fetching Failed!");
  }

  return (
    <div className="mx-4.5 lg:mx-15 my-5 md:my-8 text-black">
      {!product || Object.keys(product).length === 0 ? (
        <p className="text-red-500 font-semibold text-xl text-center">
          No product data available!
        </p>
      ) : (
        <div className="flex flex-col md:flex-row w-full gap-4">
          {window.innerWidth <= 640 ? (
            <ViewProductImageSliderMobile images={images} />
          ) : (
            <div className="w-2/3  rounded-[48px] grid grid-cols-2 gap-4 overflow-hidden">
              {product &&
                images.map((item, idx) => (
                  <img
                    key={idx}
                    src={item}
                    alt={product?.slug}
                    className="h-127.5 w-full"
                  />
                ))}
            </div>
          )}
          <div className="md:w-1/3 ">
            <button className="bg-[#4A69E2] rubik text-xs font-semibold text-white px-4 py-3 rounded-xl ">
              New Release
            </button>
            <h2 className="my-4 rubik text-[#232321] text-[32px] font-semibold">
              {product?.title}
            </h2>
            <p className="text-[#4A69E2] rubik text-2xl font-semibold">
              ${product?.price.toFixed(2)}
            </p>
            <div className="my-8">
              <p className="rubik text-base uppercase mb-2 font-semibold text-[#232321]">
                Color
              </p>
              <div className="flex gap-6">
                <button
                  onClick={() => setSelected("blue")}
                  className={`w-12 hover:cursor-pointer aspect-square rounded-full flex items-center justify-center border-4 transition-all duration-200
        ${selected === "blue" ? "border-black p-2" : "border-transparent"}`}
                >
                  <div className="w-10 aspect-square rounded-full bg-[#2b446f]" />
                </button>

                <button
                  onClick={() => setSelected("olive")}
                  className={`hover:cursor-pointer w-12 aspect-square rounded-full flex items-center justify-center border-4 transition-all duration-200
        ${selected === "olive" ? "border-black p-2 " : "border-transparent"}`}
                >
                  <div className="w-10 aspect-square rounded-full bg-[#7C8B78]" />
                </button>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <p className="rubik text-base uppercase font-semibold">Size</p>
                <Link
                  to={"/size-chart"}
                  className="rubik text-sm uppercase border-b text-[#232321]"
                >
                  Size Chart
                </Link>
              </div>
              <div className="flex flex-wrap gap-2">
                {sizeList.map((item, idx) => {
                  const isSelected = size === item.size;

                  return (
                    <button
                      key={idx}
                      disabled={!item.available}
                      onClick={() => item.available && setSize(item.size)}
                      className={`
              w-12 aspect-square rounded-lg rubik text-sm font-medium transition-all
              ${
                isSelected
                  ? "bg-[#232321] text-white"
                  : item.available
                    ? "bg-white  text-[#232321] hover:bg-gray-700 hover:text-white hover:cursor-pointer"
                    : "bg-[#D2D1D3] text-[#8F8C91] cursor-not-allowed"
              }
            `}
                    >
                      {item.size}
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="my-8">
              <div className=" flex gap-2">
                <button
                  onClick={handleAddToCart}
                  className="hover:cursor-pointer bg-[#232321] rounded-lg uppercase rubik font-medium text-sm h-12  w-full text-white"
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => dispatch(toggleFavorite(product.id))}
                  data-tooltip-id="my-tooltip"
                  data-tooltip-place="top-end"
                  data-tooltip-content={`${isFavorite ? "Remove from Favorites" : "Add to Favorites"}`}
                  className="w-14 hover:cursor-pointer text-xl aspect-square bg-[#232321] rounded-lg flex justify-center items-center"
                >
                  {isFavorite ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-400" />
                  )}
                </button>
              </div>
              <button
                onClick={handleBuyNow}
                className="hover:cursor-pointer uppercase bg-[#4A69E2] rubik text-sm font-medium text-white px-4 py-2 rounded-lg w-full mt-2"
              >
                Buy It Now
              </button>
            </div>
            <div className="text-[#232321]">
              <h3 className="rubik text-base font-semibold uppercase mb-2">
                About the Product
              </h3>
              <div className="open-sans text-base font-normal">
                <p>{product?.description}</p>
                <p className="my-5">
                  This product is excluded from all promotional discounts and
                  offers.
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    Pay over time in interest-free installments with Affirm,
                    Klarna or Afterpay.{" "}
                  </li>
                  <li>
                    Join adiClub to get unlimited free standard shipping,
                    returns, & exchanges.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {window.innerWidth <= 640 ? (
        <RelatedProductsMobile />
      ) : (
        <RelatedProducts />
      )}
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default ViewProduct;

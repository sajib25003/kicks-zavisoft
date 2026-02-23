import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import bin_icon from "../../assets/icons/Bin.svg";
import { Link } from "react-router-dom";

const CartDetails = () => {
  const cart = useSelector((state: RootState) => state.cart);
  //   console.log(cart);
  const totalPrice = cart.items.reduce((total, item) => total + item.price, 0);
  const grandTotal = totalPrice + 6.99;

  return (
    <div className=" flex flex-col md:flex-row gap-11.75 mt-8">
      <div className="bg-[#FAFAFA] p-4 md:p-6 rounded-2xl md:w-3/5">
        <div className="text-[#232321] mb-12">
          <h3 className="rubik text-[20px] md:text-[32px] font-semibold">
            Your Bag
          </h3>
          <p className="mt-2 open-sans text-sm md:text-base font-normal opacity-80">
            Items in your bag not reserved- check out now to make them yours.
          </p>
        </div>
        {cart.items.map((item) => (
          <div
            key={item.productId}
            className="flex gap-6 mb-10 shadow-lg rounded-b-lg "
          >
            <div className="rounded-3xl overflow-hidden h-39.25 w-39.25 md:h-65 md:w-65 aspect-square shrink-0">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full aspect-square object-cover"
              />
            </div>
            <div className=" md:w-2/3 h-full">
              <div className="flex flex-col md:flex-row justify-between mb-3 md:mb-0   ">
                <div>
                  <h2 className=" text-[#232321] rubik font-semibold text-base md:text-2xl mb-2">
                    {item.title}
                  </h2>
                  <div className="open-sans font-semibold text-sm md:text-xl text-[#232321] opacity-80 mb-5">
                    {/* <p>{item.description}</p> */}
                    <p className="truncate-wrapper">
                      <span className="truncate-text w-41 md:w-70">
                        {item.description}
                      </span>
                      <span className="full-text md:hidden">
                        {item.description}
                      </span>
                    </p>
                    <p className="capitalize">{item.color}</p>
                  </div>

                  <div className="option-row mb-2 md:mb-12 flex gap-4 md:justify-between open-sans text-sm md:text-xl font-semibold text-[#232321]">
                    <div className="option-box">
                      <span className="label w-8 md:w-16">Size</span>
                      <select
                        className="select bg-gray-50 w-15 md:w-16"
                        defaultValue={item.size}
                      >
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="2XL">2XL</option>
                        <option value="3XL">3XL</option>
                      </select>
                    </div>

                    <div className="option-box">
                      <span className="label w-22 hidden md:inline-block">
                        Quantity
                      </span>
                      <span className="label w-6 md:hidden">Qty</span>
                      <select
                        className="select bg-gray-50 w-12 md:w-16"
                        defaultValue="1"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                      </select>
                    </div>
                  </div>
                </div>
                <h4 className="text-[#4A69E2] rubik font-semibold text-xl md:text-2xl mb-2 ">
                  ${item.price.toFixed(2)}
                </h4>
              </div>
              {/* buttons */}
              <div className="flex gap-6 mb-4">
                <button className=" text-white hover:cursor-pointer rounded-full rubik font-semibold text-2xl md:text-3xl">
                  {item.isFavorite ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FaRegHeart className="text-gray-400" />
                  )}
                </button>
                <button className=" text-white hover:cursor-pointer rounded-full rubik font-semibold text-base">
                  <img
                    src={bin_icon}
                    alt="Remove Item"
                    className="w-6 md:w-8 aspect-square"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="md:w-2/5 text-[#232321] bg-[#FAFAFA] md:bg-transparent p-4 md:p-0 rounded-2xl">
        <h2 className="rubik text-[20px] md:text-[32px] font-semibold">
          Order Summary
        </h2>
        <div className="open-sans font-semibold text-base md:text-[20px] my-6">
          <div className="flex justify-between">
            <div>1 ITEM</div>
            <div className="text-right">${totalPrice.toFixed(2)}</div>
          </div>
          <div className="flex justify-between">
            <div>Delivery</div>
            <div className="text-right">$6.99</div>
          </div>
          <div className="flex justify-between">
            <div>Sales Tax</div>
            <div className="text-right">-</div>
          </div>
          <div className="flex justify-between rubik text-xl md:text-[24px]">
            <div>Total</div>
            <div className="text-right">${grandTotal.toFixed(2)}</div>
          </div>
        </div>
        <Link
          to="/checkout"
          className="bg-[#232321] text-[14px] md: inline-block text-center py-4 rounded-lg w-full text-white uppercase font-medium rubik mb-6"
        >
          CHECKOUT
        </Link>
        <h4 className=" open-sans text-[#232321] text-base md:text-[20px] font-semibold hover:cursor-pointer ">
          <span className="border-b">Use a promo code</span>
        </h4>
      </div>
    </div>
  );
};

export default CartDetails;

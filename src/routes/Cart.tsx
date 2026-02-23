import { Link } from "react-router-dom";
import RelatedProducts from "../components/view_product/RelatedProducts";
import RelatedProductsMobile from "../components/view_product/RelatedProductsMobile";
import CartDetails from "../components/cart_details/CartDetails";

const Cart = () => {
  return (
    <div>
      <div className="mx-4.5 lg:mx-15 my-5 md:my-8 text-black">
        <h2 className="rubik text-[24px] text-[#232321] md:text-[32px] font-semibold">
          Saving to celebrate
        </h2>
        <p className="my-2 open-sans text-[#232321] text-xs opacity-80 md:text-sm font-semibold">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while suppiles last. No code needed.
        </p>
        <div className="open-sans text-[#232321] text-sm opacity-80 md:text-base font-semibold">
          <Link
            to={"/join_us"}
            className="border-b inline-block transform transition-transform duration-300 hover:scale-110"
          >
            Join us
          </Link>{" "}
          or{" "}
          <Link
            to={"/login"}
            className="border-b inline-block transform transition-transform duration-300 hover:scale-110"
          >
            Sign-In
          </Link>
        </div>
        {/* Cart Details */}
        <CartDetails />
      </div>
      {window.innerWidth <= 640 ? (
        <RelatedProductsMobile />
      ) : (
        <RelatedProducts />
      )}
    </div>
  );
};

export default Cart;

import { Link } from "react-router-dom";
import footer_img from "../../assets/icons/Logo.svg";
import facebook_img from "../../assets/icons/facebook.svg";
import instagram_img from "../../assets/icons/instagram.svg";
import twitter_img from "../../assets/icons/twitter.svg";
import tiktok_img from "../../assets/icons/tiktok.svg";
import footer_logo_white from "../../assets/footer_logo_white.png";
import add_circle from "../../assets/icons/Add_circle.svg";

const Footer = () => {
  const categories = [
    "Runners",
    "Sneakers",
    "Basketball",
    "Outdoor",
    "Golf",
    "Hiking",
  ];

  const pages = ["About", "Contact", "Blogs"];

  const socialLinks = [
    {
      name: "facebook",
      img: facebook_img,
      link: "https://facebook.com",
    },
    {
      name: "instagram",
      img: instagram_img,
      link: "https://instagram.com",
    },
    {
      name: "twitter",
      img: twitter_img,
      link: "https://twitter.com",
    },
    {
      name: "tiktok",
      img: tiktok_img,
      link: "https://tiktok.com",
    },
  ];

  return (
    <div className="mx-4 md:mx-15 bg-[#4A69E2] rounded-3xl md:rounded-[48px] flex flex-col">
      <div className="p-4 md:p-10 flex-1 flex flex-col md:flex-row md:justify-between items-center">
        <div className="flex-1">
          <h2 className="rubik text-[32px] md:text-5xl font-semibold md:uppercase text-white">
            Join our KicksPlus <br className="hidden" />
            Club & get 15% off
          </h2>
          <p className="open-sans text-[#E7E7E3] text-base md:text-xl font-semibold mt-2 md:mt-4">
            Sign up for free! Join the community.
          </p>
          <div className="mt-6 md:mt-8 flex mb-11.25 md:mb-0">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="placeholder:text-[#E&E&E#] text-base flex-1 md:flex-none md:w-85.5 font-normal opacity-75 border border-white rounded-lg px-4 h-10 mr-2 focus:right-0 focus:outline-none"
            />
            <button
              type="submit"
              className="uppercase bg-[#232321] h-10 w-21.5 md:w-25.5  rounded-lg hover:cursor-pointer "
            >
              Submit
            </button>
          </div>
        </div>
        <div className="relative md:flex-1 md:flex md:justify-center md:items-center w-full">
          <img
            src={footer_logo_white}
            alt="blue section logo"
            className="h-12 md:h-22"
          />
          <img
            src={add_circle}
            alt="add circle icon"
            className="absolute h-[17.5px] aspect-square md:h-8 -top-3.5 md:-top-6 left-46 md:left-117"
          />
        </div>
      </div>
      <div className="bg-[#232321] rounded-3xl md:rounded-[48px] overflow-hidden">
        <div className="p-4 md:p-10 flex flex-col md:flex-row gap-10 md:gap-30.5">
          <div>
            <h2 className="rubik text-2xl md:text-4xl font-semibold text-[#FFA52F] mb-2">
              About Us
            </h2>
            <p className="open-sans text-base md:text-xl font-semibold leading-7.75 ">
              We are the biggest hyperstore in the universe.{" "}
              <br className="hidden md:flex" />
              We got you all cover with our exclusive collections and latest
              drops.
            </p>
          </div>
          <div>
            <h2 className="rubik text-xl md:text-2xl font-semibold text-[#FFA52F] mb-4">
              Categories
            </h2>
            <div className="space-y-2 flex flex-col">
              {categories.map((item) => (
                <Link
                  key={item}
                  to={item.toLowerCase()}
                  className="open-sans text-base md:text-xl font-semibold hover:cursor-pointer hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="rubik text-xl md:text-2xl font-semibold text-[#FFA52F] mb-4">
              Company
            </h2>
            <div className="space-y-2 flex flex-col">
              {pages.map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="open-sans text-base md:text-xl font-semibold hover:cursor-pointer hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="rubik text-xl md:text-2xl font-semibold text-[#FFA52F] mb-4">
              Follow us
            </h2>
            <div className="flex gap-5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={item.img}
                    alt={`${item.name} icon`}
                    className="w-6 md:w-8 aspect-square hover:scale-120 "
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center  pt-11.25 md:pt-22.5 rounded-b-3xl md:rounded-b-[48px] overflow-hidden">
          <img src={footer_img} alt="footer image" className="block w-full" />
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import pro_pic1 from "../../assets/reviews/pro_pic1.svg";
import pro_pic2 from "../../assets/reviews/pro_pic2.svg";
import pro_pic3 from "../../assets/reviews/pro_pic3.svg";
import thumbnail1 from "../../assets/reviews/thumb1.png";
import thumbnail2 from "../../assets/reviews/thumb2.png";
import thumbnail3 from "../../assets/reviews/thumb3.png";
import type { IReview } from "../../types/types";
import star_img from "../../assets/icons/star_rating.svg";

const Reviews = () => {
  const reviews: IReview[] = [
    {
      title: "Good Quality ",
      description: "I highly recommend shopping from kicks",
      rating: 5,
      img: pro_pic1,
      thumbnail: thumbnail1,
    },
    {
      title: "Good Quality ",
      description: "I highly recommend shopping from kicks",
      rating: 5,
      img: pro_pic2,
      thumbnail: thumbnail2,
    },
    {
      title: "Good Quality ",
      description: "I highly recommend shopping from kicks",
      rating: 5,
      img: pro_pic3,
      thumbnail: thumbnail3,
    },
  ];
  return (
    <div className="mb-10.5 md:mb-0">
      <div className="flex items-center justify-between mb-5 md:mb-0 ">
        <h2 className="uppercase text-[#232321] rubik text-[24px] md:text-[74px] font-semibold">
          Reviews
        </h2>
        <Link
          to={"all-reviews"}
          className="text-center rubik py-2 uppercase px-4 md:px-8 md:w-30 text-white text-sm font-medium bg-[#4A69E2] rounded-lg "
        >
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviews.slice(0, window.innerWidth <= 640 ? 1 : 3).map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FAFAFA] rounded-2xl md:rounded-4xl transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl"
          >
            <div className="p-4 md:p-8 flex justify-between">
              <div className="text-[#232321]">
                <h3 className="rubik text-xl md:text-2xl font-semibold ">
                  {item.title}
                </h3>
                <p className="open-sans text-[14px] md:text-base opacity-80 my-2">
                  {item.description}
                </p>
                <p className="flex open-sans items-center text-[14px] md:text-base">
                  {" "}
                  {[...Array(item.rating)].map((_, idx) => (
                    <img
                      key={idx}
                      src={star_img}
                      alt="star"
                      className="w-4 h-4 md:w-5 md:h-5"
                    />
                  ))}
                  <span className="ml-1">{item.rating.toFixed(2)}</span>
                </p>
              </div>
              <div>
                <img
                  src={item.img}
                  alt="Pro Pic"
                  className="w-12 md:w-16 aspect-square rounded-full"
                />
              </div>
            </div>
            <div>
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-57.5 md:h-81.25 w-full object-cover rounded-b-2xl md:rounded-b-4xl"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;

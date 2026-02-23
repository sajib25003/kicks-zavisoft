import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type Props = {
  images: string[];
};

const ViewProductImageSliderMobile = ({ images }: Props) => {
  return (
    <div className="w-full">
      <Carousel
        showArrows={false}
        showThumbs={true}
        showStatus={false}
        infiniteLoop={true}
        swipeable={true}
        emulateTouch={true}
      >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`product-image-${index}`}
              className="rounded-xl"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ViewProductImageSliderMobile;

import { useCallback, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";
import s from "./Slider.module.css"

const data = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2017/06/20/22/14/man-2425121_960_720.jpg",
    headline: "Carousel Headline",
    body: "Put your carousel body text here! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
    cta: "CTA all products",
    category: "",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2017/09/01/21/53/sunglasses-2705642_960_720.jpg",
    headline: "Carousel Headline",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    cta: "CTA men's products",
    category: "men",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2016/11/23/17/25/woman-1853939_960_720.jpg",
    headline: "Carousel Headline",
    body: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    cta: "CTA women's products",
    category: "women",
  },
];

const Slider = () => {
  const [curSlide, setCurSlide] = useState(0);

  const goToPrev = useCallback(() => {
    setCurSlide(curSlide === 0 ? data.length - 1 : (prev) => prev - 1);
  }, [curSlide]);

  const goToNext = useCallback(() => {
    setCurSlide(curSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  }, [curSlide]);

  return (
    <div className="frame relative overflow-x-hidden">
      <div
        className={s.slider}
        style={{
          transform: `translateX(-${100 * curSlide}vw)`,
          width: `${100 * data.length}vw`,
        }}
      >
        {data.map((image, index) => (
          <Slide key={index} image={image} />
        ))}

      </div>
      <div className={s.navigators}>
        <button onClick={goToPrev} className="navigators-btn rounded-lg">
          <BsArrowLeft />
        </button>
        <button onClick={goToNext} className="navigators-btn rounded-lg">
          <BsArrowRight />
        </button>
      </div>

    </div>
  );
};

export default Slider;

import Link from "next/link";
import s from "./Slider.module.css"

const Slide = ({ image }) => {
  const {body, src, headline, category, cta} = image
  return (
    <div className={s.slide} style={{ backgroundImage: `url(${src})` }}>
      <div className={s.slide__text}>
        <h1 className="text-4xl md:text-6xl font-semibold uppercase z-10">
          {headline}
        </h1>
        <p className="w-1/2 z-20">{body}</p>
        <Link
          href={`products/${category}`}
          className="cta-btn border-2 uppercase h-12 w-72 mt-5 duration-300 font-medium rounded-lg"
        >
          <span className="absolute z-30 w-full text-center top-[25%]">
            {cta}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Slide;

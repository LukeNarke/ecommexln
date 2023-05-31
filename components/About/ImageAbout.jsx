import Image from "next/image";
import s from "./About.module.css"

export const ImageAbout = () => {
  return (
    <div className={s.image__about}>
      <div className="flex gap-5">
        <div className="relative  w-1/2 h-96">
          <Image
            className="w-96  object-cover"
            alt={"image1"}
            priority
            unoptimized
            loader={() =>
              "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_960_720.jpg"
            }
            src={
              "https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_960_720.jpg"
            }
            width={50}
            height={50}
          />

          <Image
            className="absolute top-20 left-[300px] w-2/4"
            alt={"image2"}
            priority
            unoptimized
            loader={() =>
              "https://cdn.pixabay.com/photo/2017/01/19/23/46/church-1993645_960_720.jpg"
            }
            src={
              "https://cdn.pixabay.com/photo/2017/01/19/23/46/church-1993645_960_720.jpg"
            }
            width={50}
            height={50}
          />
        </div>
        <div className="relative  w-1/2 h-96">
          <Image
            className="w-96  object-cover"
            alt={"image3"}
            priority
            unoptimized
            loader={() =>
              "https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_960_720.jpg"
            }
            src={
              "https://cdn.pixabay.com/photo/2017/02/19/15/28/sunset-2080072_960_720.jpg"
            }
            width={50}
            height={50}
          />

          <Image
            className="absolute top-20 left-[300px] w-2/4"
            alt={"image4"}
            priority
            unoptimized
            loader={() =>
              "https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg"
            }
            src={
              "https://cdn.pixabay.com/photo/2016/08/31/17/41/sunrise-1634197_960_720.jpg"
            }
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};

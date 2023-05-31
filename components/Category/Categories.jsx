import Image from "next/image";
import menImage from "@/public/man-icon.svg";
import womenImage from "@/public/woman-icon.svg";
import Link from "next/link";
import s from "./Category.module.css"

const Category = () => {
  return (
    <div className={`wrapper ${s.category}`}>
      <h2 className={s.section__title}>Categories</h2>
      <div className="flex flex-col-2 gap-5">
        <Link href={"products/men"} className={s.category__men}>
          <div className={s.overlay}></div>
          <h3 className={s.category__title__men}>
            <Image
              className="translate-x-11"
              priority
              src={menImage}
              height={78}
              width={78}
              alt="man-icon"
            />
            <p>Men</p>
          </h3>
        </Link>
        <Link href={"products/women"} className={s.category__women}>
          <div className={s.overlay}></div>
          <h3 className={s.category__title__women}>
            <Image
              className="translate-x-[6rem]"
              priority
              src={womenImage}
              height={78}
              width={78}
              alt="woman-icon"
            />
            <p>Women</p>
          </h3>
        </Link>
      </div>
    </div>
  );
};

export default Category;

import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import GridItemForGallery from "./GridItemForGallery";

const data = [
  {
    id: 1,
    src: "https://cdn.pixabay.com/photo/2016/04/17/22/00/girl-1335663_960_720.jpg",
    title: "Women tops",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2020/04/25/10/32/hijab-5090230_960_720.jpg",
    title: "Women shirts",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2016/11/29/01/34/man-1866574_960_720.jpg",
    title: "Men shirts",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2015/02/09/14/07/funny-629675_960_720.jpg",
    title: "Men pants",
  },
  {
    id: 5,
    src: "https://cdn.pixabay.com/photo/2017/06/29/07/19/model-2453246_960_720.jpg",
    title: "Women pants",
  },
  {
    id: 6,
    src: "https://cdn.pixabay.com/photo/2017/11/02/14/25/model-2911325_960_720.jpg",
    title: "Men jackets",
  },
  {
    id: 7,
    src: "https://cdn.pixabay.com/photo/2015/09/24/15/18/cute-955786_960_720.jpg",
    title: "Women skirts",
  },
  {
    id: 8,
    src: "https://cdn.pixabay.com/photo/2015/08/05/09/55/mens-shoes-875950_960_720.jpg",
    title: "Men shoes",
  },
  {
    id: 9,
    src: "https://cdn.pixabay.com/photo/2017/08/17/12/50/woman-2651180_960_720.jpg",
    title: "Women shoes",
  },
  {
    id: 10,
    src: "https://cdn.pixabay.com/photo/2015/01/12/10/45/man-597179_960_720.jpg",
    title: "Men accessories",
  },
];

const Gallery = () => {
  return (
    <div className="wrapper image-container my-20">
      <div className="text-center mb-10 flex flex-col gap-5">
        <span className="font-medium tracking-widest">{`LET'S SEE`}</span>
        <span className="section-title">GALLERY</span>
        <Link
          href="/products"
          className="self-center font-medium tracking-widest flex gap-2 items-center group"
        >
          SHOP NOW{" "}
          <span className="group-hover:translate-x-5 duration-300">
            <BsArrowRight />
          </span>
        </Link>
      </div>

      {/* <div className="grid-container w-full">
        {data.map((item) => (
          <GridItemForGallery key={item.id} item={item} />
        ))}
      </div> */}
    </div>
  );
};

export default Gallery;

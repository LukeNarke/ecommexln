import { ImageAbout } from "@/components/About/ImageAbout";
import LogoItemForAbout from "@/components/About/LogoItemForAbout";
import Image from "next/image";

const AboutPage = () => {
  const logos = [
    {
      id: 1,
      src: "https://cdn.pixabay.com/photo/2017/08/24/07/40/annotation-2675672_960_720.png",
      title: "logo1",
    },
    {
      id: 2,
      src: "https://cdn.pixabay.com/photo/2016/08/07/11/50/jaguar-1576109_960_720.jpg",
      title: "logo2",
    },
    {
      id: 3,
      src: "https://cdn.pixabay.com/photo/2014/11/17/18/10/gears-534991_960_720.jpg",
      title: "logo3",
    },
    {
      id: 4,
      src: "https://cdn.pixabay.com/photo/2015/08/14/00/57/eagle-887788_960_720.jpg",
      title: "logo4",
    },
    {
      id: 5,
      src: "https://cdn.pixabay.com/photo/2018/01/16/10/41/bitcoin-3085721_960_720.jpg",
      title: "logo5",
    },
    {
      id: 6,
      src: "https://cdn.pixabay.com/photo/2018/01/29/22/58/cube-3117511_960_720.jpg",
      title: "logo6",
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="header">
        <Image
          priority
          unoptimized
          loader={() =>
            "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_960_720.jpg"
          }
          src={
            "https://cdn.pixabay.com/photo/2016/11/22/19/08/hangers-1850082_960_720.jpg"
          }
          width={50}
          height={25}
          alt={"Man Riding on Motorcycle"}
          className="w-full h-[48rem] object-cover brightness-50"
        />

        <p className="text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] uppercase font-extralight text-white text-8xl">
          About
        </p>
      </div>

      <div className="wrapper">
        <div className="my-20 text-center">
          <p className="tracking-widest font-semibold uppercase text-xl p-5 text-black">
            the new era begins!
          </p>
          <p className="text-4xl px-[20rem] pb-5 font-extralight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo placeat
            culpa totam sit dolorem a rerum quasi nam!
          </p>
          <p className="px-[15rem] pb-5 text-xl font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
            ut est quisquam, laboriosam, temporibus sed veniam error molestias
            ducimus esse alias nisi? Corporis eligendi est amet, provident sit
            laboriosam modi? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Voluptatem ut est quisquam, laboriosam, temporibus sed veniam
            error molestias ducimus esse alias nisi? Corporis eligendi est amet,
            provident sit laboriosam modi?
          </p>
        </div>

        <div>
          <ImageAbout />
        </div>

        <div className="grid grid-cols-2 justify-center items-start p-20">
          <div className="text-4xl px-[5rem] pb-5 font-extralight">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              dicta magnam fugiat ullam saepe accusamus quasi. Rerum facere
              laborum quos nulla.
            </p>
          </div>
          <div className="px-[5rem] pb-5 text-xl font-light">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              a quidem ipsa at iure ipsam accusantium in reiciendis voluptatem
              exercitationem, dicta quae optio repellendus voluptas nesciunt sit
              maiores non molestiae id corrupti distinctio maxime natus.
            </p>
          </div>
        </div>
      </div>
      <div className="py-12">
        <Image
          priority
          unoptimized
          loader={() =>
            "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg"
          }
          src={
            "https://cdn.pixabay.com/photo/2021/01/29/14/41/wardrobe-5961193_960_720.jpg"
          }
          width={500}
          height={500}
          alt={"Happy woman jumping with shopping bags"}
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="wrapper py-10 flex flex-col gap-10">
        <p className="tracking-widest font-semibold uppercase text-xl p-5 text-black text-center">
          Partners
        </p>

        <p className="text-4xl px-[5rem] pb-5 font-extralight text-center">
          We are very grateful for the opportunity to collaborate with such
          beautiful agencies and brands
        </p>

        <div className="p-10">
          <div className="grid grid-cols-3 mx-[30rem]">
            {logos.map((logo) => (
              <LogoItemForAbout key={logo.id} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

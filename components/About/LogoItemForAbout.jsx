import Image from "next/image";

const LogoItemForAbout = ({ logo }) => {
  return (
    <div>
      <Image
        className="w-28 h-full object-cover p-5"
        alt={logo.title}
        priority
        unoptimized
        loader={() => logo.src}
        src={logo.src}
        width={50}
        height={50}
      />
    </div>
  );
};

export default LogoItemForAbout;

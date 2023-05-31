import Image from "next/image";
import Link from "next/link";

const user = {
  name: "John Doe",
  job: "Front-End-Developer",
  email: "abc@react.dev",
  phone: "1-234-567-8910",
  address: {
    city: "Omaha",
    state: "NE",
  },
  photo:
    "https://cdn.pixabay.com/photo/2015/07/09/19/32/dog-838281_960_720.jpg",
};

const ProfilePage = () => {
  return (
    <div className="min-h-screen container mx-auto flex flex-col pt-20">
      <div className="profile-top flex gap-10 justify-between items-center max-[425px]:flex-col">
        <div className="cart-left border w-[40%] h-[18rem] flex flex-col justify-start items-center gap-3 rounded-sm shadow-sm hover:shadow-lg hover:cursor-pointer duration-300 max-[425px]:w-full max-[425px]:text-sm">
          <div className="user-img w-[10rem] h-[10rem] mt-5 rounded-full">
            <Image
              priority
              unoptimized
              loader={() => user?.photo}
              src={user?.photo}
              width={120}
              height={120}
              alt={user.name}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h2 className="text-2xl md:text-base">{user?.name}</h2>
          <h2 className="text-2xl md:text-base">{user?.job}</h2>
        </div>
        <div className="cart-right w-[60%] h-[18rem] flex flex-col shadow-sm justify-between max-[425px]:w-full max-[425px]:text-sm">
          <div className="w-full flex self-center py-5 px-2 gap-5 border-b">
            <span>Full Name :</span> <span>{user?.name}</span>
          </div>

          <div className="w-full flex self-center py-5 px-2 gap-5 border-b">
            <span>Email :</span> <span>{user?.email}</span>
          </div>

          <div className="w-full flex self-center py-5 px-2 gap-5 border-b">
            <span>Phone :</span> <span>{user?.phone}</span>
          </div>

          <div className="w-full flex self-center py-5 px-2 gap-5 border-b">
            <span>Address :</span>
            <span>
              {user?.address?.village}, {user?.address?.upzila},
              {user?.address?.district}
            </span>
          </div>
        </div>
      </div>
      <div className="btns my-20 flex justify-between items-center gap-5 text-center max-[425px]:flex-col max-[425px]:w-full">
        <Link
          href="/inventory"
          className="border text-md py-3 bg-cyan-500 text-center text-white font-medium hover:bg-cyan-600 duration-300 uppercase w-2/6 tracking-widest md:text-xs lg:text-[14px] lg:py-5 max-[425px]:w-full"
        >
          Go to inventory
        </Link>
        <Link
          href="logout"
          className="border text-md py-3 bg-rose-500 text-center text-white font-medium hover:bg-rose-600 duration-300 uppercase w-2/6 tracking-widest md:text-xs lg:text-[14px] lg:py-5 max-[425px]:w-full"
        >
          Logout
        </Link>
        <Link
          href="/cart"
          className="border text-md py-3 bg-cyan-500 text-center text-white font-medium hover:bg-cyan-600 duration-300 uppercase w-2/6 tracking-widest md:text-xs lg:text-[14px] lg:py-5 max-[425px]:w-full"
        >
          View your order statistics
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;

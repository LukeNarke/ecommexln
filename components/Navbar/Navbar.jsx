import Link from "next/link";
import { useCallback, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useSelector } from "react-redux";
import s from "./Navbar.module.css"

const Navbar = () => {
  const products = useSelector((state) => state.myShop.products);
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleToggle = useCallback(() => {
    if (window.innerWidth > 1023) {
      return;
    }

    setToggleOpen(!toggleOpen);
    document.body.classList.toggle("lock-scroll");
  }, [toggleOpen]);

  return (
    <header className={`wrapper ${s.navbar__header}`}>
      <div>
        <Link href="/" className="text-2xl font-semibold">
          Ecommerce Luke Narke
        </Link>
      </div>

      <nav onClick={handleToggle} className="nav__links">
        <ul
          className={`${
            toggleOpen ? "flexColMod" : "hidden lg:flex gap-5 uppercase"
          }`}
        >
          <li>
            <Link href="/" className="linear-walkaways">
              Home
            </Link>
          </li>
          <li>
            <Link href="/products/men" className="linear-walkaways">
              Men
            </Link>
          </li>
          <li>
            <Link href="/products/women" className="linear-walkaways">
              Women
            </Link>
          </li>
          <li>
            <Link href="/products" className="linear-walkaways">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="linear-walkaways">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="linear-walkaways">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className={s.navbar__utils}>
        <Link href="/login" className="uppercase linear-walkaways">
          Sign in
        </Link>

        <Link href="/cart" className="relative">
          <span>
            <ShoppingCartIcon className="h-8 w-8 text-black-500" />
          </span>
          <span className="counting-bubble">{products.length}</span>
        </Link>

        <span className="z-[3]">
          <FiMenu
            onClick={handleToggle}
            className={`${
              !toggleOpen ? "block" : "hidden"
            } text-2xl lg:hidden cursor-pointer`}
          />
          <AiOutlineClose
            onClick={handleToggle}
            className={`${
              toggleOpen ? "block" : "hidden"
            } text-2xl lg:hidden cursor-pointer`}
          />
        </span>
      </div>
    </header>
  );
};

export default Navbar;

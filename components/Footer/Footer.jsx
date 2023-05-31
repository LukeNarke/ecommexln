import Link from "next/link";
import {
  FaLinkedinIn,
  FaGithub
} from "react-icons/fa";
import s from "./Footer.module.css"

const followMe = "Don't forget to follow me"
const info = "Need more information?"
const email = "LNarke@gmail.com"
const madeBy = "Made by Luke Narke"

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={`wrapper ${s.grid__layout}`}>
        <div className={s.footer__col__1}>
          <Link
            href="/"
            className="text-2xl font-semibold text-cyan-500 hover:text-white duration-300"
          >
            Ecommerce Showcase
          </Link>
        </div>
        <div className={s.footer__col__2}>
          <p className={s.follow}>{followMe}</p>
          <div className={s.social__icons}>
            <div className={s.icon__circle}>
              <FaGithub className="text-cyan-100 mx-auto" />
            </div>
            <div className={s.icon__circle}>
              <FaLinkedinIn className="text-cyan-100 mx-auto" />
            </div>
            
          </div>
        </div>
        <div className={s.footer__col__3}>
          <p className="uppercase font-medium text-cyan-500 tracking-wider">
            Useful Links
          </p>
          <div className={`${s.nav__link} flex__col__2`}>
            <div className={s.link__col__left}>
              <Link href="/" className={s.footer__nav__links}>
                Home
              </Link>
              <Link href="/products" className={s.footer__nav__links}>
                Shop
              </Link>
              <Link href="/products/men" className={s.footer__nav__links}>
                Men
              </Link>
              <Link href="/products/women" className={s.footer__nav__links}>
                Women
              </Link>
            </div>
            <div className={s.link__col__right}>
              <Link href="/inventory" className={s.footer__nav__links}>
                Inventory
              </Link>
              <Link href="/about" className={s.footer__nav__links}>
                About
              </Link>
              <Link href="/contact" className={s.footer__nav__links}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className={s.footer__col__4}>
          <p className="uppercase tracking-wider text-gray-400">
            {info}
          </p>
          <p className="font-medium text-lg">{email}</p>
        </div>
      </div>

      <p className={`wrapper copyright`}>
        &copy; {new Date().getFullYear()} {madeBy}
      </p>
    </footer>
  );
};

export default Footer;

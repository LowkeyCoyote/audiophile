import { Link } from 'react-router-dom';
import logoNavbar from '@assets/shared/logo/logo.svg';
import iconCart from '@assets/shared/icons/icon-cart.svg';

const Navbar = () => {
  const navLinks = [
    { path: './', text: 'Home' },
    { path: './category/headphones', text: 'headphones' },
    { path: './category/speakers', text: 'speakers' },
    { path: './category/earphones', text: 'earphones' },
  ];

  return (
    <nav className="flex items-center justify-between bg-[#191919] text-white px-40 py-9 md:px-0">
      <Link to="./">
        <img src={logoNavbar} alt="audiophile logo" />
      </Link>

      <ul className="flex gap-9 items-center mr-28">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.path}
              className="text-[13px] uppercase tracking-[2px] font-semibold md:hidden"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <img src={iconCart} alt="cart" />
    </nav>
  );
};

export default Navbar;

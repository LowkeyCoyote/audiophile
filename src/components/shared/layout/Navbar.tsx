import { Link, useNavigate } from 'react-router-dom';
import logoNavbar from '@assets/shared/logo/logo.svg';
import iconCart from '@assets/shared/icons/icon-cart.svg';
import iconHamburger from '@assets/shared/icons/icon-hamburger.svg';
import Modal from '../ui/Modal';
import Cart from '@components/shared/Cart';
import { useState } from 'react';
import useModalScrollLock from '@hooks/useModalScrollLock';

const Navbar = () => {
    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);
    useModalScrollLock(cartVisible);

    const goToCheckout = () => {
        setCartVisible(false);
        navigate('/checkout');
    };

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('block-scroll');
    };

    const navLinks = [
        { path: './', text: 'Home' },
        { path: './category/headphones', text: 'headphones' },
        { path: './category/speakers', text: 'speakers' },
        { path: './category/earphones', text: 'earphones' },
    ];

    return (
        <nav className="relative z-50 bg-[#191919]   px-40 md:px-0 sm:px-0">
            <div className="flex items-center justify-between  border-b  border-gray-border border-opacity-50 py-9 text-white md:px-10 sm:px-6">
                <div className="flex items-center">
                    <img
                        className="hidden md:mr-10 md:block md:h-min "
                        onClick={toggleNavbar}
                        src={iconHamburger}
                        alt="icon hamburger"
                    />
                    <Link to="./">
                        <img src={logoNavbar} alt="audiophile logo" />
                    </Link>
                </div>

                <ul className="mr-28 flex items-center gap-9 md:hidden">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.path}
                                className="text-[13px] font-semibold uppercase tracking-[2px] duration-75 ease-in-out hover:text-dark-peach md:hidden"
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>

                <img
                    src={iconCart}
                    alt="cart"
                    onClick={() => setCartVisible(!cartVisible)}
                />
                {cartVisible && (
                    <Modal
                        modalClose={() => setCartVisible(false)}
                        modalPosition=" translate-y-0 translate-x-0 top-28 right-40 md:right-10
                        sm:top-1/2 sm:right-1/2 sm:translate-x-1/2 sm:-translate-y-1/2
                        
                        "
                    >
                        <Cart goToCheckout={goToCheckout} />
                    </Modal>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

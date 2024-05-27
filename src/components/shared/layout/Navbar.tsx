import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/store';

import { Link, useNavigate } from 'react-router-dom';

import Modal from '@components/shared/ui/Modal';
import Cart from '@components/shared/Cart';
import CategoryLinks from '@components/shared/CategoryLinks';

import useModalScrollLock from '@hooks/useModalScrollLock';

import logoNavbar from '@assets/shared/logo/logo.svg';
import iconCart from '@assets/shared/icons/icon-cart.svg';
import iconHamburger from '@assets/shared/icons/icon-hamburger.svg';

const Navbar = () => {

    const quantityProductInCart = useSelector((state: RootState) => state.cart.items.length);
    const navigate = useNavigate();

    const [cartVisible, setCartVisible] = useState(false);
    const [navSmallDeviseVisible, setNavSmallDeviceVisible] = useState(false);

    useModalScrollLock(cartVisible);
    useModalScrollLock(navSmallDeviseVisible);

    const goToCheckout = () => {
        setCartVisible(false);
        navigate('/checkout');
    };

    const goToCategory = () => {
        setNavSmallDeviceVisible(false)
    }

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
                        onClick={() => setNavSmallDeviceVisible(!navSmallDeviseVisible)}
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
                    <div className='flex'>
                        <img
                            src={iconCart}
                            alt="cart"
                            onClick={() => setCartVisible(!cartVisible)}
                            className={`cart-img cursor-pointer ${cartVisible ? 'cart-open-img' : ''}`}
                        />
                        {quantityProductInCart > 0 && (
                            <span className='w-[17px] h-[17px] rounded-full flex font-semibold justify-center bg-dark-peach ml-1 text-[13px] self-end'>{quantityProductInCart}</span>
                        )}

                    </div>
                  
                {cartVisible && (
                    <Modal
                        modalClose={() => setCartVisible(false)}
                        modalPosition=" translate-y-0 translate-x-0 top-28 right-40 md:right-10
                        sm:top-1/2 sm:right-1/2 sm:translate-x-1/2 sm:-translate-y-1/2">
                        <Cart goToCheckout={goToCheckout} />
                    </Modal>
                )}

                {navSmallDeviseVisible && (
                    <Modal
                        modalClose={() => setNavSmallDeviceVisible(false)}
                        modalPosition="translate-y-0 translate-x-1/2 top-[97px] w-screen h-auto rounded-t-none"
                    >
                        <CategoryLinks
                            className="md:px-10 md:pb-16 md:pt-28 md:text-center md:text-black sm:px-6 sm:pb-8 sm:pt-20"
                            onClick={goToCategory}
                        />
                    </Modal>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

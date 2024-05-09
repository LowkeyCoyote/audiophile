import { Link } from 'react-router-dom';
import logoNavbar from '@assets/shared/logo/logo.svg';
import iconCart from '@assets/shared/icons/icon-cart.svg';
import iconHamburger from '@assets/shared/icons/icon-hamburger.svg'
import {useState} from 'react'
import CategoryLinks from '../CategoryLinks';
import Modal from '@components/shared/ui/Modal';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    }


    const navLinks = [
        { path: './', text: 'Home' },
        { path: './category/headphones', text: 'headphones' },
        { path: './category/speakers', text: 'speakers' },
        { path: './category/earphones', text: 'earphones' },
    ];



    return (
        <nav className="px-40 bg-[#191919] md:px-0   sm:px-0 relative z-50">
            <div className="flex items-center justify-between  text-white  py-9 border-b border-gray-border border-opacity-50 md:px-10 sm:px-6">
                <div className='flex items-center'>
                    <img className='hidden md:h-min md:block md:mr-10 ' onClick={toggleNavbar} src={iconHamburger} alt="icon hamburger" />
                    <Link to="./">
                        <img src={logoNavbar} alt="audiophile logo" />
                    </Link>
                </div>

                <ul className="flex gap-9 items-center mr-28 md:hidden">
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
            </div>
            {isOpen ?<Modal><CategoryLinks/></Modal>  : ''}
        </nav>
    );
};

export default Navbar;

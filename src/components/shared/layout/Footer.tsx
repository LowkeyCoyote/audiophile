import { Link } from 'react-router-dom';

import logoDesigno from '@assets/shared/logo/logo.svg';
import iconFacebook from '@assets/shared/icons/icon-facebook.svg';
import iconTwitter from '@assets/shared/icons/icon-twitter.svg';
import iconInstagram from '@assets/shared/icons/icon-instagram.svg';

const navLinks = [
    { path: './', text: 'Home' },
    { path: './category/headphones', text: 'headphones' },
    { path: './category/speakers', text: 'speakers' },
    { path: './category/earphones', text: 'earphones' },
];

const Footer = () => {
    return (
        <footer className="bg-[#101010] px-40 pb-12 pt-20  text-white md:mb-16 md:px-10 sm:px-6 sm:pb-10 sm:pt-14 ">
            <div className="mb-8 flex items-center justify-between md:flex-col md:items-start  sm:mb-12 sm:items-center sm:gap-12 ">
                <img
                    src={logoDesigno}
                    alt="logo designo"
                    className="md:mb-8 "
                />
                <ul className="flex items-center gap-9 sm:flex-col sm:gap-4 ">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.path}
                                className="ea text-[13px] font-semibold uppercase tracking-[2px] duration-75 hover:text-peach"
                            >
                                {link.text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-wrap justify-between sm:text-center ">
                <p className="w-[50%] md:order-1 md:w-full   ">
                    Audiophile is an all in one stop to fulfill your audio
                    needs. We're a small team of music lovers and sound
                    specialists who are devoted to helping you get the most out
                    of personal audio. Come and visit our demo facility - we’re
                    open 7 days a week.
                </p>
                <ul
                    className="linkFooter mr-0 flex w-[50%] justify-end gap-4
        self-end fill-dark-peach md:order-3 sm:w-full sm:justify-center
        sm:self-center
        "
                >
                    <li>
                        <Link to="./">
                            <img src={iconFacebook} alt="facebook" />
                        </Link>
                    </li>
                    <li>
                        <Link to="./">
                            <img src={iconTwitter} alt="twitter" />
                        </Link>
                    </li>
                    <li>
                        <Link to="./">
                            <img src={iconInstagram} alt="instagram" />
                        </Link>
                    </li>
                </ul>

                <div className="pt-14 md:order-2 md:w-[50%] sm:mb-12 sm:w-full ">
                    <p className="font-bold">
                        Copyright 2021. All Rights Reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

import { ButtonHTMLAttributes } from 'react';
import { useNavigate } from 'react-router-dom';

import { VariantProps, cva } from 'class-variance-authority';
import cn from '@utils/cn';

interface ButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    link ?: string;
    onClick?: () => void;
}

const Button = ({children, variant, link, className, onClick}: ButtonProps) => {
    const navigate = useNavigate();
    
    const actionOnButtonClick = () => {
        if (onClick) {
            onClick();
        } else if (link) {
            navigate(link);
        }
    };

    return (
        <button
            className={cn(buttonVariants({ variant, className }))}
            onClick={actionOnButtonClick}
        >
            {children}
        </button>
    );
};

const buttonVariants = cva(
    'subtitle py-4 px-8 font-medium duration-100 ease-in-out text-center uppercase',
    {
        variants: {
            variant: {
                primary: 'bg-dark-peach hover:bg-peach text-white',
                black: 'bg-black hover:bg-black-button-hover text-white',
                shop: 'bg-transparent opacity-50 flex items-center mx-auto',
                transparent:
                    'bg-transparent text-black border border-black font-semibold hover:bg-black hover:text-white',
            },
        },
        defaultVariants: {
            variant: 'primary',
        },
    },
);

export default Button;

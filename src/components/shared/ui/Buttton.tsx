import { ButtonHTMLAttributes, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import cn from '@utils/cn';
import { useNavigate } from 'react-router-dom';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  link?: string;
}

const Button = ({ children, variant, link, className }: ButtonProps) => {
  const navigate = useNavigate();
  const redirectOnButtonClick = () => {
    if(link){
        navigate(link);
    }
  };
  return (
    <button
      className={cn(buttonVariants({ variant, className }))}
      onClick={redirectOnButtonClick}
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
        transparent : 'bg-transparent text-black border border-black font-semibold hover:bg-black hover:text-white'
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export default Button;

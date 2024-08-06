import { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  onClick: () => void;
  Icon: ReactNode;
  label: string;
}

export const Button = ({ onClick, label, Icon }: ButtonProps) => {
  return (
    <button onClick={onClick} className='btn'>
      {Icon}
      {label}
    </button>
  );
};

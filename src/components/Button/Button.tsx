import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button' | undefined;
}

export default function Button({ children, onClick, type }: ButtonProps): JSX.Element {
  return (
    <button className={styles.button} onClick={onClick} type={type}>
      {children}{' '}
      <svg width='17' height='18' viewBox='0 0 17 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M8.5 16.729C12.9183 16.729 16.5 13.1473 16.5 8.729C16.5 4.31073 12.9183 0.729004 8.5 0.729004C4.08172 0.729004 0.5 4.31073 0.5 8.729C0.5 13.1473 4.08172 16.729 8.5 16.729Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path d='M8.5 11.9288L11.7 8.72881L8.5 5.52881' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
        <path d='M5.2998 8.729H11.6998' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
      </svg>
    </button>
  );
}

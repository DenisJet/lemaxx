'use client';
import Link from 'next/link';
import styles from './Header.module.css';
import { useState } from 'react';

export default function Header(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);
  const btnClass = isOpened ? 'opened' : 'closed';

  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link className={styles.logo} href='/'>
          <span>Le</span>Maxx
        </Link>
        {isOpened ? (
          <nav className={styles.nav}>
            <Link href='#price'>Цены</Link>
            <Link href='#gallery'>Галерея</Link>
            <Link href='#about'>О компании</Link>
            <Link href='#contacts'>Контакты</Link>
            <Link className={styles.tel} href='tel:+79194807070'>
              + 7 919 480 70 70
            </Link>
          </nav>
        ) : (
          ''
        )}
        {isOpened ? (
          <button className={styles.button} type='button' title='close menu' onClick={() => setIsOpened(false)}>
            <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M2.06058 0.807579C1.86532 0.612317 1.54874 0.612317 1.35348 0.807579C1.15822 1.00284 1.15822 1.31942 1.35348 1.51469L2.06058 0.807579ZM1.35348 1.51469L19.0311 19.1924L19.7383 18.4852L2.06058 0.807579L1.35348 1.51469Z'
                fill='#242C3C'
              />
              <path
                d='M1.35362 19.1924C1.15836 19.3876 0.841774 19.3876 0.646512 19.1924C0.45125 18.9971 0.45125 18.6805 0.646512 18.4852L1.35362 19.1924ZM19.0313 1.51469L1.35362 19.1924L0.646512 18.4852L18.3242 0.807579L19.0313 1.51469Z'
                fill='#242C3C'
              />
            </svg>
          </button>
        ) : (
          <button className={styles.button} type='button' title='open menu' onClick={() => setIsOpened(true)}>
            <svg width='25' height='11' viewBox='0 0 25 11' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <line y1='0.5' x2='25' y2='0.5' stroke='#242C3C' />
              <line y1='10.5' x2='25' y2='10.5' stroke='#242C3C' />
            </svg>
          </button>
        )}
      </div>
    </header>
  );
}

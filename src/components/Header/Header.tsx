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
        <nav className={styles.nav}>
          <Link className={styles.navLink} href='#price'>
            Цены
          </Link>
          <Link className={styles.navLink} href='#gallery'>
            Галерея
          </Link>
          <Link className={styles.navLink} href='#about'>
            О компании
          </Link>
          <Link className={styles.navLink} href='#contacts'>
            Контакты
          </Link>
          <Link className={styles.tel} href='tel:+79194807070'>
            + 7 919 480 70 70
          </Link>
        </nav>
        {isOpened ? (
          <nav className={styles.navMobile}>
            <Link className={styles.navMobileLink} href='#price'>
              Цены
            </Link>
            <Link className={styles.navMobileLink} href='#gallery'>
              Галерея
            </Link>
            <Link className={styles.navMobileLink} href='#about'>
              О компании
            </Link>
            <Link className={styles.navMobileLink} href='#contacts'>
              Контакты
            </Link>
            <Link className={styles.tel} href='tel:+79194807070'>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M9.66871 3.40483C10.3221 3.53231 10.9226 3.85186 11.3933 4.32259C11.8641 4.79332 12.1836 5.39381 12.3111 6.04721M9.66871 0.729004C11.0262 0.879811 12.2921 1.48772 13.2585 2.45291C14.2249 3.4181 14.8344 4.68321 14.9869 6.04052M14.318 11.3788V13.3857C14.3187 13.572 14.2805 13.7564 14.2059 13.9271C14.1313 14.0978 14.0218 14.251 13.8845 14.377C13.7472 14.5029 13.5852 14.5988 13.4087 14.6585C13.2322 14.7182 13.0452 14.7403 12.8596 14.7236C10.8011 14.4999 8.82382 13.7965 7.08654 12.6699C5.47022 11.6428 4.09987 10.2725 3.0728 8.65614C1.94225 6.91097 1.23868 4.92403 1.0191 2.85629C1.00238 2.6713 1.02437 2.48485 1.08366 2.30883C1.14294 2.1328 1.23823 1.97105 1.36346 1.83387C1.48868 1.69668 1.6411 1.58708 1.81101 1.51203C1.98091 1.43698 2.16458 1.39814 2.35033 1.39796H4.35719C4.68184 1.39477 4.99658 1.50973 5.24273 1.72142C5.48889 1.93312 5.64967 2.2271 5.69511 2.54857C5.77981 3.19081 5.9369 3.82141 6.16338 4.42833C6.25338 4.66777 6.27286 4.92799 6.21951 5.17815C6.16615 5.42832 6.0422 5.65795 5.86235 5.83983L5.01277 6.68941C5.96507 8.36417 7.35175 9.75085 9.02651 10.7031L9.87608 9.85357C10.058 9.67371 10.2876 9.54976 10.5378 9.49641C10.7879 9.44306 11.0481 9.46254 11.2876 9.55254C11.8945 9.77901 12.5251 9.9361 13.1674 10.0208C13.4923 10.0667 13.7891 10.2303 14.0012 10.4807C14.2134 10.7311 14.3261 11.0507 14.318 11.3788Z'
                  stroke='#242C3C'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              8 919 480 70 70
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

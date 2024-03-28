'use client';
import styles from './page.module.css';
import Modal from '../components/Modal/Modal';
import { useState } from 'react';
import Form from '@/components/Form/Form';
import Benefits from '@/components/Benefits/Benefits';
import Zamer from '@/components/Zamer-1/Zamer-1';
import Catalog from '@/components/Catalog/Catalog';
import Advantages from '@/components/Advantages/Advantages';
import Gallery from '@/components/Gallery/Gallery';
import About from '@/components/About/About';

export default function Home() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <main className={styles.main}>
        <section className={styles.intro}>
          <div className={styles.introContainer}>
            <h1>
              Натяжные потолки <span>в Сатке под ключ</span>
            </h1>
            <p>Натяжные потолки любых видов и сложности!</p>
            <p>Качественные материалы. Опытные мастера!</p>
            <p>Поможем с выбором идеального варианта!</p>
          </div>
        </section>
        <Benefits />
        <Zamer />
        <Catalog onClick={() => setModalActive(true)} />
        <Advantages />
        <Gallery />
        <About />
        <section>
          <h2>Остались вопросы?</h2>
          <p>Оставьте свой номер телефона и Вы получите бесплатно техническую консультацию.</p>
          <Form />
        </section>
        <footer>Footer</footer>
      </main>
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}

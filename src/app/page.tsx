'use client';
import styles from './page.module.css';
import Modal from '../components/Modal/Modal';
import { useState } from 'react';
import Benefits from '@/components/Benefits/Benefits';
import Zamer from '@/components/Zamer-1/Zamer-1';
import Catalog from '@/components/Catalog/Catalog';
import Advantages from '@/components/Advantages/Advantages';
import Gallery from '@/components/Gallery/Gallery';
import About from '@/components/About/About';
import Zamer2 from '@/components/Zamer-2/Zamer-2';
import Steps from '@/components/Steps/Steps';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Header />
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
        <Steps />
        <About />
        <Gallery />
        <Zamer2 />
      </main>
      <Footer />
      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}

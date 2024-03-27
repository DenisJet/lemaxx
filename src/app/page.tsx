'use client';
import styles from './page.module.css';
import Modal from '../components/Modal/Modal';
import { useState } from 'react';
import Form from '@/components/Form/Form';
import Benefits from '@/components/Benefits/Benefits';
import Zamer from '@/components/Zamer-1/Zamer-1';
import Catalog from '@/components/Catalog/Catalog';
import Advantages from '@/components/Advantages/Advantages';

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
        <section id='gallery'>
          <h2>Примеры работ</h2>
        </section>
        <section id='about'>
          <h2>О компании</h2>
          <p>
            Сделав заказ у нас, вы можете быть уверены в высоком качестве производимых работ, все наши материалы
            экологически чистые и безвредные. Монтаж потолка производится в согласии с техническим регламентом и в
            назначенные сроки.
          </p>
          <p>
            У нас можно купить классические полотна, либо одно-, двух- или многоуровневые конструкции с разными
            эффектами. Мы готовы разработать проект с учетом стиля интерьера помещения и запросов владельца
            недвижимости. Представляем большой выбор из популярных брендов с фактурной поверхностью любых категорий.
          </p>
          <p>
            Готовы выполнить дооснащение уже готового потолка. Например добавить точек освещения или потолочный карниз
            для штор. Можем произвести замену полотна с другим цветом или фактурой. Осуществляем удаление повреждений
            натянутого полотна, если вас затопили сверху – мастера сольют воду и просушат потолок.
          </p>
        </section>
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

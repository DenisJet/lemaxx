'use client';
import styles from './page.module.css';
import Modal from '../components/Modal/Modal';
import { useState } from 'react';
import Button from '../components/Button/Button';
import Form from '@/components/Form/Form';
import Benefits from '@/components/Benefits/Benefits';
import Zamer from '@/components/Zamer-1/Zamer-1';

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
        <section className={styles.advantages}>
          <h2>Почему LeMaxx</h2>
          <ul className={styles.advantagesList}>
            <li className={styles.advantagesItem}>
              <h3 className={styles.advantagesTitle}>Большой опыт</h3>
              <p className={styles.advantagesText}>
                Знаем как качественно установить натяжной потолок в любом помещении
              </p>
            </li>
            <li className={styles.advantagesItem}>
              <h3 className={styles.advantagesTitle}>Профессиональный подход</h3>
              <p className={styles.advantagesText}>
                Используем качественные, сертифицированные материалы и профессиональный инструмент
              </p>
            </li>
            <li className={styles.advantagesItem}>
              <h3 className={styles.advantagesTitle}>Безопасный монтаж</h3>
              <p className={styles.advantagesText}>Работаем с композитными взрывобезопасными баллонами</p>
            </li>
            <li className={styles.advantagesItem}>
              <h3 className={styles.advantagesTitle}>Большой выбор</h3>
              <p className={styles.advantagesText}>Есть варианты на любой бюджет, от эконом до премиум уровня</p>
            </li>
            <li className={styles.advantagesItem}>
              <h3 className={styles.advantagesTitle}>Надёжность</h3>
              <p className={styles.advantagesText}>Работаем по договору и фиксированному прайсу, с соблюдение сроков</p>
            </li>
            <li className={styles.advantagesItem}>
              <h3 className={styles.advantagesTitle}>Гарантия</h3>
              <p className={styles.advantagesText}>Даём гарантию на все работы и материалы до 15 лет</p>
            </li>
          </ul>
        </section>
        <section id='price' className={styles.price}>
          <h2>Каталог</h2>
          <ul>
            <li>
              <h3>Матовые</h3>
              <p>
                Матовая поверхность не обладает зеркальным эффектом. Она не «слепит» глаза и не отражает предметов,
                размещенных в помещении.
              </p>
              <p>Цена от 199 ₽/м2</p>
              <Button onClick={() => setModalActive(true)} type='button'>
                Заказать
              </Button>
            </li>
            <li>
              <h3>Глянцевые</h3>
              <p>
                Покрытие обладает светоотражающей, зеркальной поверхностью. Создается эффект расширения пространства.
                Помещение становится светлым и уютным.
              </p>
              <p>Цена от 249 ₽/м2</p>
              <button type='button'>Заказать</button>
            </li>
            <li>
              <h3>Двухуровневые</h3>
              <p>
                Эксклюзивные, двухуровневые натяжные потолки по выгодной цене с гарантией. Мы производим монтаж любой
                сложности.
              </p>
              <p>Цена от 2000 ₽/м2</p>
              <button type='button'>Заказать</button>
            </li>
            <li>
              <h3>С фотопечатью</h3>
              <p>Уникальные натяжные потолки с индивидуальным дизайном в виде узора, изображения или орнамента.</p>
              <p>Цена от 1500 ₽/м2</p>
              <button type='button'>Заказать</button>
            </li>
          </ul>
        </section>
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

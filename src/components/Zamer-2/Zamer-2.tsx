import Form from '../Form/Form';
import styles from './Zamer-2.module.css';

export default function Zamer2(): JSX.Element {
  return (
    <section className={styles.zamer}>
      <div className={styles.contentContainer}>
        <h2>Оставьте заявку на бесплатный замер</h2>
        <Form />
        <div className={styles.text}>
          <h3>Выгода бесплатного замера</h3>
          <div className={styles.divider}></div>
          <ul>
            <li>Точность замера помещения</li>
            <li>Гарантия верной цены, с применением скидок</li>
            <li>Помощь в выборе материалов и дизайна</li>
            <li>Техническая консультация специалиста</li>
            <li>В дальнейшем - безупречный монтаж</li>
          </ul>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.image} src='/image/zamer-2.png' alt='' />
      </div>
    </section>
  );
}

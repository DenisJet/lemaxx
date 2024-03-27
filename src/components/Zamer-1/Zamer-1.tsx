import Form from '../Form/Form';
import styles from './Zamer-1.module.css';

export default function Zamer(): JSX.Element {
  return (
    <section className={styles.zamer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src='/image/zamer-1.png' alt='' />
      </div>
      <div className={styles.zamerContainer}>
        <h2 className={styles.title}>Бесплатный замер</h2>
        <h3>Замер потолка специалистом</h3>
        <p>
          Вы получите бесплатно техническую консультацию, точный замер и расчет стоимости. Вам не придется тратить время
          на посещение офиса.
        </p>
        <Form />
      </div>
    </section>
  );
}

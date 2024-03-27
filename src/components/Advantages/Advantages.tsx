import styles from './Advantages.module.css';

export default function Advantages(): JSX.Element {
  return (
    <section className={styles.advantages}>
      <h2>Почему установку ваших натяжных потолков стоит доверить нам</h2>
      <ul className={styles.advantagesList}>
        <li className={styles.advantagesItem}>
          <div className={`${styles.advantagesImage} ${styles.prodImage}`}></div>
          <div className={`${styles.advantagesLabel} ${styles.prodLabel}`}></div>
          <h3 className={styles.advantagesTitle}>Оригинальная продукция</h3>
          <p className={styles.advantagesText}>
            Полотна гиппоаллергенны, проверены ФГБУЗ ГЦГЭ ФМБА России, наши потолки установлены во многих больницах и
            клиниках
          </p>
        </li>
        <li className={styles.advantagesItem}>
          <div className={`${styles.advantagesImage} ${styles.montImage}`}></div>
          <div className={`${styles.advantagesLabel} ${styles.montLabel}`}></div>
          <h3 className={styles.advantagesTitle}>Квалифицированные монтажники</h3>
          <p className={styles.advantagesText}>
            Граждане РФ, прошедшие обучение и имеющие огромный опыт по установке натяжных потолков
          </p>
        </li>
        <li className={styles.advantagesItem}>
          <div className={`${styles.advantagesImage} ${styles.cleanImage}`}></div>
          <div className={`${styles.advantagesLabel} ${styles.cleanLabel}`}></div>
          <h3 className={styles.advantagesTitle}>Чистота и порядок</h3>
          <p className={styles.advantagesText}>
            Используем перфораторы с пылесосом и безопасные (композитные) газовые баллоны, убираем за собой мусор и пыль
          </p>
        </li>
        <li className={styles.advantagesItem}>
          <div className={`${styles.advantagesImage} ${styles.bonusImage}`}></div>
          <div className={`${styles.advantagesLabel} ${styles.bonusLabel}`}></div>
          <h3 className={styles.advantagesTitle}>Бонусная программа</h3>
          <p className={styles.advantagesText}>
            В нашей компании действует программа лояльности, Вы можете получать % от сделок с приведенных клиентов
          </p>
        </li>
      </ul>
    </section>
  );
}

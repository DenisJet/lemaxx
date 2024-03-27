import styles from './Benefits.module.css';

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <h2 className='visually-hidden'>Преимущества работы с LeMaxx</h2>
      <ul className={styles.benefitsList}>
        <li className={styles.benefitsItem}>Все виды фактур и цветов</li>
        <li className={styles.benefitsItem}>Работаем с любым интерьером и бюджетом</li>
        <li className={styles.benefitsItem}>Гипоаллергенные полотна без запаха</li>
        <li className={styles.benefitsItem}>Гарантия на работы и материалы до 15 лет</li>
      </ul>
    </section>
  );
}

import styles from './page.module.css';
import Link from 'next/link';

export default function Thanks(): JSX.Element {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Наш специалист свяжется с Вами в течении 5 минут.</h1>
      <Link className={styles.link} href='/'>
        Вернуться на главную
      </Link>
    </main>
  );
}

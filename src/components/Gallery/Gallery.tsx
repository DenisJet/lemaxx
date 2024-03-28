import styles from './Gallery.module.css';

export default function Gallery(): JSX.Element {
  return (
    <section id='gallery' className={styles.gallery}>
      <h2>Примеры работ</h2>
      <p className={styles.galleryText}>
        Вы получаете идеально ровные потолки, точно соответствующие вашим требованием, чистый монтаж, гарантию на работы
        и хорошее настроение!
      </p>
    </section>
  );
}

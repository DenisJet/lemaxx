import styles from './About.module.css';

export default function About(): JSX.Element {
  return (
    <section id='about' className={styles.about}>
      <div className={styles.photoContainer}>
        <img className={styles.photo} src='/image/photo.png' alt='фото' />
      </div>
      <div className={styles.content}>
        <h2>О компании</h2>
        <p>
          Сделав заказ у нас, вы можете быть уверены в высоком качестве производимых работ, все наши материалы
          экологически чистые и безвредные. Монтаж потолка производится в согласии с техническим регламентом и в
          назначенные сроки.
        </p>
        <div className={styles.devider}></div>
        <p>
          У нас можно купить классические полотна, либо одно-, двух- или многоуровневые конструкции с разными эффектами.
          Мы готовы разработать проект с учетом стиля интерьера помещения и запросов владельца недвижимости.
          Представляем большой выбор из популярных брендов с фактурной поверхностью любых категорий.
        </p>
        <div className={styles.devider}></div>
        <p>
          Готовы выполнить дооснащение уже готового потолка. Например добавить точек освещения или потолочный карниз для
          штор. Можем произвести замену полотна с другим цветом или фактурой. Осуществляем удаление повреждений
          натянутого полотна, если вас затопили сверху – мастера сольют воду и просушат потолок.
        </p>
      </div>
    </section>
  );
}

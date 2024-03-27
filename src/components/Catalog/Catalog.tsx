import Button from '../Button/Button';
import styles from './Catalog.module.css';

interface CatalogProps {
  onClick?: () => void;
}

export default function Catalog({ onClick }: CatalogProps): JSX.Element {
  return (
    <section id='price' className={styles.catalog}>
      <h2>Каталог натяжных потолков</h2>
      <p className={styles.catalogText}>
        Предлагаем потолки, прошедшие сертификацию в Государственном Центре Гигиены и Эпидемиологии, 100% без запаха и
        вредных веществ.
      </p>
      <ul>
        <li>
          <h3>Матовые</h3>
          <p>
            Матовая поверхность не обладает зеркальным эффектом. Она не «слепит» глаза и не отражает предметов,
            размещенных в помещении.
          </p>
          <p>Цена от 199 ₽/м2</p>
          <Button onClick={onClick} type='button'>
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
  );
}

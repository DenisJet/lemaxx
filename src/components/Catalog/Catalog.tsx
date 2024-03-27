import Button from '../Button/Button';
import CatalogList from '../CatalogList/CatalogList';
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
      <CatalogList onClick={onClick} />
    </section>
  );
}

import CatalogCard from '../CatalogCard/CatalogCard';
import styles from './CatalogList.module.css';
import { products } from '@/mocks/products';
interface CatalogProps {
  onClick?: () => void;
}

export default function CatalogList({ onClick }: CatalogProps): JSX.Element {
  return (
    <ul className={styles.list}>
      {products.map((product) => (
        <li key={product.id}>
          <CatalogCard
            id={product.id}
            title={product.title}
            text={product.text}
            price={product.price}
            imageUrl={product.imageUrl}
            onClick={onClick}
          />
        </li>
      ))}
    </ul>
  );
}

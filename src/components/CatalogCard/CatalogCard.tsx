import Button from '../Button/Button';
import styles from './CatalogCard.module.css';

interface CatalogCardProps {
  onClick?: () => void;
  id: number;
  title: string;
  text: string;
  price: string;
  imageUrl: string;
}

export default function CatalogCard({ onClick, title, text, price, imageUrl }: CatalogCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt='Фото полотна' />
      <h3>{title}</h3>
      <p className={styles.text}>{text}</p>
      <p className={styles.price}>Цена от {price} ₽/м2</p>
      <Button onClick={onClick} type='button'>
        Заказать
      </Button>
    </div>
  );
}

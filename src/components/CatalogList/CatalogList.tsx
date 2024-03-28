import CatalogCard from '../CatalogCard/CatalogCard';
import styles from './CatalogList.module.css';

const products = [
  {
    id: 1,
    title: 'Матовые',
    text: 'Матовая поверхность не обладает зеркальным эффектом. Она не слепит глаза и не отражает предметов, размещенных в помещении.',
    price: '120',
    imageUrl: '/image/mat.png',
  },
  {
    id: 2,
    title: 'Глянцевые',
    text: 'Покрытие обладает светоотражающей, зеркальной поверхностью. Создается эффект расширения пространства.',
    price: '135',
    imageUrl: '/image/glanec.png',
  },
  {
    id: 3,
    title: 'Двухуровневые',
    text: 'Тут Ваша фантазия может разгуляться, ведь предложений, вариаций и комбинаций великое множество!',
    price: '1500',
    imageUrl: '/image/twour.png',
  },
  {
    id: 4,
    title: 'С фотопечатью',
    text: 'Уникальные натяжные потолки с индивидуальным дизайном в виде узора, изображения или орнамента.',
    price: '1500',
    imageUrl: '/image/pechat.png',
  },
  {
    id: 5,
    title: 'Световые линии',
    text: 'Стильная новинка для освещения интерьера! Световые линии — это оригинальная альтернатива светильникам и люстрам.',
    price: '2000',
    imageUrl: '/image/linii.png',
  },
  {
    id: 6,
    title: 'Парящий потолок',
    text: 'Это изысканный декор, при котором создается визуальное ощущение воздушности и впечатление, как будто он завис в воздухе.',
    price: '1000',
    imageUrl: '/image/par.png',
  },
];

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

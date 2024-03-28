import styles from './Gallery.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Gallery(): JSX.Element {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <section id='gallery' className={styles.gallery}>
      <h2>Примеры работ</h2>
      <p className={styles.galleryText}>
        Вы получаете идеально ровные потолки, точно соответствующие вашим требованием, чистый монтаж, гарантию на работы
        и хорошее настроение!
      </p>
      <div className='slider-container'>
        <Slider {...settings}>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/1.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/2.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/3.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/4.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/5.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/6.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/7.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/8.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/9.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/10.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/11.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/12.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/13.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/14.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/15.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/16.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/17.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/18.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/19.png' alt='Фото потолка' />
          </div>
          <div className={styles.imageContainer}>
            <img className={styles.image} src='/image/gallery/20.png' alt='Фото потолка' />
          </div>
        </Slider>
      </div>
    </section>
  );
}

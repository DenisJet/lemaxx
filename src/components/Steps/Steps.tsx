import { useState } from 'react';
import Form from '../Form/Form';
import styles from './Steps.module.css';

export default function Steps(): JSX.Element {
  const [tab, setTab] = useState(1);

  return (
    <section className={styles.steps}>
      <h2>Как происходит установка потолков</h2>
      <div className={styles.stepsContainer}>
        <div className={styles.tabs}>
          <ul className={styles.tabsList}>
            <li
              className={tab === 1 ? `${styles.tabsItem} ${styles.activeItem}` : styles.tabsItem}
              onClick={() => setTab(1)}
            >
              <p className={tab === 1 ? `${styles.tabsNumber} ${styles.activeNumber}` : styles.tabsNumber}>01</p>
              <p className={styles.tabsText}>Подготовительный этап</p>
            </li>
            <li
              className={tab === 2 ? `${styles.tabsItem} ${styles.activeItem}` : styles.tabsItem}
              onClick={() => setTab(2)}
            >
              <p className={tab === 2 ? `${styles.tabsNumber} ${styles.activeNumber}` : styles.tabsNumber}>02</p>
              <p className={styles.tabsText}>Подписание договора</p>
            </li>
            <li
              className={tab === 3 ? `${styles.tabsItem} ${styles.activeItem}` : styles.tabsItem}
              onClick={() => setTab(3)}
            >
              <p className={tab === 3 ? `${styles.tabsNumber} ${styles.activeNumber}` : styles.tabsNumber}>03</p>
              <p className={styles.tabsText}>Производство полотна</p>
            </li>
            <li
              className={tab === 4 ? `${styles.tabsItem} ${styles.activeItem}` : styles.tabsItem}
              onClick={() => setTab(4)}
            >
              <p className={tab === 4 ? `${styles.tabsNumber} ${styles.activeNumber}` : styles.tabsNumber}>04</p>
              <p className={styles.tabsText}>Монтаж потолка</p>
            </li>
          </ul>
        </div>
        <div className={styles.content}>
          {tab === 1 && (
            <div className={styles.contentCard}>
              <div className={styles.contentContainer}>
                <h3 className={styles.contentTitle}>Заявка, замер, оценка</h3>
                <p className={styles.contentText}>
                  Работа начинается с заявки по телефону или на сайте. Далее наш менеджер задаст несколько вопросов
                </p>
                <ul className={styles.contentList}>
                  <li className={styles.contentItem}>Где вы хотите установить потолки</li>
                  <li className={styles.contentItem}>
                    Примерная площадь помещения (если не знаете, всегда поможет наш замерщик)
                  </li>
                  <li className={styles.contentItem}>
                    Пожелания по дизайну, освещению (мы предложим оптимальные варианты)
                  </li>
                </ul>
                <p className={styles.contentText}>
                  Как результата - составим смету, предложим варианты исполнения, расскажем про преимуществ
                </p>
                <div className={styles.formContainer}>
                  <Form buttonColor='primary' />
                </div>
              </div>
              <div className={`${styles.imageContainer} ${styles.first}`}></div>
            </div>
          )}
          {tab === 2 && (
            <div className={styles.contentCard}>
              <div className={styles.contentContainer}>
                <h3 className={styles.contentTitle}>Договор</h3>
                <p className={styles.contentText}>
                  Если вас устроит наше предложение, подписываем официальный договор, в котором фиксируем все
                  договоренности
                </p>
                <ul className={styles.contentList}>
                  <li className={styles.contentItem}>
                    Стоимость работы (гарантия того что она не измениться в процессе)
                  </li>
                  <li className={styles.contentItem}>Сроки работы</li>
                  <li className={styles.contentItem}>Нашу ответственность</li>
                </ul>
                <p className={styles.contentText}>Как результат - официально закрепленные договоренности по работе</p>
                <div className={styles.formContainer}>
                  <Form buttonColor='primary' />
                </div>
              </div>
              <div className={`${styles.imageContainer} ${styles.second}`}></div>
            </div>
          )}
          {tab === 3 && (
            <div className={styles.contentCard}>
              <div className={styles.contentContainer}>
                <h3 className={styles.contentTitle}>Производство полотна</h3>
                <p className={styles.contentText}>
                  Наши специалисты на производстве готовят необходимое для вашего помещения полотно
                </p>
                <ul className={styles.contentList}>
                  <li className={styles.contentItem}>Точный раскрой с учетом провисаний</li>
                  <li className={styles.contentItem}>
                    Сразу подготовим необходимое освещение по вашим требованиям (если этого хочет клиент)
                  </li>
                  <li className={styles.contentItem}>
                    Руководитель производства проведет контроль качества материала упаковки
                  </li>
                </ul>
                <p className={styles.contentText}>
                  Как результата - необходимый материал будет подготовлен и отправлен монтажной бригаде
                </p>
                <div className={styles.formContainer}>
                  <Form buttonColor='primary' />
                </div>
              </div>
              <div className={`${styles.imageContainer} ${styles.thres}`}></div>
            </div>
          )}
          {tab === 4 && (
            <div className={styles.contentCard}>
              <div className={styles.contentContainer}>
                <h3 className={styles.contentTitle}>Монтаж потолка</h3>
                <p className={styles.contentText}>
                  Производится установка потолка с соблюдением всех правил и требований
                </p>
                <ul className={styles.contentList}>
                  <li className={styles.contentItem}>
                    Каждый монтажник проходит внутренне обучение и контроль качества работ
                  </li>
                  <li className={styles.contentItem}>Приедут в оговоренные сроки, заранее позвонят</li>
                  <li className={styles.contentItem}>
                    Произведут чистый, аккуратный монтаж, уберут после себя все остатки
                  </li>
                </ul>
                <p className={styles.contentText}>Как результата - потолок соответствующий вашим требования</p>
                <div className={styles.formContainer}>
                  <Form buttonColor='primary' />
                </div>
              </div>
              <div className={`${styles.imageContainer} ${styles.fours}`}></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

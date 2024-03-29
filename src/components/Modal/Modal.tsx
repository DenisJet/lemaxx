import { Dispatch, SetStateAction } from 'react';
import styles from './Modal.module.css';
import Form from '../Form/Form';

interface ModalProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function Modal({ active, setActive }: ModalProps): JSX.Element {
  return (
    <div className={active ? `${styles.modal} ${styles.active}` : styles.modal} onClick={() => setActive(false)}>
      <div
        className={active ? `${styles.modalContent} ${styles.active}` : styles.modalContent}
        onClick={(evt) => evt.stopPropagation()}
      >
        <button type='button' title='Закрыть' className={styles.button} onClick={() => setActive(false)}>
          <svg width='16' height='16' viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg'>
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z'
              fill='#FFFFFF'
            ></path>
          </svg>
        </button>
        <p>Отправьте свой номер телефона и мы перезвоним Вам в ближайшее время</p>
        <Form />
      </div>
    </div>
  );
}

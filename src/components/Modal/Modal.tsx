import { Dispatch, SetStateAction } from 'react';
import styles from './Modal.module.css';

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
      ></div>
    </div>
  );
}

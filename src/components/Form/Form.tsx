import axios from 'axios';
import styles from './Form.module.css';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import Button from '../Button/Button';

interface FormProps {
  buttonColor?: 'primary' | 'black';
}

export default function Form({ buttonColor = 'black' }: FormProps) {
  const phoneRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const TOKEN = '7131971170:AAHhIM0GnxoXfWdtM-uL8B3jqrJI8AuxyBA';
  const CHAT_ID = '-1002055524138';
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    evt.preventDefault();
    let message = `<b>Заявка с сайта LeMaxx</b>\n`;
    message += `<b>Имя: </b> ${nameRef.current?.value}\n`;
    message += `<b>Номер телефона: </b> ${phoneRef.current?.value}\n`;

    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        parse_mode: 'html',
        text: message,
      })
      .then((response) => {
        //this.number.value = '';
        router.push('/thanks');
      })
      .catch(() => {});
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input ref={nameRef} type='text' name='name' placeholder='Ваше имя' />
      <input ref={phoneRef} type='tel' name='number' placeholder='Ваш номер' pattern='[0-9]{11}' required />
      <Button type='submit' bgColor={buttonColor}>
        Отправить
      </Button>
    </form>
  );
}

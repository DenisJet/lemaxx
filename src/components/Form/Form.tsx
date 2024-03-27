import axios from 'axios';
import { useRef } from 'react';

export default function Form() {
  const phoneRef = useRef<HTMLInputElement>(null);

  const TOKEN = '7131971170:AAHhIM0GnxoXfWdtM-uL8B3jqrJI8AuxyBA';
  const CHAT_ID = '-1002055524138';
  const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const handleSubmit = (evt: { preventDefault: () => void }) => {
    let message = `<b>Заявка с сайта LeMaxx</b>\n`;
    message += `<b>Номер телефона: </b> ${phoneRef.current?.value}\n`;

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={phoneRef} type='tel' name='number' placeholder='Ваш номер телефона' pattern='[0-9]{11}' required />
      <button onSubmit={handleSubmit} type='submit'>
        Отправить
      </button>
    </form>
  );
}

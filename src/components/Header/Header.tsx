import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header>
      <Link href='/'>MainLogo</Link>
      <nav>
        <Link href='#price'>Цены</Link>
        <Link href='#gallery'>Галерея</Link>
        <Link href='#about'>О компании</Link>
        <Link href='#contacts'>Контакты</Link>
      </nav>
      <Link href='tel:+79194807070'>+ 7 919 480 70 70</Link>
    </header>
  );
}

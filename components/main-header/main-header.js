import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBg from './main-header-bg.js';
import NavLink from './nav-link.js';
import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link className={classes.logo} href='/'>
          <Image src={logoImg} alt='A plate with food on it' priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foddies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

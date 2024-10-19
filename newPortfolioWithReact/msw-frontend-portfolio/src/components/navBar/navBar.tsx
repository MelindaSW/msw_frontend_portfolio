import { useState } from 'react';
import styles from './navBar.module.scss';
import homeIcon from '../../assets/icons/home_icon.png';
import emailIcon from '../../assets/icons/email_icon.png';
import githubIcon from '../../assets/icons/github_icon.png';
import linkedinIcon from '../../assets/icons/linkedin_icon.png';
import instagramIcon from '../../assets/icons/instagram_icon.png';
import burgerMenuIcon from '../../assets/icons/burger_menu_icon.png';

const MobileNavBar = () => {
  const [showBurgerMenuLinks, setShowBurgerMenuLinks] = useState(false);
  return (
    <nav className={styles.mobileNav}>
      <img
        className={styles.burgerMenu}
        src={burgerMenuIcon}
        alt="burger menu"
      />
      {showBurgerMenuLinks && (
        <ul className={styles.burgerLinks}>
          <li>
            <a className={styles.bLink} href="#home">
              Home
            </a>
          </li>
          <li>
            <a className={styles.bLink} href="#about">
              About
            </a>
          </li>
          <li>
            <a className={styles.bLink} href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className={styles.bLink} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

const DesktopNav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navLinks}>
        <a href="#home">
          <img
            className={`${styles.linkImg} ${styles.linkImgHome}`}
            src={homeIcon}
            alt="home"
          />
        </a>
        <a href="#about">ABOUT</a>
        <a href="#projects">PROJECTS</a>
        <a href="#contact">CONTACT</a>
      </div>

      <ul className={styles.iconLinks}>
        <li>
          <a href="mailto:sandstrommelinda@gmail.com">
            <img className={styles.linkImg} src={emailIcon} alt="email" />
          </a>
        </li>
        <li>
          <a href="https://github.com/MelindaSW" target="_blank">
            <img className={styles.linkImg} src={githubIcon} alt="github" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/melinda-sandstr%C3%B6m-wagner/"
            target="_blank"
          >
            <img className={styles.linkImg} src={linkedinIcon} alt="linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/melindas_crosshatching/"
            target="_blank"
          >
            <img
              className={styles.linkImg}
              src={instagramIcon}
              alt="instagram"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
};

const Nav = () => {
  return (
    <>
      <MobileNavBar />
      <DesktopNav />
    </>
  );
};

export default Nav;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "../styles/header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <img
          src={
            isScrolled ? "./images/white_logo.png" : "./images/color_logo.png"
          }
          alt="Logo"
          className={styles.logoImage}
        />
        <span className={styles.logoText}>Berita Kini</span>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      <nav
        className={`${styles.nav} ${
          isMenuOpen ? styles.navOpen : styles.navClose
        }`}
      >
        <Link
          to="/"
          className={`${styles.navLink} ${
            location.pathname === "/" ? styles.active : ""
          }`}
        >
          Beranda
        </Link>
        <Link
          to="/terbaru"
          className={`${styles.navLink} ${
            location.pathname === "/terbaru" ? styles.active : ""
          }`}
        >
          Terbaru
        </Link>
        <Link
          to="/hiburan"
          className={`${styles.navLink} ${
            location.pathname === "/hiburan" ? styles.active : ""
          }`}
        >
          Hiburan
        </Link>
        <Link
          to="/olahraga"
          className={`${styles.navLink} ${
            location.pathname === "/olahraga" ? styles.active : ""
          }`}
        >
          Olahraga
        </Link>
        <Link
          to="/nasional"
          className={`${styles.navLink} ${
            location.pathname === "/nasional" ? styles.active : ""
          }`}
        >
          Nasional
        </Link>
        <Link
          to="/internasional"
          className={`${styles.navLink} ${
            location.pathname === "/internasional" ? styles.active : ""
          }`}
        >
          Internasional
        </Link>
      </nav>
    </header>
  );
};

export default Header;

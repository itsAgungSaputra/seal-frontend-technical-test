import React from 'react';
import { NavLink } from "react-router-dom";
import { FaYoutube, FaInstagram, FaFacebook, FaTelegramPlane } from "react-icons/fa";
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoSection}>
          <div className={styles.logoo}>
            <img
              src="/images/white_logo.png"
              alt="Logo"
              className={styles.logo}
              width={150}
              height={50}
            />
            <span className={styles.logoText}>Berita Kini</span>
          </div>
          <p className="font-extralight mb-12">
            &copy; 2023 Berita Kini. All Rights Reserved.
          </p>
          <p className="text-xl">Ikuti Kami</p>
          <div className={styles.socialIcons}>
            <NavLink to="#" aria-label="YouTube">
              <div className={styles.iconWrapper}>
                <FaYoutube className={styles.icon} />
              </div>
            </NavLink>
            <NavLink to="#" aria-label="Instagram">
              <div className={styles.iconWrapper}>
                <FaInstagram className={styles.icon} />
              </div>
            </NavLink>
            <NavLink to="#" aria-label="Facebook">
              <div className={styles.iconWrapper}>
                <FaFacebook className={styles.icon} />
              </div>
            </NavLink>
          </div>
        </div>

        <div className={styles.linksSection}>
          <div>
            <h4>Telusuri</h4>
            <ul>
              <li>
                <NavLink to="/">Beranda</NavLink>
              </li>
              <li>
                <NavLink to="/hiburan">Kesehatan</NavLink>
              </li>
              <li>
                <NavLink to="/olahraga">Olahraga</NavLink>
              </li>
              <li>
                <NavLink to="/nasional">Nasional</NavLink>
              </li>
              <li>
                <NavLink to="/internasional">Internasional</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4>Bantuan</h4>
            <ul>
              <li>
                <NavLink to="#" aria-label="Kontak Kami">Kontak Kami</NavLink>
              </li>
              <li>
                <NavLink to="#" aria-label="Laporan Pembajakan">Laporan Pembajakan</NavLink>
              </li>
              <li>
                <NavLink to="#" aria-label="Kebijakan">Kebijakan</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className={styles.redText}>Berlangganan Berita Terbaru</h4>
            <form className={styles.subscriptionForm}>
              <input
                type="email"
                placeholder="Masukkan email"
                className={styles.forminput}
              />
              <button type="submit" className={styles.submitButton}>
                <FaTelegramPlane className={styles.iconsend} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

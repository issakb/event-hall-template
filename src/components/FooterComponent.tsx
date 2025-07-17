import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import { Layout } from 'antd';  // Correct import for Footer from Ant Design
import styles from './Footer.module.css';
const {Footer} = Layout;
const FooterComponent: React.FC = () => (
  <Footer className={styles.footer}>  {/* Use the imported Footer component */}
    <div className={styles.footerContainer}>
      <p className={styles.footerText}>
        © {new Date().getFullYear()} {process.env.NEXT_PUBLIC_VENUE_NAME}. All rights reserved.
      </p>
      <div className={styles.footerIcons}>
        <motion.a
          href={process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerIcon}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href={process.env.NEXT_PUBLIC_SOCIAL_TIKTOK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.footerIcon}
        >
          <FaTiktok />
        </motion.a>
      </div>
    </div>
  </Footer>
);

export default FooterComponent;
import React from 'react';
import { FaPhone } from 'react-icons/fa6';
import { Layout, Typography } from 'antd';  // Correct import for Layout and Typography
import styles from './Header.module.css';  // Import Header-specific styles

const { Text } = Typography;
const { Header } = Layout;

const HeaderComponent: React.FC = () => (
  <Header className={styles.header}>
    <div className={styles.logoContainer}>
      <img src={process.env.NEXT_PUBLIC_LOGO_URL} alt="Logo" className={styles.logoImage} />
      <span className={styles.logoText}>{process.env.NEXT_PUBLIC_VENUE_NAME}</span>
    </div>
    <div className={styles.titlePhoneNumber}>
      <FaPhone className={styles.phoneIcon} />
      <Text className={styles.phoneText}>{process.env.NEXT_PUBLIC_PHONE_NUMBER}</Text>
    </div>
  </Header>
);

export default HeaderComponent;
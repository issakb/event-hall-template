import React from 'react';
import { Button, Typography, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';  // Import HeroSection-specific styles

const { Title, Paragraph } = Typography;

const HeroSection: React.FC = () => (
  <section className={styles.heroSection}>
    <Row justify="center" align="middle">
      <Col xs={22} md={16} className={styles.heroText}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Title level={1} className={styles.heroTitle}>
            {process.env.NEXT_PUBLIC_VENUE_NAME}
          </Title>
          <Paragraph className={styles.heroSubtitle}>
            {process.env.NEXT_PUBLIC_HERO_SUBTITLE}
          </Paragraph>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              type="primary"
              size="large"
              className={styles.ctaButton}
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {process.env.NEXT_PUBLIC_CTA_TEXT}
            </Button>
          </motion.div>
        </motion.div>
      </Col>
    </Row>
  </section>
);

export default HeroSection;
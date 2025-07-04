import { Button, Layout, Menu, Row, Col, Typography } from 'antd';
import styles from '../styles/Home.module.css';
import { Carousel } from 'antd';
import { motion } from "framer-motion";

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const galleryImages = [
  './gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.webp',
  '/gallery4.jpeg',
];
const MotionButton = motion(Button);
export default function Home() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
      <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 200 }}>
        <div className={styles.logo}>The Golden Pearl</div>
      </motion.div>

        <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          className={styles.menu}
          items={[
            { key: 'home', label: 'Home' },
            { key: 'about', label: 'About' },
            { key: 'gallery', label: 'Gallery' },
            { key: 'contact', label: 'Contact' },
          ]}
        />
      </Header>

      <Content className={styles.content}>
        <section className={styles.heroSection}>
          <Row justify="center" align="middle">
            <Col xs={22} md={16} className={styles.heroText}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Title level={1} className={styles.heroTitle}>
                Golden Pearl Banqueting Suite
              </Title>
              <Paragraph className={styles.heroSubtitle}>
                Where timeless elegance meets your special moments
              </Paragraph>
           
            <MotionButton
              type="primary"
              size="large"
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Book Your Dream Day
            </MotionButton>
            </motion.div>
            </Col>
          </Row>
        </section>


        <motion.section
          className={styles.aboutSection}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row gutter={[32, 32]} justify="center" align="middle">
            <Col xs={24} md={12}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Title level={2} className={styles.aboutTitle}>
                  Welcome to the Golden Pearl
                </Title>
                <Paragraph className={styles.aboutText}>
                  Experience an intimate, luxurious space where your dreams become reality.
                  Perfect for weddings, corporate events, and celebrations, our suite offers a warm,
                  inviting atmosphere with exceptional service.
                </Paragraph>
              </motion.div>
            </Col>
            <Col xs={24} md={12}>
              <motion.img
                src="/venue-about.webp"
                alt="About"
                className={styles.aboutImage}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </Col>
          </Row>
        </motion.section>


        <motion.section
          className={styles.gallerySection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title level={2} className={styles.galleryTitle}>
            Gallery
          </Title>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Carousel autoplay className={styles.galleryCarousel}>
              {galleryImages.map((src) => (
                <div key={src}>
                  <img
                    src={src}
                    alt="Gallery"
                    className={styles.carouselImage}
                  />
                </div>
              ))}
            </Carousel>
          </motion.div>
        </motion.section>

        <motion.section
          className={styles.ctaSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Title level={2} className={styles.ctaTitle}>
            Ready to Celebrate?
          </Title>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Button
              type="default"
              size="large"
              className={styles.ctaButtonSecondary}
            >
              Contact Us
            </Button>
          </motion.div>
        </motion.section>

      </Content>

      <Footer className={styles.footer}>
        © {new Date().getFullYear()} Golden Pearl Banqueting Suite. All rights reserved.
      </Footer>
    </Layout>
  );
}

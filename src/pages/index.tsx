import { Button, Layout, Menu, Row, Col, Typography, Card } from 'antd';
import styles from '../styles/Home.module.css';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const galleryImages = [
  './gallery1.jpg',
  '/gallery2.jpg',
  '/gallery3.webp',
  '/gallery4.jpeg',
];

export default function Home() {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.logo}>Golden Pearl</div>
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
              <Title level={1} className={styles.heroTitle}>
                Golden Pearl Banqueting Suite
              </Title>
              <Paragraph className={styles.heroSubtitle}>
                Where timeless elegance meets your special moments
              </Paragraph>
              <Button type="primary" size="large" className={styles.ctaButton}>
                Book Your Event
              </Button>
            </Col>
          </Row>
        </section>


        <section className={styles.aboutSection}>
          <Row gutter={[32, 32]} justify="center" align="middle">
            <Col xs={24} md={12}>
              <Title level={2} className={styles.aboutTitle}>
                Welcome to Golden Pearl
              </Title>
              <Paragraph className={styles.aboutText}>
                Experience an intimate, luxurious space where your dreams become reality.
                Perfect for weddings, corporate events, and celebrations, our suite offers a warm,
                inviting atmosphere with exceptional service.
              </Paragraph>
            </Col>
            <Col xs={24} md={12}>
              <img
                src="/venue-about.webp"
                alt="Golden Pearl Banqueting Suite Interior"
                className={styles.aboutImage}
                loading="lazy"
              />
            </Col>
          </Row>
        </section>

        <section className={styles.gallerySection}>
          <Title level={2} className={styles.galleryTitle}>
            Gallery
          </Title>
          <Row gutter={[24, 24]} justify="center">
            {galleryImages.map((src) => (
              <Col key={src} xs={24} sm={12} md={6}>
                <Card
                  hoverable
                  cover={<img alt="Gallery image" src={src} className={styles.galleryImage} />}
                  className={styles.galleryCard}
                />
              </Col>
            ))}
          </Row>
        </section>

        <section className={styles.ctaSection}>
          <Title level={2} className={styles.ctaTitle}>
            Ready to Celebrate?
          </Title>
          <Button type="default" size="large" className={styles.ctaButtonSecondary}>
            Contact Us
          </Button>
        </section>
      </Content>

      <Footer className={styles.footer}>
        © {new Date().getFullYear()} Golden Pearl Banqueting Suite. All rights reserved.
      </Footer>
    </Layout>
  );
}

import React, { useState } from 'react';
import { Button, Layout, Row, Col, Typography, Carousel, Collapse, Form, Input, DatePicker, Modal, FormInstance } from 'antd';
import { FaInstagram, FaFacebookF, FaXTwitter, FaPhone } from 'react-icons/fa6';
import styles from '../styles/Home.module.css';
import { motion } from "framer-motion";
import dayjs from 'dayjs';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const disablePastDates = (current: dayjs.Dayjs) => {
  return current && current < dayjs().endOf('day');
};

const handleSubmit = async (
  values: Record<string, unknown>, // Replace `any` with a more specific type
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
  form: FormInstance // Use Ant Design's FormInstance type
) => {
  const response = await fetch("https://formspree.io/f/xgvylylw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });

  if (response.ok) {
    setIsModalVisible(true);
    form.resetFields();
  } else {
    Modal.error({
      title:"Submission Failed",
      content:"An error occurred while submitting the form. Please try again later or give us a call on 07960 821365."});
  }
};


const galleryImages = [
  'venue-about.webp',
  './table_decor.webp',
  '/wall_decor.webp',
  '/table.webp',
];
//TODO: Remove bouncy title animation
const MotionButton = motion.create(Button);
export default function Home() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
      <motion.div whileHover={{ scale: 1.05, rotate: 1 }} transition={{ type: "spring", stiffness: 200 }}>
        <div className={styles.logo}>The Golden Pearl</div>
      </motion.div>
      <div className={styles.titlePhoneNumber}>
        <FaPhone className={styles.phoneIcon} />
        <Typography.Text className={styles.phoneText}>07960 821365</Typography.Text>
      </div>
        {/* <Menu
          theme="dark"
          mode="horizontal"
          selectable={false}
          className={styles.menu}
          items={[
            { key: 'number', label: '07960 821365' },
            // { key: 'about', label: 'About' },
            // { key: 'gallery', label: 'Gallery' },
            // { key: 'contact', label: 'Contact' },
          ]}
        /> */}
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
            </Col>
          </Row>
        </motion.section>

        <motion.section
          className={styles.faqContactSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Row gutter={[48, 48]} justify="center" align="top">
            <Col xs={24} md={12}>
              <div className={styles.faqSection}>
                <Title level={2} className={styles.faqTitle}>FAQs</Title>
                <Collapse accordion>
                  <Collapse.Panel header="What is the maximum number of guests?" key="1">
                    <p>We can host up to 200 guests.</p>
                  </Collapse.Panel>
                  <Collapse.Panel header="Do you offer catering?" key="2">
                    <p>Yes, we offer customizable catering options to suit all tastes.</p>
                  </Collapse.Panel>
                  <Collapse.Panel header="Is parking available?" key="3">
                    <p>Yes, we have on-site parking.</p>
                  </Collapse.Panel>
                  <Collapse.Panel header="What transport links are available to use to reach your venue?" key="4">
                    <p>Our Venue is located 2.2 miles from Grand Central Station in Birmingham, 4 miles from the M6 and 5 miles from the M5 Motorway Networks.
                      The number 66 bus stops outside the H suite and goes into Birmingham City Centre.
                        We are located outside of the Clean Air Zone so charges can be avoided depending on your entry route.</p>
                  </Collapse.Panel>
                </Collapse>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className={styles.contactSection}>
                <Title level={2} className={styles.contactTitle}>Contact Us</Title>
                <Form 
                  form={form}
                  className={styles.contactForm}
                  onFinish={(values) => handleSubmit(values, setIsModalVisible, form)} 
                  layout="vertical" 
                >
                  <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                    <Input placeholder="Your Name" />
                  </Form.Item>
                  <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
                    <Input placeholder="you@example.com" />
                  </Form.Item>
                  <Form.Item label="Phone" name="phone" rules={[{ required: false }]}>
                    <Input placeholder="07231234569" />
                  </Form.Item>
                  <Form.Item label="Number of Guests" name="guests" rules={[{ required: true, message: 'Please select a guest range' }]}>
                    <Input placeholder="e.g. 50–100 guests" />
                  </Form.Item>
                  <Form.Item label="Date of Event" name="date" rules={[{ required: true, message: 'Please select a date' }]}>
                    <DatePicker style={{ width: '100%' }} disabledDate={disablePastDates} />
                  </Form.Item>
                  <Form.Item label="Message" name="message" rules={[{ required: true }]}>
                    <Input.TextArea rows={4} placeholder="Tell us about your event..." />
                  </Form.Item>
                  <Form.Item style={{textAlign: 'center'}}>
                    <Button className= {styles.ctaButtonSecondary} type="default" htmlType="submit">Send Inquiry</Button>
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </motion.section>


        {/* <motion.section
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
        </motion.section> */}

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
            className={styles.ctaButtonWrapper}
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
        <div className={styles.footerContainer}>
          <Typography.Text className={styles.footerText}>
            © {new Date().getFullYear()} Golden Pearl Banqueting Suite. All rights reserved.
          </Typography.Text>
          <div className={styles.footerIcons}>
            {[
              { href: 'https://instagram.com', icon: <FaInstagram />, label: 'Instagram' },
              { href: 'https://facebook.com', icon: <FaFacebookF />, label: 'Facebook' },
              { href: 'https://twitter.com', icon: <FaXTwitter />, label: 'Twitter' },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={styles.footerIcon}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </Footer>
      <Modal
        title={<div className="modalTitle">Form Submitted Successfully</div>}
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
        okText="Close"
        className="modalContainer"
      >
        <div className="modalContent">
          <p>Thank you for your inquiry! We will get back to you shortly.</p>
        </div>
      </Modal>
    </Layout>
  );
}

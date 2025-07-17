import React from 'react';
import { Form, Input, DatePicker, Button, Typography, Row, Col, Modal } from 'antd';  // Correct imports for Form, Input, DatePicker, Button, Row, Col, Typography
import { motion } from 'framer-motion';
import { PhoneOutlined, MailOutlined, EnvironmentOutlined } from '@ant-design/icons';
import styles from './ContactSection.module.css';  // Import ContactSection-specific styles
import dayjs from 'dayjs';

const { Title } = Typography;

interface ContactSectionProps {
  form: any;
  handleSubmit: (values: any, setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>) => void;
  isModalVisible: boolean;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const disablePastDates = (current: dayjs.Dayjs) => {
    // Disable dates before today
    return current && current < dayjs().endOf('day');
  };
const ContactSection: React.FC<ContactSectionProps> = ({
  form,
  handleSubmit,
  isModalVisible,
  setIsModalVisible,
}) => (
  <motion.section
    className={styles.faqContactSection}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <Row gutter={[48, 48]} justify="center" align="top">
      <Col xs={24} md={12}>
        <div className={styles.contactInfoCard}>
          <Title level={3} className={styles.contactInfoTitle}>Where to Find Us?</Title>

          <p className={styles.contactInfoText}>
            <PhoneOutlined className={styles.contactIcon} />
            <a href={`tel:${process.env.NEXT_PUBLIC_CONTACT_PHONE}`} className={styles.contactLink}>
              {process.env.NEXT_PUBLIC_CONTACT_PHONE}
            </a>
          </p>

          <p className={styles.contactInfoText}>
            <MailOutlined className={styles.contactIcon} />
            <a href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL}`} className={styles.contactLink}>
              {process.env.NEXT_PUBLIC_CONTACT_EMAIL}
            </a>
          </p>

          <p className={styles.contactInfoText}>
            <EnvironmentOutlined className={styles.contactIcon} />
            {process.env.NEXT_PUBLIC_CONTACT_ADDRESS}
          </p>

          <div className={styles.mapEmbedWrapper}>
            <iframe
                title="Venue Location"
                src={process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL as string}  // Using the new variable
                loading="lazy"
                allowFullScreen
                className={styles.mapIframe}
            ></iframe>
            </div>
        </div>
      </Col>

      <Col xs={24} md={12}>
        <div className={styles.contactSection}>
          <Title id="contact" level={3} className={styles.contactTitle}>Contact Us</Title>

          <Form form={form} onFinish={(values) => handleSubmit(values, setIsModalVisible)} layout="vertical">
            <Form.Item label="Name" name="name" rules={[{ required: true }]}>
              <Input placeholder="Your Name" />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
              <Input placeholder="you@example.com" />
            </Form.Item>
            <Form.Item label="Phone" name="phone">
              <Input placeholder="Your Phone" />
            </Form.Item>
            <Form.Item label="Number of Guests" name="guests" rules={[{ required: true }]}>
              <Input placeholder="e.g. 50–100 guests" />
            </Form.Item>
            <Form.Item label="Date of Event" name="date" rules={[{ required: true }]}>
              <DatePicker disabledDate={disablePastDates} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item label="Message" name="message" rules={[{ required: true }]}>
              <Input.TextArea rows={4} placeholder="Tell us about your event..." />
            </Form.Item>
            <Form.Item style={{ textAlign: 'center' }}>
              <Button className={styles.ctaButtonSecondary} type="default" htmlType="submit">Send Inquiry</Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>

    <Modal
      title="Form Submitted Successfully"
      open={isModalVisible}
      onOk={() => setIsModalVisible(false)}
      onCancel={() => setIsModalVisible(false)}
      okText="Close"
    >
      <p>Thank you for your inquiry! We will get back to you shortly.</p>
    </Modal>
  </motion.section>
);

export default ContactSection;
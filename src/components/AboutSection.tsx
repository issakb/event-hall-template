import React from 'react';
import { Carousel } from 'antd';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  const carouselImages = process.env.NEXT_PUBLIC_IMAGE_CAROUSEL?.split(',');

  return (
    <section className={styles.aboutSection}>
      <Carousel autoplay className={styles.galleryCarousel}>
        {carouselImages?.map((src, index) => (
          <div key={index}>
            <img src={src} alt={`Gallery ${index + 1}`} className={styles.carouselImage} />
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default AboutSection;
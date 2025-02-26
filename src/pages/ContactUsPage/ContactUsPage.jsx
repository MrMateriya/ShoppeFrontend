import React from 'react';
import styles from './styles/ContactUsPage.module.css'
import {ContactUsForm} from "@/modules/ContactUsForm";
const ContactUsPage = () => {
  return (
    <main className={styles['page-container']}>
      <div className={styles['page-title-container']}>
        <h1 className={[styles['page-title'], 'dm-sans-desktop-heading-1'].join(' ')}>
          Contact Us
        </h1>
        <p className={[styles['page-description'], 'dm-sans-desktop-heading-3'].join(' ')}>
          Say Hello send us your thoughts about our products or share
          your ideas with our Team!
        </p>
      </div>
      <ContactUsForm className={styles['page-form']}/>
    </main>
  );
};

export default ContactUsPage;
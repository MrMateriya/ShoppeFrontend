import React from 'react';
import TextInput from "@/UI/TextInput/TextInput";
import styles from './styles/ContactUsForm.module.css'
import TextAreaInput from "@/UI/TextAreaInput/TextAreaInput";
const ContactUsForm = () => {
  return (
    <form className={styles['contact-us-form']}>
      <TextInput className={styles['contact-us-form__text-input']} placeholder='First name'/>
      <TextInput className={styles['contact-us-form__text-input']} placeholder='Last name'/>
      <TextInput className={styles['contact-us-form__text-input']} placeholder='Email'/>
      <TextInput className={styles['contact-us-form__text-input']} placeholder='subject'/>
      <TextAreaInput placeholder='Message' className={[styles['contact-us-form__textarea'], 'dm-sans-desktop-heading-5'].join(' ')}/>
    </form>
  );
};

export default ContactUsForm;
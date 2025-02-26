'use client'

import React, {useRef, useState} from 'react';
import TextInput from "@/UI/TextInput/TextInput";
import styles from './styles/ContactUsForm.module.css'
import TextAreaInput from "@/UI/TextAreaInput/TextAreaInput";
import Button from "@/UI/Button/Button";
import {useBackendAxios} from "@/hooks/useBackendAxios";
import {CheckResponseStatus} from "@/modules/AccountForm/utils/CheckResponseStatus";
import {BackendAxios} from "@/http/BackendAxios";
import FormErrorMessage from "@/components/formErrorMessage/formErrorMessage";
import TextSelector from "@/UI/TextSelector/TextSelector";
const ContactUsForm = ({className}) => {
  const [request, loadingRequest, requestError] = useBackendAxios(async (data) => {
    const res = await BackendAxios.post('/send-message-to-shoppe', {
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email').toLowerCase(),
      subject: data.get('subject'),
      message: data.get('message'),
    })
    CheckResponseStatus(res)

    return res
  })
  const [options, setOptions] = useState([
    {id: 1, value: 'order', text: 'Order'},
    {id: 2, value: 'delivery', text: 'Delivery'},
    {id: 3, value: 'payment', text: 'Payment'},
    {id: 4, value: 'idea', text: 'Idea'},
    {id: 5, value: 'other', text: 'Other'},
  ])
  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(formRef.current)
    const res = await request(data)
  }
  async function handleKeysForm(e) {
    if (e.code === 'Enter') {
      e.preventDefault()
    }
  }

  const formRef = useRef()

  return (
    <form onSubmit={handleSubmit} onKeyDown={handleKeysForm} ref={formRef} className={[styles['contact-us-form'], className].join(' ')}>
      <FormErrorMessage
        inCondition={requestError && !loadingRequest}
        appear={true}
        timeout={600}
        errorTitle={requestError.message}
        className={styles['page-form__request-error']}
        classNameTitle={[styles['page-form__request-error-title'], 'dm-sans-desktop-heading-3'].join(' ')}
      />
      <div className={styles['contact-us-form__input-fields']}>
        <TextInput
          className={styles['contact-us-form__text-input']}
          classNameFontInput={'dm-sans-desktop-heading-5'}
          name='firstName'
          classNameErrorMessage={'dm-sans-desktop-body-medium'}
          validationErrorMessage='FirstName is invalid'
          pattern={process.env.NEXT_PUBLIC_VALIDATION_FIRSTNAME_PATTERN}
          autoComplete='firstName'
          required
          placeholder='First name'/>
        <TextInput
          className={styles['contact-us-form__text-input']}
          classNameFontInput={'dm-sans-desktop-heading-5'}
          name='lastName'
          classNameErrorMessage={'dm-sans-desktop-body-medium'}
          validationErrorMessage='LastName is invalid'
          pattern={process.env.NEXT_PUBLIC_VALIDATION_LASTNAME_PATTERN}
          autoComplete='lastName'
          required
          placeholder='Last name'/>
        <TextInput
          classNameInput={styles['contact-us-form__text-input']}
          className={styles['contact-us-form__text-input-wrapper']}
          classNameFontInput={'dm-sans-desktop-heading-5'}
          type='email'
          classNameErrorMessage={'dm-sans-desktop-body-medium'}
          validationErrorMessage='Email is invalid'
          autoComplete='email'
          pattern={process.env.NEXT_PUBLIC_VALIDATION_EMAIL_PATTERN}
          name='email'
          required
          placeholder='Email'/>
        <TextSelector
          classNameFont={[styles['contact-us-form__selector-font'], 'dm-sans-desktop-heading-5'].join(' ')}
          classNameWrapper={[styles['contact-us-form__selector-wrapper'], 'dm-sans-desktop-heading-5'].join(' ')}
          classNameOption={styles['contact-us-form__selector-option']}
          classNameInitialOption={styles['contact-us-form__selector-initial-option']}
          classNameOptionContent={styles['contact-us-form__selector-option-content']}
          classNameOptionSelected={styles['contact-us-form__selector-option-selected']}
          options={options}
          name='subject'
        />
      </div>
      <TextAreaInput
        minLength={5}
        maxLength={2000}
        placeholder='Message'
        classNameTextArea={[styles['contact-us-form__textarea'], 'dm-sans-desktop-heading-5'].join(' ')}
        classNameErrorMessage={'dm-sans-desktop-body-medium'}
        validationErrorMessage='Message is invalid'
        name='message'
        autoComplete='message'
        pattern={process.env.NEXT_PUBLIC_VALIDATION_MESSAGE_PATTERN}
        patternFlags='s'
        required
        classNameWrapper={styles['contact-us-form__wrapper']}
      />
      <Button
        styleType='black'
        type='submit'
        disabled={loadingRequest}
        className={styles['contact-us-form__button']}
        classNameFont={[styles['contact-us-form__button-font'], 'dm-sans-desktop-body-large'].join(' ')}
      >
        Send
      </Button>
    </form>
  );
};

export default ContactUsForm;
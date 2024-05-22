'use client'

import React, {useRef, useState} from 'react';
import TextInput from "@/UI/TextInput/TextInput";
import Button from "@/UI/Button/Button";
import styles from './styles/ForgottenPasswordPage.module.css'
import {BackendAxios} from "@/http/BackendAxios";
import {useBackendAxios} from "@/hooks/useBackendAxios";
import FormErrorMessage from "@/components/formErrorMessage/formErrorMessage";
import {CheckResponseStatus} from "@/modules/AccountForm/utils/CheckResponseStatus";

const ForgottenPasswordPage = () => {
  const [request, loadingRequest, errorRequest] = useBackendAxios(async (data) => {
    const res = await BackendAxios.post('/ask-reset-password', {
      email: data.get('email').toLowerCase()
    })
    CheckResponseStatus(res)

    return res
  })
  const [userEmail, setUserEmail] = useState('')

  async function handleKeysForm(e) {
    if (e.code === 'Enter') {
      e.preventDefault()
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(formRef.current)
    const res = await request(data)

    if (res?.data?.resetPasswordToken) {
      setUserEmail(data.get('email').toLowerCase())
    }
  }

  const formRef = useRef()

  return (
    <main className={styles['page-container']}>
      {userEmail && !loadingRequest
        ? <>
            <h1 className={[styles['page-title'], 'dm-sans-desktop-heading-1'].join(' ')}>
              Check your email
            </h1>
            <section className={styles['page-section']}>
              <p
                className={[styles['page-description'], styles['page-description_success'], 'dm-sans-desktop-heading-3'].join(' ')}>
                We sent a reset link to {userEmail}
              </p>
              <form className={styles['page-form']}>
                <TextInput classNameFontInput={'dm-sans-desktop-heading-5'}
                           classNameInput={styles['form__text-input-font']}
                           className={styles['form__text-input']}
                           classNameErrorMessage={'dm-sans-desktop-body-medium'}
                           validationErrorMessage='Email is invalid'
                           autoComplete='email'
                           name='email'
                           type='email'
                           disabled={true}
                           value={userEmail}
                           pattern={process.env.NEXT_PUBLIC_VALIDATION_EMAIL_PATTERN}
                           required
                           placeholder='Email'/>
                <Button styleType='black'
                        type='submit'
                        disabled={true}
                        className={styles['form__submit-button']}
                        classNameFont='dm-sans-desktop-body-large'>
                  SEND EMAIL
                </Button>
              </form>
            </section>
          </>
        : <>
            <h1 className={[styles['page-title'], 'dm-sans-desktop-heading-1'].join(' ')}>
              Have you Forgotten Your Password ?
            </h1>
            <section className={styles['page-section']}>
              <p className={[styles['page-description'], 'dm-sans-desktop-heading-3'].join(' ')}>
                If you've forgotten your password, enter your e-mail address and we'll send you an e-mail
              </p>
              <form ref={formRef} className={styles['page-form']} onSubmit={handleSubmit} onKeyDown={handleKeysForm}>
                <FormErrorMessage
                  inCondition={errorRequest && !loadingRequest}
                  appear={true}
                  timeout={600}
                  errorTitle={errorRequest.message}
                  className={styles['page-form__request-error']}
                  classNameTitle={[styles['page-form__request-error-title'], 'dm-sans-desktop-heading-3'].join(' ')}
                />
                <TextInput classNameFontInput={'dm-sans-desktop-heading-5'}
                           classNameInput={styles['form__text-input-font']}
                           className={styles['form__text-input']}
                           classNameErrorMessage={'dm-sans-desktop-body-medium'}
                           validationErrorMessage='Email is invalid'
                           autoComplete='email'
                           name='email'
                           type='email'
                           pattern={process.env.NEXT_PUBLIC_VALIDATION_EMAIL_PATTERN}
                           required
                           placeholder='Email'/>
                <Button styleType='black'
                        type='submit'
                        disabled={loadingRequest ? true : false}
                        className={styles['form__submit-button']}
                        classNameFont='dm-sans-desktop-body-large'>
                  SEND EMAIL
                </Button>
              </form>
            </section>
          </>
      }
    </main>
  );
};

export default ForgottenPasswordPage;
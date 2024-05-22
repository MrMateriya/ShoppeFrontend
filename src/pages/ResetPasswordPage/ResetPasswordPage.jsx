'use client'

import React, {useRef, useState} from 'react';
import styles from "./styles/ResetPasswordPage.module.css";
import TextInput from "@/UI/TextInput/TextInput";
import Button from "@/UI/Button/Button";
import {useBackendAxios} from "@/hooks/useBackendAxios";
import {BackendAxios} from "@/http/BackendAxios";
import escapeStringRegexp from "escape-string-regexp";
import {CheckResponseStatus} from "@/modules/AccountForm/utils/CheckResponseStatus";
import FormErrorMessage from "@/components/formErrorMessage/formErrorMessage";
import {useRouter} from "next/navigation";

const ResetPasswordPage = () => {
  const [request, loadingRequest, errorRequest] = useBackendAxios(async (data) => {
    const res = await BackendAxios.post('/reset-password', {
      password: data.get('password')
    })
    CheckResponseStatus(res)

    return res
  })
  const [registerPassword, setRegisterPassword] = useState(null)
  const router = useRouter()

  async function handleKeysForm(e) {
    if (e.code === 'Enter') {
      e.preventDefault()
    }
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(formRef.current)
    const res = await request(data)
    if (res && !loadingRequest) {
      router.replace(`${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/my-account`)
    }
  }
  function handleRegisterPasswordInput(e) {
    const escapedString = escapeStringRegexp(`${e.target.value}`);
    setRegisterPassword(escapedString)
  }

  const formRef = useRef()

  return (
    <main className={styles['page-container']}>
      <h1 className={[styles['page-title'], 'dm-sans-desktop-heading-1'].join(' ')}>
        Set a new password
      </h1>
      <section className={styles['page-section']}>
        <p className={[styles['page-description'], 'dm-sans-desktop-heading-3'].join(' ')}>
          Create a new password. Ensure it differs from previous ones for security
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
                     pattern={process.env.NEXT_PUBLIC_VALIDATION_PASSWORD_PATTERN}
                     validationErrorMessage='Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
                     autoComplete='current-password'
                     name='password'
                     type='password'
                     required
                     onChange={handleRegisterPasswordInput}
                     placeholder='Password'/>
          <TextInput classNameFontInput={'dm-sans-desktop-heading-5'}
                     classNameInput={styles['form__text-input-font']}
                     className={[styles['form__text-input'], styles['form__text-input_last']].join(' ')}
                     classNameErrorMessage={'dm-sans-desktop-body-medium'}
                     pattern={`^${registerPassword}$`}
                     validationErrorMessage={`Password don't match.`}
                     autoComplete='current-password'
                     type='password'
                     required
                     placeholder='Confirm password'/>
          <Button styleType='black'
                  type='submit'
                  disabled={loadingRequest ? true : false}
                  className={styles['form__submit-button']}
                  classNameFont='dm-sans-desktop-body-large'>
            Update Password
          </Button>
        </form>
      </section>
    </main>
  );
};

export default ResetPasswordPage;
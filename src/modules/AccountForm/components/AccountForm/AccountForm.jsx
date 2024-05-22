'use client'

import React, {useCallback, useRef, useState} from 'react';
import TextInput from "@/UI/TextInput/TextInput";
import styles from "./styles/AccountForm.module.css";
import Switcher from "@/components/Switcher/Switcher";
import TextCheckbox from "@/UI/TextCheckbox/TextCheckbox";
import Button from "@/UI/Button/Button";
import TextLink from "@/UI/TextLink/TextLink";
import {CSSTransition} from "react-transition-group";
import {login} from "@/modules/AccountForm/api/login";
import {registration} from "@/modules/AccountForm/api/registration";
import {useBackendAxios} from "@/hooks/useBackendAxios";
import {useRouter} from "next/navigation";
import escapeStringRegexp from 'escape-string-regexp';
import FormErrorMessage from "@/components/formErrorMessage/formErrorMessage";
const AccountForm = ({className, title, ...props}) => {
  const [switcherOptions, setSwitcherOptions] = useState([
    {id: 0, title: 'Sign in'},
    {id: 1, title: 'Register'}
  ])

  const [currentOption, setCurrentOption] = useState(switcherOptions[0])
  const [registerPassword, setRegisterPassword] = useState(null)
  const router = useRouter()

  const handleChangeSwitcher = useCallback(function handleChangeSwitcher (option) {
    setCurrentOption(option)
    setLoginRequestError('')
    setRegistrationRequestError('')
  }, [])

  const [loginRequest, loginRequestLoading, loginRequestError, setLoginRequestError] = useBackendAxios(async (data) => {
    return await login({
      email: data.get('email').toLowerCase(),
      password: data.get('password'),
      isRemember: data.get('isRemember'),
    })
  })
  const [registrationRequest, registrationRequestLoading, registrationRequestError, setRegistrationRequestError] = useBackendAxios(async (data) => {
    return await registration({
      login: data.get('login'),
      email: data.get('email').toLowerCase(),
      password: data.get('password'),
      isRemember: data.get('isRemember'),
    })
  })

  async function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(formRef.current)
    switch (currentOption.title) {
      case switcherOptions[0].title:
        const loginRes = await loginRequest(data)
        if (loginRes) {
          router.push(`${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/account/dashboard`)
        }
        break;
      case switcherOptions[1].title:
        const registrationRes = await registrationRequest(data)
        if (registrationRes) {
          router.push(`${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/account/dashboard`)
        }
        break;
    }
  }
  async function handleKeysForm(e) {
    if (e.code === 'Enter') {
      e.preventDefault()
    }
  }
  function handleRegisterPasswordInput(e) {
    const escapedString = escapeStringRegexp(`${e.target.value}`);
    setRegisterPassword(escapedString)
  }

  const signInRef = useRef(null)
  const registerRef = useRef(null)
  const formRef = useRef(null)

  return (
    <form className={[styles['form'], className].join(' ')} onSubmit={handleSubmit} ref={formRef} onKeyDown={handleKeysForm} {...props}>
      <h1 className={[styles['form__title'], 'dm-sans-desktop-heading-1'].join(' ')}>My account</h1>
      <Switcher options={switcherOptions}
                initialOption={currentOption}
                className={styles['form__switcher']}
                classNameButtons={[styles['form__switcher-button'], 'dm-sans-desktop-heading-3'].join(' ')}
                onChange={handleChangeSwitcher}/>
      {
        currentOption.title === 'Sign in'
          ? <CSSTransition
            classNames={{
              appear: styles['option-page-left-appear'],
              appearActive: styles['option-page-left-active-appear'],
              appearDone: styles['option-page-left-done-appear'],
            }}
            appear={true}
            timeout={2000}
            in={currentOption.title === 'Sign in'}
            nodeRef={signInRef}
            >
              <div className={styles['form__fields']} ref={signInRef}>
                <FormErrorMessage
                  inCondition={loginRequestError && !loginRequestLoading}
                  appear={true}
                  timeout={600}
                  errorTitle={loginRequestError.message}
                  className={styles['form__request-error']}
                  classNameTitle={[styles['form__request-error-title'], 'dm-sans-desktop-heading-3'].join(' ')}
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
                <TextInput classNameFontInput={'dm-sans-desktop-heading-5'}
                           classNameInput={styles['form__text-input-font']}
                           className={[styles['form__text-input'], styles['form__text-input_last']].join(' ')}
                           classNameErrorMessage={'dm-sans-desktop-body-medium'}
                           pattern={process.env.NEXT_PUBLIC_VALIDATION_PASSWORD_PATTERN}
                           validationErrorMessage='Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
                           autoComplete='current-password'
                           name='password'
                           type='password'
                           required
                           placeholder='Password'/>
                <TextCheckbox className={[styles['form__checkbox-input'], 'dm-sans-desktop-heading-5'].join(' ')}
                              title='Remember me'
                              name='isRemember'
                              htmlFor='#account-form-text-checkbox-login'
                              id='#account-form-text-checkbox-login'/>
                <Button styleType='black'
                        type='submit'
                        disabled={loginRequestLoading}
                        className={styles['form__submit-button']}
                        classNameFont='dm-sans-desktop-body-large'>
                  SIGN IN
                </Button>
                <TextLink href='/forgotten-password'
                          styleType='black'
                          className={[styles['form__recover-password'], 'black-link', 'dm-sans-desktop-heading-5'].join(' ')}>
                  Have you forgotten your password?
                </TextLink>
              </div>
            </CSSTransition>
          : false
      }
      {
        currentOption.title === 'Register'
          ? <CSSTransition
              classNames={{
                appear: styles['option-page-right-appear'],
                appearActive: styles['option-page-right-active-appear'],
                appearDone: styles['option-page-right-done-appear'],
              }}
              appear={true}
              timeout={2000}
              in={currentOption.title === 'Register'}
              nodeRef={registerRef}
            >
              <div className={styles['form__fields']} ref={registerRef}>
                <FormErrorMessage
                  appear={true}
                  timeout={600}
                  errorTitle={registrationRequestError.message}
                  inCondition={registrationRequestError && !registrationRequestLoading}
                  className={styles['form__request-error']}
                  classNameTitle={[styles['form__request-error-title'], 'dm-sans-desktop-heading-3'].join(' ')}
                />
                <TextInput classNameFontInput={'dm-sans-desktop-heading-5'}
                           classNameInput={styles['form__text-input-font']}
                           className={styles['form__text-input']}
                           classNameErrorMessage={'dm-sans-desktop-body-medium'}
                           validationErrorMessage='Login must contain 3-20 characters, the first character must be a letter or _, allowed: latin characters, cyrillic characters, _, -.'
                           autoComplete='username'
                           name='login'
                           type='text'
                           pattern={process.env.NEXT_PUBLIC_VALIDATION_LOGIN_PATTERN}
                           required
                           placeholder='Login'/>
                <TextInput classNameFontInput={'dm-sans-desktop-heading-5'}
                           classNameInput={styles['form__text-input-font']}
                           className={styles['form__text-input']}
                           classNameErrorMessage={'dm-sans-desktop-body-medium'}
                           validationErrorMessage='Email is invalid'
                           pattern={process.env.NEXT_PUBLIC_VALIDATION_EMAIL_PATTERN}
                           autoComplete='email'
                           name='email'
                           type='email'
                           required
                           placeholder='Email'/>
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
                <TextCheckbox className={[styles['form__checkbox-input'], 'dm-sans-desktop-heading-5'].join(' ')}
                              title='Remember me'
                              name='isRemember'
                              htmlFor='#account-form-text-checkbox-registration'
                              id='#account-form-text-checkbox-registration'/>
                <Button styleType='black'
                        type='submit'
                        disabled={registrationRequestLoading}
                        className={styles['form__submit-button']}
                        classNameFont='dm-sans-desktop-body-large'>
                  REGISTER
                </Button>
              </div>
            </CSSTransition>
          : false
      }
    </form>
  );
};

export default AccountForm;
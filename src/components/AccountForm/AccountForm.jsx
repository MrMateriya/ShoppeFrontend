'use client'

import React, { useCallback, useState} from 'react';
import TextInput from "@/UI/TextInput/TextInput";
import styles from "./styles/AccountForm.module.css";
import Switcher from "@/components/Switcher/Switcher";
import TextCheckbox from "@/UI/TextCheckbox/TextCheckbox";
import Button from "@/UI/Button/Button";
import TextLink from "@/UI/TextLink/TextLink";
const AccountForm = ({className, title, ...props}) => {
  const [switcherOptions, setSwitcherOptions] = useState([
    {id: 0, title: 'Sign in'},
    {id: 1, title: 'Register'}
  ])
  const [currentOption, setCurrentOption] = useState(switcherOptions[0])

  const handleChangeSwitcher = useCallback(function handleChangeSwitcher (option) {
    console.log(option)
    setCurrentOption(option)
  }, [])

  return (
    <form className={[styles['form'], className].join(' ')} {...props}>
      <h1 className={[styles['form__title'], 'dm-sans-desktop-heading-1'].join(' ')}>My account</h1>
      <Switcher options={switcherOptions}
                initialOption={currentOption}
                className={styles['form__switcher']}
                classNameButtons={[styles['form__switcher-button'], 'dm-sans-desktop-heading-3'].join(' ')}
                onChange={handleChangeSwitcher}/>
      {
        currentOption.title === 'Sign in'
          ? <>
              <TextInput classNameFontInput={'dm-sans-desktop-heading-5'}
                         classNameInput={styles['form__text-input-font']}
                         className={styles['form__text-input']}
                         classNameErrorMessage={'dm-sans-desktop-body-medium'}
                         validationErrorMessage='Email is invalid'
                         autoComplete='email'
                         name='email'
                         type='email'
                         required
                         placeholder='Email'/>
              <TextInput classNameFontInput={'dm-sans-desktop-heading-5'}
                         classNameInput={styles['form__text-input-font']}
                         className={[styles['form__text-input'], styles['form__text-input_last']].join(' ')}
                         classNameErrorMessage={'dm-sans-desktop-body-medium'}
                         pattern="^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[@$!%*?&])[A-Za-zа-яА-Я\d@$!%*?&]{8,}$"
                         validationErrorMessage='Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
                         autoComplete='current-password'
                         name='password'
                         type='password'
                         required
                         placeholder='Password'/>
              <TextCheckbox className={[styles['form__checkbox-input'], 'dm-sans-desktop-heading-5'].join(' ')}
                            title='Remember me'
                            htmlFor='#account-form-text-checkbox'
                            id='#account-form-text-checkbox'/>
              <Button styleType='black'
                      type='submit'
                      className={styles['form__submit-button']}
                      classNameFont='dm-sans-desktop-body-large'>
                SIGN IN
              </Button>
              <TextLink href='/reset-password'
                        styleType='black'
                        className={[styles['form__recover-password'], 'black-link', 'dm-sans-desktop-heading-5'].join(' ')}>
                Have you forgotten your password?
              </TextLink>
            </>
          : false
      }
      {
        currentOption.title === 'Register'
        ? <>
            <TextInput classNameFontInput={'dm-sans-desktop-heading-5'}
                       classNameInput={styles['form__text-input-font']}
                       className={styles['form__text-input']}
                       classNameErrorMessage={'dm-sans-desktop-body-medium'}
                       validationErrorMessage='Login is invalid'
                       autoComplete='username'
                       name='login'
                       type='text'
                       required
                       placeholder='Login'/>
            <TextInput classNameFontInput={'dm-sans-desktop-heading-5'}
                       classNameInput={styles['form__text-input-font']}
                       className={styles['form__text-input']}
                       classNameErrorMessage={'dm-sans-desktop-body-medium'}
                       validationErrorMessage='Email is invalid'
                       autoComplete='email'
                       name='email'
                       type='email'
                       required
                       placeholder='Email'/>
            <TextInput classNameFontInput={'dm-sans-desktop-heading-5'}
                       classNameInput={styles['form__text-input-font']}
                       className={styles['form__text-input']}
                       classNameErrorMessage={'dm-sans-desktop-body-medium'}
                       pattern="^(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*\d)(?=.*[@$!%*?&])[A-Za-zа-яА-Я\d@$!%*?&]{8,}$"
                       validationErrorMessage='Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character.'
                       autoComplete='current-password'
                       name='password'
                       type='password'
                       required
                       placeholder='Password'/>
            <Button styleType='black'
                    type='submit'
                    className={styles['form__submit-button']}
                    classNameFont='dm-sans-desktop-body-large'>
              REGISTER
            </Button>
          </>
        : false
      }
    </form>
  );
};

export default AccountForm;
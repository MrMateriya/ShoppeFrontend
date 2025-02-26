'use client'

import React, {useRef, useState} from 'react';
import styles from './styles/TextAreaInput.module.css'
import {Transition} from "react-transition-group";
import TextareaAutosize from 'react-textarea-autosize';
const TextAreaInput = ({classNameTextArea, classNameWrapper, classNameErrorMessage, pattern, patternFlags, onChange, validationErrorMessage, ...props}) => {
  const [value, setValue] = useState('')
  const [isShowError, setIsShowError] = useState(false)

  const errorRef = useRef()
  const textarea = useRef()

  function checkValidation() {
    if (!pattern) return;

    const inputPattern = new RegExp(pattern, patternFlags)

    if (!inputPattern.test(value)) {
      setIsShowError(true)
    }
    else {
      setIsShowError(false)
    }
  }
  function handleChange(e) {
    setValue(e.target.value)
    if (onChange) {
      onChange(e)
    }
  }
  function handleBlur() {
    checkValidation()
  }
  function handleFocusTextareaInputChecker() {
    textarea.current.focus()
  }

  return (
    <div className={[styles['textarea-wrapper'], classNameWrapper].join(' ')}>
      <input tabIndex='-1' pattern={pattern} className={styles['textarea-input-checker']} name='textarea-input-checker' required defaultValue={value} onFocus={handleFocusTextareaInputChecker}/>
      <TextareaAutosize
        ref={textarea}
        value={value}
        onBlur={handleBlur}
        onChange={handleChange}
        className={[styles['textarea'], classNameTextArea].join(' ')}
        {...props}
      />
      <div className={styles['textarea-line']}></div>
      <Transition mountOnEnter
                  unmountOnExit
                  in={isShowError}
                  timeout={600}
                  nodeRef={errorRef}
                  appear={true}>
        {
          state => (
            <p ref={errorRef}
               className={[styles['input-wrapper__error-message'], classNameErrorMessage || styles['input-wrapper__error-message-font'], styles[`error-message-${state}`]].join(' ')}>
              {validationErrorMessage || 'Invalid input'}
            </p>)
        }
      </Transition>
    </div>
  );
};

export default TextAreaInput;
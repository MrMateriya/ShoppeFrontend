'use client'

import React, {useState, memo, useRef} from 'react';
import styles from './styles/TextInput.module.css'
import { Transition} from "react-transition-group";

const TextInput = memo(function Input({className, classNameInput, classNameErrorMessage, classNameFontInput, validationErrorMessage, onChange, pattern, patternFlags, ...props}) {
  const [value, setValue] = useState('')
  const [isShowError, setIsShowError] = useState(false)

  const errorRef = useRef()

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
  function handleCrossClick (e) {
    setValue('')
  }
  function handleBlur () {
    checkValidation()
  }

  return (
    <div className={[styles['input-wrapper'], className].join(' ')}>
      <input type='text'
             onBlur={handleBlur}
             value={value}
             onChange={handleChange}
             className={[styles['input-wrapper__input'], classNameFontInput || styles['input-wrapper__input-font'], classNameInput].join(' ')}
             pattern={pattern}
             {...props}/>
      {value
        ? <button onClick={handleCrossClick} className={styles['input-wrapper__cross-button']}>
            <svg className={styles['input-wrapper__cross-svg']} width="12" height="12" viewBox="0 0 12 12" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path className={styles['input-wrapper__cross-path']} fillRule="evenodd" clipRule="evenodd"
                    d="M0 6C0 2.68629 2.68629 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM7.94494 7.32601C7.94494 7.24646 7.91203 7.17045 7.85403 7.11601L6.74403 6.00001L7.85403 4.88401C7.91203 4.82957 7.94494 4.75356 7.94494 4.67401C7.94494 4.59446 7.91203 4.51845 7.85403 4.46401L7.53603 4.14601C7.48159 4.08801 7.40558 4.0551 7.32603 4.0551C7.24647 4.0551 7.17047 4.08801 7.11603 4.14601L6.00003 5.25601L4.88403 4.14601C4.82959 4.08801 4.75358 4.0551 4.67403 4.0551C4.59447 4.0551 4.51847 4.08801 4.46403 4.14601L4.14603 4.46401C4.08802 4.51845 4.05511 4.59446 4.05511 4.67401C4.05511 4.75356 4.08802 4.82957 4.14603 4.88401L5.25603 6.00001L4.14603 7.11601C4.08802 7.17045 4.05511 7.24646 4.05511 7.32601C4.05511 7.40556 4.08802 7.48157 4.14603 7.53601L4.46403 7.85401C4.51847 7.91202 4.59447 7.94492 4.67403 7.94492C4.75358 7.94492 4.82959 7.91202 4.88403 7.85401L6.00003 6.74401L7.11603 7.85401C7.17047 7.91202 7.24647 7.94492 7.32603 7.94492C7.40558 7.94492 7.48159 7.91202 7.53603 7.85401L7.85403 7.53601C7.91203 7.48157 7.94494 7.40556 7.94494 7.32601Z"
                    fill="#D5D5D5"/>
            </svg>
          </button>
        : false
      }
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
});

export default TextInput;
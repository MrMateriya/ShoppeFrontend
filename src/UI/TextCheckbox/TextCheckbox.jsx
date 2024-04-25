'use client'
import React, {memo} from 'react';
import styles from './styles/TextCheckbox.module.css'
const TextCheckbox = memo(function TextCheckbox({className, title, id, htmlFor, ...props}) {
  return (
    <div className={[styles['checkbox-wrapper'], className].join(' ')}>
      <input onInvalid={(e) => {console.log(e)}} className={styles['checkbox-wrapper__input']} id={id} type='checkbox' {...props}/>
      <label className={styles['checkbox-wrapper__label']} htmlFor={htmlFor}>{title}</label>
    </div>
  );
});

export default TextCheckbox;
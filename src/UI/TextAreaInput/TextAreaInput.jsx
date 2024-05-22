import React from 'react';
import styles from './styles/TextAreaInput.module.css'
const TextAreaInput = ({className, ...props}) => {
  return (
    <textarea className={[styles['textarea'], className].join(' ')} {...props}/>
  );
};

export default TextAreaInput;
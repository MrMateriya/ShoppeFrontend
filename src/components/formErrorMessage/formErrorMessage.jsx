import React, {useRef} from 'react';
import styles from './styles/formErrorMessage.module.css'
import {CSSTransition} from "react-transition-group";

const FormErrorMessage = ({className, classNameTitle, CSSTransitionClassNames, appear, inCondition, timeout, errorTitle}) => {
  const errorTitleRef = useRef(null)
  return (
    <CSSTransition
      classNames={CSSTransitionClassNames || {
        appear: styles['form-error-message-appear'],
        appearActive: styles['form-error-message-active-appear'],
        appearDone: styles['form-error-message-done-appear'],
        enter: styles['form-error-message-enter'],
        enterActive: styles['form-error-message-active-enter'],
        enterDone: styles['form-error-message-done-enter'],
        exit: styles['form-error-message-exit'],
        exitActive: styles['form-error-message-active-exit'],
        exitDone: styles['form-error-message-done-exit'],
      }}
      appear={appear}
      timeout={timeout}
      in={inCondition}
      nodeRef={errorTitleRef}
    >
      <div className={[styles['form-error-message'], className].join(' ')} ref={errorTitleRef}>
        <h1 className={[styles['form-error-message__title'], classNameTitle].join(' ')}>{errorTitle || 'Something went wrong'}</h1>
      </div>
    </CSSTransition>
  );
};

export default FormErrorMessage;
import React from 'react';
import styles from './styles/TextSelectorButton.module.css'
const TextSelectorButton = React.memo(function SelectorButton({fill= 'white', className, ...props}) {
  return (
    <button type='button' className={[styles['selector-button'], className].join(' ')} {...props}>
      <svg className={styles['selector-button__svg']} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.03939 0.0739383C9.08632 0.0266173 9.15021 -3.71455e-08 9.21686 -3.42322e-08C9.28351 -3.13188e-08 9.3474 0.0266173 9.39433 0.0739383L9.92425 0.603858C9.97258 0.649218 10 0.712548 10 0.778831C10 0.845114 9.97258 0.908445 9.92425 0.953805L5.32995 5.54811C5.2597 5.61844 5.1644 5.658 5.06499 5.65809L4.93501 5.65809C4.8356 5.658 4.7403 5.61844 4.67005 5.54811L0.0757474 0.953804C0.0274162 0.908445 -3.69411e-08 0.845114 -3.40438e-08 0.778831C-3.11465e-08 0.712548 0.0274162 0.649217 0.0757475 0.603858L0.605667 0.0739379C0.652601 0.026617 0.716492 -4.05795e-07 0.78314 -4.02882e-07C0.84979 -3.99968e-07 0.913679 0.026617 0.960613 0.073938L5 4.11332L9.03939 0.0739383Z"
          fill={fill}/>
      </svg>
    </button>
  );
});

export default TextSelectorButton;
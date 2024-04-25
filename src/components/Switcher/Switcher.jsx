'use client'

import React, {useState, memo} from 'react';
import styles from './styles/Switcher.module.css'

const Switcher = memo(function Switcher({className, classNameButtons, onChange, options = [{id: 0, title: 'Switcher'}], initialOption, ...props}) {
  const [selectedOptionId, setSelectedOptionId] = useState(initialOption?.id || options[0].id)
  const handleOptionClick = (option) => {
    setSelectedOptionId(option.id)
    if (onChange && (selectedOptionId !== option.id)) {
      console.log('change')
      onChange(option)
    }
  }
  return (
    <div style={{'--option-amount': options.length}} className={[styles['switcher'], className].join(' ')} {...props}>
      <div style={{transform: `translateX(calc(var(--slider-step) * ${selectedOptionId}))`}} className={styles['switcher__slider']}></div>
      {options.map(option => {
        return (
          <button key={option.id}
                  onClick={() => {handleOptionClick(option)}}
                  type='button'
                  className={[styles['switcher__option'], classNameButtons].join(' ')}>
            {option.title}
          </button>
        );
      })}
    </div>
  );
});

export default Switcher;
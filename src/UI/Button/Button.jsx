import React, {memo} from 'react';
import styles from './styles/Button.module.css'
const Button = memo(function Button({styleType, className, classNameFont, children, ...props}) {
  let defaultStyle;
  let defaultFontStyle;
  switch (styleType) {
    case 'white':
      defaultStyle = 'button_white'
      defaultFontStyle = 'button_white-font'
      break;
    case 'black':
      defaultStyle = 'button_black'
      defaultFontStyle = 'button_black-font'
      break;
    case 'outlined':
      defaultStyle = 'button_outlined'
      defaultFontStyle = 'button_outlined-font'
      break;
    default:
      defaultStyle = 'button_white'
      defaultFontStyle = 'button_white-font'
      break;
  }
  return (
    <button className={[className || styles['button'],
                        styles[defaultStyle],
                        classNameFont || styles[defaultFontStyle]].join(' ')}
      {...props}>
      {children}
    </button>
  );
});

export default Button;
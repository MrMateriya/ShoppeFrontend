import React from 'react';
import styles from './styles/Message.module.css'
import Link from "next/link";
const Message = ({className, message, linkText, linkHref, isShowIcon, ...props}) => {
  return (
    <div className={[styles['message'], isShowIcon? '': styles['message_no-icon'], className].join(' ')} {...props}>
      <div className={styles['message__description-wrapper']}>
        {isShowIcon
          ? <svg className={styles['message__icon']} width="20" height="20" viewBox="0 0 20 20" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0 10C0 4.47715 4.47715 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM8.7301 13.35L14.3501 7.73004C14.5342 7.53689 14.5342 7.23319 14.3501 7.04004L13.8201 6.51004C13.6257 6.31947 13.3145 6.31947 13.1201 6.51004L8.3801 11.25L6.8801 9.76004C6.78936 9.66336 6.66268 9.60852 6.5301 9.60852C6.39751 9.60852 6.27083 9.66336 6.1801 9.76004L5.6501 10.29C5.55544 10.3839 5.5022 10.5117 5.5022 10.645C5.5022 10.7784 5.55544 10.9062 5.6501 11L8.0301 13.35C8.12083 13.4467 8.24751 13.5016 8.3801 13.5016C8.51268 13.5016 8.63936 13.4467 8.7301 13.35Z"
                    fill="#A18A68"/>
            </svg>
          : undefined
        }
        <p className={[styles['message__description'], 'dm-sans-desktop-heading-5'].join(' ')}>{message}</p>
      </div>
      <Link href={linkHref} className={[styles['message__link'], 'dm-sans-desktop-body-large', 'accent-link'].join(' ')}>
        {linkText}
      </Link>
    </div>
  );
};

export default Message;
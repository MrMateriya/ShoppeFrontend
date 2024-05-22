import React from 'react';
import Message from "@/components/Message/Message";
import styles from "./styles/AccountDownloadsPage.module.css"

const AccountDownloadsPage = () => {
  return (
    <div className={styles['downloads-content']}>
      <Message message='No downloads available yet.' linkHref='/shop' linkText='BROWSE PRODUCT'/>
    </div>
  );
};

export default AccountDownloadsPage;
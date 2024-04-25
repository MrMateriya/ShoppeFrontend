import React from 'react';
import styles from './styles/MyAccountPage.module.css'
import AccountForm from "@/components/AccountForm/AccountForm";
const MyAccountPage = () => {
  return (
    <main className={styles['page-container']}>
      <AccountForm/>
    </main>
  );
};

export default MyAccountPage;
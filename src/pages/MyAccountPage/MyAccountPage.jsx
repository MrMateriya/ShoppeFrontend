import React from 'react';
import styles from './styles/MyAccountPage.module.css'
import {AccountForm} from "@/modules/AccountForm/index.js";
import {cookies} from "next/headers";
const MyAccountPage = () => {
  return (
    <main className={styles['page-container']}>
      <AccountForm className={styles['page-form']}/>
    </main>
  );
};

export default MyAccountPage;
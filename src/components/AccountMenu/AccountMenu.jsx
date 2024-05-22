'use client'

import React from 'react';
import styles from './styles/AccountMenu.module.css'
import LinkList from "@/components/LinkList/LinkList";
import {usePathname} from "next/navigation";
const AccountMenu = ({accountSections}) => {
  const path = usePathname()
  return (
    <>
      {path === '/account/dashboard'
        ? <h1 className={['dm-sans-desktop-heading-1', styles['page-title']].join(' ')}>My Account</h1>
        : undefined}
      <div className={styles['account-sections']}>
        <LinkList links={accountSections}
                  classNameLink={['dm-sans-desktop-heading-3', styles['account-sections__link']].join(' ')}
                  classNameCurrentLink={styles['account-sections__link_underlined-current']}/>
      </div>
    </>
  );
};

export default AccountMenu;
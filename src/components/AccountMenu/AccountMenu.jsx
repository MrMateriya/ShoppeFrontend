'use client'

import React from 'react';
import styles from './styles/AccountMenu.module.css'
import LinkList from "@/components/LinkList/LinkList";
import {usePathname, useRouter} from "next/navigation";
import axios from "axios";
const AccountMenu = ({accountSections}) => {
  const path = usePathname()
  const router = useRouter()
  async function handleLogOut() {
    try {
      await axios.post(`/logout`, {},{
        headers: {
          'Content-Type': 'application/json',
        },
        baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
        withCredentials: true
      })
    } catch (e) {
      console.error(e)
    }

    router.replace(`${process.env.NEXT_PUBLIC_FRONTEND_API_URL}/`)
  }

  return (
    <>
      {path === '/account/dashboard'
        ? <h1 className={['dm-sans-desktop-heading-1', styles['page-title']].join(' ')}>My Account</h1>
        : undefined}
      <div className={styles['account-sections']}>
        <LinkList links={accountSections}
                  classNameLink={['dm-sans-desktop-heading-3', styles['account-sections__link'], 'gray-link'].join(' ')}
                  classNameCurrentLink={styles['account-sections__link_underlined-current']}/>
        <span className={['dm-sans-desktop-heading-3', styles['account-sections__link'], 'gray-link'].join(' ')} onPointerDown={handleLogOut}>Log out</span>
      </div>
    </>
  );
};

export default AccountMenu;
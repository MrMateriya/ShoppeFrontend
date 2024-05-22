'use client'

import React, {useEffect, useState} from 'react';
import {BackendAxios} from "@/http/BackendAxios";
import {useBackendAxios} from "@/hooks/useBackendAxios";
import styles from './styles/AccountDashboardPage.module.css'
import Link from "next/link";
import {useRouter} from "next/navigation";
import axios from "axios";
const AccountDashboardPage = () => {
  const [request, loading, error] = useBackendAxios(async () => {
    return await BackendAxios.get('/me')
  })
  const router = useRouter()
  async function handleGetMe() {
    const user = await request()
    setUser(user?.data)
  }
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
  const [user, setUser] = useState({})
  useEffect(() => {
    handleGetMe()
  }, []);
  return (
    <div className={styles['dashboard-content']}>
      {loading
        ? <p className={styles['dashboard-content__message']}>...</p>
        : error
          ? <p className={styles['dashboard-content__message']}>{error.message}</p>
          : <p className={[styles['dashboard-content__message'], 'dm-sans-desktop-heading-5'].join(' ')}>
              Hello {user.login} (not {user.login}? <span onPointerDown={handleLogOut} className={'accent-link'}>Log out</span>)
              <br/>
              From your account dashboard you can view your <Link href='/orders'><span className={'accent-link'}>recent orders</span></Link>,
              manage your <Link href='/addresses'><span className={'accent-link'}>shipping and billing addresses</span></Link>, and
              edit your <Link href='account-details'><span className={'accent-link'}>password and account details</span></Link>.
            </p>
      }
    </div>
  );
};

export default AccountDashboardPage;
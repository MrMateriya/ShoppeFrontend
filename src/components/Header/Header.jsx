'use client'

import React from 'react';
import styles from './styles/Header.module.css'
import SearchIcon from "/public/images/icons/SearchIcon.svg"
import ShoppingCart from "/public/images/icons/ShoppingCart.svg"
import UserIcon from "/public/images/icons/UserIcon.svg"
import LinkList from "@/components/LinkList/LinkList";
import TextLink from "@/UI/TextLink/TextLink";
import {usePathname} from "next/navigation";
const Header = () => {
  const path = usePathname()

  const pageLinks = [
    {url: '/shop', title: 'Shop'},
    // {url: '/blog', title: 'Blog'},
    {url: '/our-story', title: 'Our Story'}
  ]
  const iconLinks = [
    // {url: '/search', title: 'Search'},
    {url: '/cart', title: 'Cart'},
    {url: '/my-account', title: 'Account'},
  ]
  const icons = [
    // {src: SearchIcon, alt: 'SearchIcon.svg'},
    {src: ShoppingCart, alt: 'ShoppingCart.svg'},
    {src: UserIcon, alt: 'UserIcon.svg'}
  ]

  return (
    <header className={[styles['header'], path === '/'? styles['header_no-border'] : '', 'container'].join(' ')}>
      <TextLink href='/' className={[styles['header__logo'], styles['logo']].join(' ')} classNameCurrentLink={styles['logo_current']}>
        <span className={styles['logo__span']}>S</span>HOPPE
      </TextLink>
      <nav className={styles['header__nav']}>
        <div className={[styles['header__page-links'], styles['page-links']].join(' ')}>
          <LinkList
            links={pageLinks}
            classNameLink={[styles['page-links__link'], 'dm-sans-desktop-heading-5'].join(' ')}
            classNameCurrentLink={styles['page-links__link-current']}/>
        </div>
        <div className={styles['header__nav-separate-line']}></div>
        <div className={[styles['header__icon-links'], styles['icon-links']].join(' ')}>
          <LinkList
            links={iconLinks}
            icons={icons}
            classNameLink={[styles['icon-links__link'], 'dm-sans-desktop-heading-5'].join(' ')}
            classNameCurrentLink={styles['icon-links__link-current']}
            classNameLinkImage={styles['icon-links__image']}/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
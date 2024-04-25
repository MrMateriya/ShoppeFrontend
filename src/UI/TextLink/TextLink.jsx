'use client'

import styles from './styles/TextLink.module.css'
import React, {memo} from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const TextLink = memo(function TextLink ({href, className, classNameCurrentLink, styleType = 'underlined', children, ...props}) {
  let styleLinkType;
  let styleLinkTypeActive;
  switch (styleType) {
    case 'underlined':
      styleLinkType = 'link_underlined'
      styleLinkTypeActive = 'link_underlined-current'
      break;
    case 'gray':
      styleLinkType = 'link_gray'
      styleLinkTypeActive = 'link_gray-current'
      break;
    case 'black':
      styleLinkType = 'link_black'
      styleLinkTypeActive = 'link_black-current'
      break;
    case 'accent':
      styleLinkType = 'link_accent'
      styleLinkTypeActive = 'link_accent-current'
      break;
    default:
      styleLinkType = 'link_gray';
      styleLinkTypeActive = 'link_gray-current';
      break;
  }
  const path = usePathname()
  return (
    <Link href={href}
          className={[className || styles[styleLinkType],
          path === href?  classNameCurrentLink || styles[styleLinkTypeActive] : ''].join(' ')}
          {...props}>
      {children}
    </Link>
  );
});

export default TextLink;
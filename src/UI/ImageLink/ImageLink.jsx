'use client'

import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import styles from "./styles/ImageLink.module.css";
import Image from "next/image";

const ImageLink = ({href, className, classNameCurrentLink, classNameImage, src, alt, children, ...props}) => {
  const path = usePathname()
  return (
    <Link href={href}
          className={[className || styles['link'],
            path === href?  classNameCurrentLink || styles['link_underlined-current'] : ''].join(' ')}
          {...props}>
      <Image className={classNameImage || styles['link__image']} src={src} alt={alt}/>
      {children}
    </Link>
  );
}

export default ImageLink;
import React from 'react';
import Link from "next/link";
import styles from './styles/NotFoundPage.module.css'
const NotFoundPage = () => {
  return (
    <main className={[styles['page-container'], styles['error']].join(' ')}>
      {/*<video width="320" height="240" autoPlay={true} controls={false} preload="none">*/}
      {/*  <source src="/videos/NotFoundVideo.mp4" type="video/mp4"/>*/}
      {/*  <track*/}
      {/*    src="/path/to/captions.vtt"*/}
      {/*    kind="subtitles"*/}
      {/*    srcLang="en"*/}
      {/*    label="English"*/}
      {/*  />*/}
      {/*  Your browser does not support the video tag.*/}
      {/*</video>*/}
      <h1 className={[styles['error__title'], 'dm-sans-desktop-heading-1'].join(' ')}>
        404 error
      </h1>
      <p className={[styles['error__text'], 'dm-sans-desktop-heading-3'].join(' ')}>
        This page not found;<br/>
        back to home and start again
      </p>
      <Link href='\' className={[styles['error__link'], 'dm-sans-desktop-body-large'].join(' ')}>Home</Link>
    </main>
  );
};

export default NotFoundPage;
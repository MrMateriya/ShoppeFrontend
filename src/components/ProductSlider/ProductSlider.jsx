'use client'

import React, {useEffect, useRef, useState} from 'react';
import styles from './styles/ProductSlider.module.css'
import Link from "next/link";
import {CSSTransition, Transition} from "react-transition-group";
const ProductSlider = ({products, className}) => {
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev >= products.length-1) {
          prev = 0
          return prev
        }
        return prev+1
      })
    }, 5000)

    return () => {
      clearInterval(interval)
    }
  }, []);

  const priceFormat = products[timer].price['$numberDecimal'].replace('.', ',')

  return (
    <div className={[styles['product-slider-wrapper'], className].join(' ')}>
      <img className={styles['product-slider-wrapper__background-image']}
           src={products[timer].photos[1]}
           alt="product photo"/>
      <div className={[styles['product-slider-wrapper__description'], 'description'].join(' ')}>
        <h2 className={[styles['description__title'], 'dm-sans-desktop-heading-1'].join(' ')}>
          {products[timer].title}
        </h2>
        <p className={[styles['description__price'], 'dm-sans-desktop-heading-2'].join(' ')}>
          $ {priceFormat}
        </p>
        <Link href={`/shop/${products[timer]._id}`} className={styles['description__link-view']}>
          View Product
        </Link>
      </div>
      <div className={[styles['product-slider-wrapper__circle-sections'], styles['circle-sections']].join(' ')}>
        {products.map(product => {
          if (product._id === products[timer]._id) {
            return (
              <div key={product._id} className={styles['circle-sections__circle_current']}></div>
            );
          }
          return (
            <div key={product._id} className={styles['circle-sections__circle']}></div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductSlider;
import React from 'react';
import styles from './styles/ProductList.module.css'
import Link from "next/link";
import ImageLink from "@/UI/ImageLink/ImageLink";
import ShoppingCart from "/public/images/icons/ShoppingCart.svg"
import eye from "/public/images/icons/eye.svg"
import heart from "/public/images/icons/heart.svg"
import Image from "next/image";
const ProductList = ({products, classNameList, classNameItem, classNameItemImageWrapper, classNameItemImage, classNameItemTitle, classNameItemPrice, ...props}) => {
  return (
    <ul className={classNameList ? classNameList : styles['list']} {...props}>
      {products.map(product => {
        const priceFormat = product.price['$numberDecimal'].replace('.', ',')
        return (
          <li key={product._id} className={[styles['list__item'], classNameItem].join(' ')}>
            <div className={classNameItemImageWrapper ? classNameItemImageWrapper : styles['list__item-image-wrapper']}>
              <img className={[styles['list__item-image'], classNameItemImage].join(' ')}
                   src={product.photos[0]}
                   alt={`product ${product.title}`}/>
              <div className={styles['list__item-menu']}>
                <div className={styles['list__item-menu-background']}></div>
                <ImageLink alt={'ShoppingCart.svg'} className={styles['list__item-menu-cart']} href='/cart' src={ShoppingCart}></ImageLink>
                <ImageLink alt={'eye.svg'} className={styles['list__item-menu-eye']} href={`/shop/${product._id}`}
                           src={eye}></ImageLink>
                <button className={styles['list__item-menu-heart-button']}>
                  <Image className={styles['list__item-menu-heart-image']} src={heart} alt={'heart.svg'}/>
                </button>
              </div>
            </div>
            <h3 className={[styles['list__item-title'], classNameItemTitle].join(' ')}>{product.title}</h3>
            <p className={[styles['list__item-price'], classNameItemPrice].join(' ')}>$ {priceFormat}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ProductList;
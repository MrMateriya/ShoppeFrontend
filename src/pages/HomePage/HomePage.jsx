import React from 'react';
import ProductList from "@/components/ProductList/ProductList";
import {BackendAxios} from "@/http/BackendAxios";
import styles from './styles/HomePage.module.css'
import Link from "next/link";
import ProductSlider from "@/components/ProductSlider/ProductSlider";
export const revalidate = 3600
const HomePage = async () => {
  const {data: products} = await BackendAxios.get('/product')
  // const newProducts = products.filter()
  const initialProduct = [{
    "_id": "6653611b214199b31a5eac90",
    "title": "Hal Earrings",
    "price": {
      "$numberDecimal": "25.00"
    },
    "reviews": [],
    "rating": {
      "$numberDecimal": "0"
    },
    "shortDescription": "Add a touch of whimsy to your everyday look with the Hal Earrings. These playful earrings feature a delicate, hand-finished design with intricate details and a modern silhouette. Made from high-quality materials, they are lightweight and comfortable to wear. Perfect for dressing up or adding a pop of personality to your casual outfit, the Hal Earrings are a must-have accessory for any fashion enthusiast.",
    "fullDescription": "Elevate your style with the Hal Earrings, a stunning piece of costume jewelry that exudes elegance and sophistication. These elegant earrings feature a delicate design with intricate details, adding a touch of refinement to any outfit.",
    "SKU": 27,
    "categories": [
      "66517a20256e27bd003f2de5",
      "66517a25256e27bd003f2de7",
      "665179fd256e27bd003f2de1"
    ],
    "photos": [
      "http://localhost:5000/static/images/product/HalEarrings/HalEarringsProductView.jfif",
      "http://localhost:5000/static/images/product/HalEarrings/HalEarringsModelView.png"
    ],
    "additionalInformation": "Weight: 0.1 kg Dimentions: 3 x 3 x 1 cm Colours: Gold Material: Metal",
    "discount": {
      "$numberDecimal": "1"
    },
    "typeJewelry": "66522b0192551e07af158453",
    "isSoldOut": false,
    "isNewProduct": false,
    "isDiscount": false,
    "createdAt": "2024-05-26T16:19:39.956Z",
    "updatedAt": "2024-05-26T16:19:39.956Z",
    "__v": 0
  }]
  return (
    <main className={[styles['home-page'], 'container'].join(' ')}>
      <section className={styles['product-slider-section']}>
        <ProductSlider className={styles['product-slider-section__slider']} products={products || initialProduct}/>
      </section>
      <section className={styles['product-list-section']}>
        <div className={[styles['product-list-section__header'], styles['product-list-header']].join(' ')}>
          <h3 className={[styles['product-list-header__title'], 'dm-sans-desktop-heading-1'].join(' ')}>
            Shop The Latest
          </h3>
          <Link href='/shop' className={[styles['product-list-header__link'], 'dm-sans-desktop-heading-4', 'accent-link'].join(' ')}>
            View All
          </Link>
        </div>
        <ProductList
          classNameList={styles['product-list-section__list']}
          classNameItemTitle={'dm-sans-desktop-heading-3'}
          classNameItemPrice={'dm-sans-desktop-heading-4'}
          products={products || initialProduct}/>
      </section>

    </main>
  );
};

export default HomePage;
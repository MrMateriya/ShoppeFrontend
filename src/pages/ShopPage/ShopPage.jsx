'use client'

import React, {useEffect, useState} from 'react';
import styles from './styles/ShopPage.module.css'
import ProductList from "@/components/ProductList/ProductList";
import {BackendAxios} from "@/http/BackendAxios";
import {useBackendAxios} from "@/hooks/useBackendAxios";
import SearchInput from "@/UI/SearchInput/SearchInput";
const ShopPage = () => {
  const [request, loading, error, setError] = useBackendAxios(async () => {
    const {data: products} = await BackendAxios.get('/product')
    return products
  })
  const [products, setProducts] = useState([])

  useEffect(() => {
    const products = request()
      .then(res => {setProducts(res)})
      .catch(err => {setError(err)})
  }, []);

  return (
    <main className={[styles['shop-page'], 'container'].join(' ')}>
      <h1 className={[styles['shop-page__title'], 'dm-sans-desktop-heading-1'].join(' ')}>
        Shop The Latest
      </h1>
      <section className={styles['shop-page__section']}>
        <div className={[styles['shop-page__side-bar'], styles['side-bar']].join(' ')}>
          <SearchInput className={styles['side-bar__search-input']} classNameFont='dm-sans-desktop-body-medium'/>
        </div>
        {!loading && <ProductList
          products={products}
          classNameList={styles['shop-page__section-product-list']}
          classNameItemImageWrapper={styles['shop-page__section-product-list-item-image']}/>}
      </section>
    </main>
  );
};

export default ShopPage;
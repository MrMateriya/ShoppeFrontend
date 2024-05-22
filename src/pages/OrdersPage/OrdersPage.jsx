import React from 'react';
import Message from "@/components/Message/Message";
import styles from "./styles/OrdersPage.module.css"

const OrdersPage = () => {
  return (
    <div className={styles['orders-content']}>
      <Message message='No order has been made yet.' linkText='BROWSE PRODUCT' linkHref='/shop'/>
    </div>
  );
};

export default OrdersPage;
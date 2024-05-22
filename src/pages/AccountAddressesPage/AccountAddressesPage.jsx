import React from 'react';
import styles from './styles/AccountAddressesPage.module.css'
const AccountAddressesPage = () => {
  return (
    <div className={styles['addresses-content']}>
      <p className={[styles['addresses-content__description'], 'dm-sans-desktop-heading-5'].join(' ')}>
        The following addresses will be used on the checkout page by default.
      </p>
      <div className={[styles['addresses-content__addresses-list'], styles['addresses-list']].join(' ')}>
        <div className={styles['addresses-list__item']}>
          <h3 className={[styles['addresses-list__title'], 'dm-sans-desktop-heading-3'].join(' ')}>Billing address</h3>
          <button className={[styles['addresses-list__add-button'], 'dm-sans-desktop-body-large', 'accent-link'].join(' ')}>ADD</button>
          <p className={[styles['addresses-list__description'], 'dm-sans-desktop-body-medium'].join(' ')}>You have not set up this type of address yet.</p>
        </div>
        <div className={styles['addresses-list__item']}>
          <h3 className={[styles['addresses-list__title'], 'dm-sans-desktop-heading-3'].join(' ')}>Shipping address</h3>
          <button className={[styles['addresses-list__add-button'], 'dm-sans-desktop-body-large', 'accent-link'].join(' ')}>ADD</button>
          <p className={[styles['addresses-list__description'], 'dm-sans-desktop-body-medium'].join(' ')}>You have not set up this type of address yet.</p>
        </div>
      </div>
    </div>
  );
};

export default AccountAddressesPage;
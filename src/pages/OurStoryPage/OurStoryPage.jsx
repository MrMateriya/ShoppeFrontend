import React from 'react';
import styles from './styles/OurStoryPage.module.css'

const OurStoryPage = () => {
  return (
    <main className={styles['page-container']}>
      <section className={styles['page-section_titled']}>
        <h1 className={[styles['page-title'], 'dm-sans-desktop-heading-1'].join(' ')}>
          About
        </h1>
        <h3 className={[styles['page-sub-title'], 'dm-sans-desktop-heading-3'].join(' ')}>
          Who we are and why we do what we do!
        </h3>
        <p className={[styles['page-description'], 'dm-sans-desktop-heading-5'].join(' ')}>
          Welcome to our online jewelry shop, a haven for those who appreciate the beauty
          and craftsmanship of fine jewelry. Our journey began with a shared passion for exquisite
          designs and a vision to bring these treasures to the fingertips of jewelry enthusiasts worldwide.
        </p>
      </section>
      <section className={styles['page-section']}>
        <h2 className={[styles['page-section__title'], 'dm-sans-desktop-heading-2'].join(' ')}>
          Founding and Concept
        </h2>
        <div className={styles['page-section__image-wrapper']}>
          <img className={[styles['page-section__image'], styles['page-section__image-emily']].join(' ')} src="/images/models/Emily%20Chen(2).jpeg" alt="women1.jfif"/>
        </div>
        <p className={[styles['page-section__description'], 'dm-sans-desktop-heading-5'].join(' ')}>
          Brand Shoppe was founded in 2018 by Emily Chen, a jewelry enthusiast and entrepreneur with
          a passion for unique and affordable designs. Emily had always been fascinated by the world of
          jewelry, spending hours browsing through boutiques and markets, searching for one-of-a-kind pieces
          that reflected her personal style. However, she noticed that many online jewelry stores focused on
          mass-produced, generic designs that lacked character and personality. Emily saw an opportunity to create a
          platform that would offer high-quality, bespoke jewelry at an affordable price point, while also showcasing
          emerging designers and artisans.
        </p>
      </section>
      <section className={styles['page-section']}>
        <h2 className={[styles['page-section__title'], 'dm-sans-desktop-heading-2'].join(' ')}>
          Early Development
        </h2>
        <div className={styles['page-section__image-wrapper']}>
          <img className={[styles['page-section__image'], styles['page-section__image-early-development']].join(' ')} src="/images/models/women1.jfif" alt="women1.jfif"/>
        </div>
        <p className={[styles['page-section__description'], 'dm-sans-desktop-heading-5'].join(' ')}>
          Emily spent the first few months researching the market, developing a business plan, and building a team of
          experts in various fields, including design, marketing, and e-commerce. She invested in a website development
          company to design and build the initial platform, which was launched in September 2018. The initial website
          featured a curated selection of around 50 pieces from local designers and artisans.
        </p>
      </section>
      <section className={styles['page-section']}>
        <h2 className={[styles['page-section__title'], 'dm-sans-desktop-heading-2'].join(' ')}>
          Initial Growth
        </h2>
        <div className={styles['page-section__image-wrapper']}>
          <img className={styles['page-section__image']} src="/images/companyEvents/JewelryTradeShows.jpeg" alt="women1.jfif"/>
        </div>
        <p className={[styles['page-section__description'], 'dm-sans-desktop-heading-5'].join(' ')}>
          In the first year, Brand Shoppe experienced steady growth, with sales increasing by 20% each quarter. The
          website gained popularity through social media marketing, influencer partnerships, and targeted advertising.
          Emily also attended jewelry trade shows and events to network with designers and stay up-to-date on the latest
          trends.
        </p>
      </section>
      <section className={styles['page-section']}>
        <h2 className={[styles['page-section__title'], 'dm-sans-desktop-heading-2'].join(' ')}>
          Expansion and Optimization
        </h2>
        <div className={styles['page-section__image-wrapper']}>
          <img className={[styles['page-section__image'], styles['page-section__image-expansion-and-optimization']].join(' ')} src="/images/Jewelry/WhiteJewelryCollection.jpeg" alt="women1.jfif"/>
        </div>
        <p className={[styles['page-section__description'], 'dm-sans-desktop-heading-5'].join(' ')}>
          In 2019, Brand Shoppe expanded its product line to include more established designers and international
          brands. The company also invested in optimizing its website for search engines, improving user experience, and
          implementing an email marketing strategy. This led to a significant increase in organic traffic and
          conversions.
        </p>
      </section>
      <section className={styles['page-section']}>
        <h2 className={[styles['page-section__title'], 'dm-sans-desktop-heading-2'].join(' ')}>
          New Design and Features
        </h2>
        <div className={styles['page-section__image-wrapper']}>
          <img className={[styles['page-section__image'], styles['page-section__image-new-design-and-features']].join(' ')} src="/images/hands/hands-beads.jpg" alt="women1.jfif"/>
        </div>
        <p className={[styles['page-section__description'], 'dm-sans-desktop-heading-5'].join(' ')}>
          In 2020, Brand Shoppe launched a major redesign of its website, featuring a new interface, improved
          navigation, and enhanced product pages. The company also introduced new features, such as personalized gift
          wrapping, virtual try-on technology, and a loyalty program.
        </p>
      </section>
      <section className={styles['page-section']}>
        <h2 className={[styles['page-section__title'], 'dm-sans-desktop-heading-2'].join(' ')}>
          Covid-19 Pandemic Response
        </h2>
        <div className={styles['page-section__image-wrapper']}>
          <img className={[styles['page-section__image'], styles['page-section__image-covid']].join(' ')} src="/images/companyEvents/CovidVirus.jpg" alt="women1.jfif"/>
        </div>
        <p className={[styles['page-section__description'], 'dm-sans-desktop-heading-5'].join(' ')}>
          When the Covid-19 pandemic hit in 2020, Brand Shoppe quickly adapted its business strategy to accommodate the
          new reality. The company shifted its focus to online sales, investing in social media marketing and email
          marketing campaigns to stay connected with customers. Emily also launched a series of online workshops and
          tutorials to help customers learn about jewelry care and styling.
        </p>
      </section>
      <section className={styles['page-section']}>
        <h2 className={[styles['page-section__title'], 'dm-sans-desktop-heading-2'].join(' ')}>
          Current Status
        </h2>
        <div className={styles['page-section__image-wrapper']}>
          <img className={[styles['page-section__image'], styles['page-section__image-current-status']].join(' ')} src="/images/hands/hands-watch.jpg" alt="women1.jfif"/>
        </div>
        <p className={[styles['page-section__description'], 'dm-sans-desktop-heading-5'].join(' ')}>
          Today, Brand Shoppe is one of the leading online jewelry stores in the industry, offering over 1,000 unique
          pieces from around the world. The company has expanded its team to include expert curators, designers, and
          customer service representatives. Emily continues to oversee the company's vision and strategy, ensuring that
          Brand Shoppe remains a trusted destination for jewelry enthusiasts everywhere.
          <br/>
          This is just one possible creation history for Brand Shoppe. Feel free to modify it or add your own details to
          make it more accurate or interesting!
        </p>
      </section>
    </main>
  );
};

export default OurStoryPage;
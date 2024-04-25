import React from 'react';
import styles from './styles/OurStoryPage.module.css'
const OurStoryPage = () => {
  return (
    <main className={styles['container-page']}>
      <section>
        <h1>About</h1>
        <h3>Who we are and why we do what we do!</h3>
        <p>
          Welcome to our online jewelry shop, a haven for those who appreciate the beauty
          and craftsmanship of fine jewelry. Our journey began with a shared passion for exquisite
          designs and a vision to bring these treasures to the fingertips of jewelry enthusiasts worldwide.
        </p>
      </section>
      <section>
        <h2>Top trends</h2>
        <div>
          <img src="" alt=""/>
        </div>
        <p>
          Our online jewelry shop thrives on staying updated with the latest fashion trends and innovative designs.
          We believe in offering a wide array of choices, catering to diverse tastes and preferences.
          From timeless classics to contemporary styles, our collection is a perfect blend of tradition and modernity.
        </p>
      </section>
    </main>
  );
};

export default OurStoryPage;
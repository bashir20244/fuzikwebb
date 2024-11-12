import React from 'react';
import Img from '../assets/59cfcea786465c009ce38a85c6adab04.jpg';
import styles from './main.module.css';
import CommoSection from '../components/ui/CommoSection';

const About = () => {
  return (
    
    <section className={styles.aboutUs}>
      
      <div className={styles.abouttitle}>
        <p>About Us</p>
      </div>
      <CommoSection title="who we are" />
      <div className={styles.aboutSection}>
        <p className={styles.abouttextContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt, quod facere commodi ab nam corrupti cumque fuga totam maxime necessitatibus iusto dolores veniam odio adipisci dolor doloribus aut voluptas!
        </p>
        <img src={Img} alt="About Us" className={styles.aboutimage} />
      </div>

      <div className={styles.aboutSection}>
        <img src={Img} alt="About Us" className={styles.aboutimage} />
        <p className={styles.abouttextContent}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sunt, quod facere commodi ab nam corrupti cumque fuga totam maxime necessitatibus iusto dolores veniam odio adipisci dolor doloribus aut voluptas!
        </p>
      </div>
    </section>
  );
};

export default About;

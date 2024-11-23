import React from 'react';
import styles from './main.module.css';
import Img from '../assets/59cfcea786465c009ce38a85c6adab04.jpg';
import data from '../components/data/data';

const OurTeam = () => {
  return (
    <main>
    <section className={styles.ourteam} >
    <div>
      <h1>OUR TEAM</h1>
      </div>  
    </section>
    <section className={styles.manager}>
      <div className={styles.managercard}>
        <div className={styles.image}>
          <img src={Img} title='manager'id={styles.m} />
        </div>
        <div className={styles.details}>
         <h3>{data["manager"].name}</h3> 
         <hr/>
        </div>
        <p>{data["manager"].role}</p>
      </div>
    </section>
    <div className={styles.header}>
        <h2 className={styles.headofdep}>Head of department</h2>
      </div>
    <section className={styles.head} >
     
    <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='project manager' />
        </div>
        <div className={styles.details}>
         <h3>{data["project manager"].name}</h3> 
         <hr/>
        </div>
        <p>{data["project manager"].role}</p>
      </div>
      <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='project manger' />
        </div>
        <div className={styles.details}>
         <h3>{data["project manager"].name}</h3> 
         <hr/>
        </div>
        <p>{data["project manager"].role}</p>
      </div>
      <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='project manger' />
        </div>
        <div className={styles.details}>
         <h3>{data["project manager"].name}</h3> 
         <hr/>
        </div>
        <p>{data["project manager"].role}</p>
      </div>
    </section>
    <div className={styles.header}>
        <h2>The Team</h2>
      </div>
      <section className={styles.head} >
     
    <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='front-end' />
        </div>
        <div className={styles.details}>
         <h3>{data["front-end"].name}</h3> 
         <hr/>
        </div>
        <p>{data["front-end"].role}</p>
      </div>
      <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='project manger' />
        </div>
        <div className={styles.details}>
         <h3>{data["front-end"].name}</h3> 
         <hr/>
        </div>
        <p>{data["front-end"].role}</p>
      </div>
      <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='front end' />
        </div>
        <div className={styles.details}>
         <h3>{data["front-end"].name}</h3> 
         <hr/>
        </div>
        <p>{data["front-end"].role}</p>
      </div>
    </section>
    <section className={styles.head} >
     
    <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='back-end' />
        </div>
        <div className={styles.details}>
         <h3>{data["back-end"].name}</h3> 
         <hr/>
        </div>
        <p>{data["back-end"].role}</p>
      </div>
      <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='project manger' />
        </div>
        <div className={styles.details}>
         <h3>{data["back-end"].name}</h3> 
         <hr/>
        </div>
        <p>{data["back-end"].role}</p>
      </div>
      <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='back-end' />
        </div>
        <div className={styles.details}>
         <h3>{data["back-end"].name}</h3> 
         <hr/>
        </div>
        <p>{data["back-end"].role}</p>
      </div>
    </section>
    <section className={styles.head} >
     
    <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='ui/ux' />
        </div>
        <div className={styles.details}>
         <h3>{data["ui/ux"].name}</h3> 
         <hr/>
        </div>
        <p>{data["ui/ux"].role}</p>
      </div>
      <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='project manger' />
        </div>
        <div className={styles.details}>
         <h3>{data["ui/ux"].name}</h3> 
         <hr/>
        </div>
        <p>{data["ui/ux"].role}</p>
      </div>
      <div className={styles.teamcard}>
        <div className={styles.image}>
          <img src={Img} title='ui/ux' />
        </div>
        <div className={styles.details}>
         <h3>{data["ui/ux"].name}</h3> 
         <hr/>
        </div>
        <p>{data["ui/ux"].role}</p>
      </div>
    </section>
    </main>
    
  )
}

export default OurTeam
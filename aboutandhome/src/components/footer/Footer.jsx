import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // استخدام مكونات React-Bootstrap
import { Link } from 'react-router-dom';
import mail from '../../assets/material-symbols-light_mail-outline.png';
import phoneoutline from '../../assets/material-symbols-phoneoutline.png';
import loction from '../../assets/Group.png';
import insta from '../../assets/Group 107.png';
import face from '../../assets/Group 108.png';
import linked from '../../assets/iconfinder-social-media-applications-14linkedin-4102586_113786 (1).png';

import styles from '../header/header.module.css';
import style from './footer.module.css';

function Footer() {
  return (
    <section className={style.footer}>
      <Container>
        <Row className="">
          {/* العمود الأول: معلومات الشركة */}
          <Col md={6} className="our-info">
            <h2 className='text-start'>logo</h2>
            <div className="email d-flex mt-1">
              <img src={mail} alt="Email Icon" className={styles.leftImg}/>
              <p className={styles.textSpan}>email@gmai.com</p>
            </div>
            <div className="email d-flex mt-1">
              <img src={phoneoutline} alt="Phone Icon" className={styles.leftImg}/>
              <p className={styles.textSpan}>03322111</p>
            </div>
            <div className="email d-flex mt-1">
              <img src={loction} alt="Location Icon" className={styles.leftImg}/>
              <p className={styles.textSpan}>Location</p>
            </div>
            <div className="social-media d-flex my-3 ">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='me-2'>
                <img src={insta} alt="Instagram" className={styles.rightBox}/>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='me-2'>
                <img src={face} alt="Facebook" className={styles.rightBox}/>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='me-2'>
                <img src={linked} alt="LinkedIn" className={styles.rightBox}/>
              </a>
            </div>

            
          </Col>

          {/* العمود الثاني: نموذج الاتصال */}
          <Col md={6} className={style["user-info"]}>
            <Form>
              <Form.Group controlId="Name">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="Phone" className="mt-3">
                <Form.Control type="text" placeholder="Phone" />
              </Form.Group>
              <Form.Group controlId="Msg" className="mt-3">
                <Form.Control as="textarea" placeholder="Message" rows={4} />
              </Form.Group>
              <div className="centerer mt-2">
                <div className="wrap">
                <Link to="/contactus">
                  <button className='btn my-4'>send to</button>
                </Link>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}


export default Footer
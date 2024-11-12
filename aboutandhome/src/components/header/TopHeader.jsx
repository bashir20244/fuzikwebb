import React from 'react';
import { useTranslation } from 'react-i18next'; // استيراد useTranslation
import mail from '../../assets/material-symbols-light_mail-outline.png';
import phoneoutline from '../../assets/material-symbols-phoneoutline.png';
import loction from '../../assets/Group.png';
import insta from '../../assets/Group 107.png';
import face from '../../assets/Group 108.png';
import linked from '../../assets/iconfinder-social-media-applications-14linkedin-4102586_113786 (1).png';
import styles from './header.module.css';
import 'flag-icons/css/flag-icons.min.css';

const TopHeader = ({ language, handleLanguageChange }) => {
  const { t } = useTranslation(); 
  
  return (
    <div>
      <div className="container">
        <div className="content-topheader d-flex justify-content-between align-items-center my-3">
          <div className="left d-flex justify-content-between align-items-center">
            <div className='me-3 content-left'>
              <img src={mail} alt="mail" className={styles.leftImg} />
              <span className={styles.textSpan}>lorem Ipsum@lorem</span>
            </div>
            <div className='me-3'>
              <img src={phoneoutline} alt="phone" className={styles.leftImg} />
              <span className={styles.textSpan}>lorem Ipsum@lorem</span>
            </div>
            <div>
              <img src={loction} alt="location" className={styles.leftImg} />
              <span className={styles.textSpan}>lorem Ipsum@lorem</span>
            </div>
          </div>

          <div className="right d-flex align-items-center justify-content-center">
            <div className={`icons-right ${styles.socialIcons}`}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='mx-1'>
                <img src={face} alt="facebook" className={styles.rightBox} />
              </a>
              <a href="https://www.linkedin.com/company/fuzik/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className='mx-1'>
                <img src={linked} alt="linkedin" className={styles.rightBox} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='mx-1'>
                <img src={insta} alt="instagram" className={styles.rightBox} />
              </a>

              <div className="d-lg-none align-items-center justify-content-center">
                <div className="dropdown">
                  <button
                    className="d-flex align-items-center border-0 bg-black text-light"
                    type="button"
                    id="languageDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <span className={`fi fis ${language === 'ar' ? 'fi-jo' : 'fi-us'} me-2`}></span>
                    {language === 'ar' ? t('arabic') : t('english')}
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                    <li onClick={() => handleLanguageChange('ar')}>
                      <button className="dropdown-item d-flex align-items-center">
                        <span className="fi fis fi-jo me-2"></span> {t('arabic')}
                      </button>
                    </li>
                    <li onClick={() => handleLanguageChange('en')}>
                      <button className="dropdown-item d-flex align-items-center">
                        <span className="fi fis fi-us me-2"></span> {t('english')}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;

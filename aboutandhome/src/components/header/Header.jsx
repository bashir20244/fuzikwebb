import React, { useState, useRef, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import TopHeader from './TopHeader';
import styles from './header.module.css';
import logAr from "../../assets/Untitled.png";
import logEn from "../../assets/Untitled2.png";
import 'flag-icons/css/flag-icons.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // تأكد من تضمين JavaScript الخاص بـ Bootstrap
import i18n from "../i18/i18n";

const nav__link = [
  { path: '/', display: 'Home' },
  { path: 'about', display: 'About' },
  { path: 'Services', display: 'Services' },
  { path: 'Projects', display: 'Projects' },
  { path: 'ourteam', display: 'OurTeam' },
  { path: 'contactus', display: 'ContactUs' },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);
  const navigate = useNavigate();
  const offcanvasRef = useRef();
  const [bsOffcanvas, setBsOffcanvas] = useState(null);

  useEffect(() => {
    if (offcanvasRef.current && window.bootstrap && window.bootstrap.Offcanvas) {
      setBsOffcanvas(new window.bootstrap.Offcanvas(offcanvasRef.current));
    }
  }, [offcanvasRef]);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  const offcanvasClass = language === 'ar' ? 'offcanvas-end' : 'offcanvas-start';

  const handleNavClick = (path) => {
    // إغلاق القائمة الجانبية (offcanvas) إذا كانت مفتوحة
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }
  
    // التنقل إلى المسار المطلوب
    navigate(path);
  };

  return (
    <header className='fixed-top bg-black'>
      <TopHeader language={language} handleLanguageChange={handleLanguageChange} />
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={language === 'en' ? logEn : logAr} alt="logo" className={styles.logo} />
          </Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${language === 'ar' ? 'flex-row-reverse' : ''}`} id="navbarSupportedContent">
            <ul className={`navbar-nav ${language === 'ar' ? 'me-auto' : 'ms-auto'} mb-1 mb-lg-0`}>
              {nav__link.map(({ path, display }) => (
                <li key={path} className='nav__item px-3 fw-bold'>
                  <NavLink
                    to={path}
                    onClick={() => handleNavClick(path)}  
                    className={(navClass) => `${navClass.isActive ? 'nav__active' : ''} ${styles.textStyle}`}
                  >
                    {t(display)}
                  </NavLink>
                </li>
              ))}
              <div className="d-flex align-items-center justify-content-center ms-3">
                <div className="dropdown">
                  <button className="d-flex align-items-center border-0 bg-black text-light" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className={`fi fis ${language === 'ar' ? 'fi-jo' : 'fi-us'} me-2 ${language === 'ar' ? 'ms-2' : ''}`}></span>
                    {language === 'ar' ? 'العربية' : 'English'}
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
            </ul>
          </div>
        </div>
      </nav>
      
      {/* الشاشة الصغيره  */}
      <div ref={offcanvasRef} className={`offcanvas ${offcanvasClass} bg-black`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className={`offcanvas-header ${language === 'ar' ? 'flex-row-reverse' : ''} mt-4 px-3 d-md-flex d-lg-none`}>
          <Link to="/" className="offcanvas-title text-light m-0">
            <img src={language === 'en' ? logEn : logAr} alt="logo" className={`${styles.logo} ${language === 'ar' ? 'ms-auto' : 'me-auto'}`} />
          </Link>
          <button type="button" className="btn-close bg-light" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body mt-2">
          <ul className="navbar-nav p-0">
            {nav__link.map(({ path, display }) => (
              <li key={path} className="nav__item py-3 border-bottom fw-bold">
                <NavLink
                  to={path}
                  onClick={() => handleNavClick(path)}
                  className={(navClass) => `${navClass.isActive ? 'nav__active' : ''} ${styles.textStyle} ${styles.underline}`}
                  data-bs-dismiss="offcanvas"
                >
                  {t(display)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </header>
  );
};

export default Header;

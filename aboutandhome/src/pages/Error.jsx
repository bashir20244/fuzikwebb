import React from 'react';
import { Link, useRouteError, useNavigate } from 'react-router-dom';
import styles from './main.module.css';
import erro from "../assets/error.png";

const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  let errorMessage;
  if (error.status === 404) {
    errorMessage = "Oops! Page not found";
  } else if (error.status === 400 && typeof error.data === "number") {
    errorMessage = "Oops! Page not found";
  } else {
    errorMessage = "Oops! Page not found";
  }

  return (
    <div className={styles.errorContainer}>
      <img src={erro} alt="error illustration" className={styles.errorImage} />
      <h1 className={styles.errorTitle}>404</h1>
      <p className={styles.errorMessage}>{errorMessage}</p>
      <Link to="/" className={styles.errorLink} replace={true}>Back to Homepage</Link>
    </div>
  );
};

export default Error;

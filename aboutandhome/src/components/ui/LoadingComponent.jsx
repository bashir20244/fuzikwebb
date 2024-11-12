import React, { useState, useEffect } from 'react';
import HashLoader from 'react-spinners/HashLoader';

const LoadingComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); 
    return () => clearTimeout(timer); 
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <HashLoader color="#36d7b7" loading={loading} size={60} />
    </div>
  );
};

export default LoadingComponent;

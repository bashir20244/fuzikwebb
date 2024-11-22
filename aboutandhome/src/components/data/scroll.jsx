import React, { useState, useEffect, useRef } from 'react';

const ScrollSection = () => {
  // State to manage visibility of the section
  const [isVisible, setIsVisible] = useState(false);

  // Ref to hold a reference to the section element
  const sectionRef = useRef(null);

  useEffect(() => {
    // Callback function that triggers when the section is in view
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        // Check if the element is in the viewport
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    };

    // Initialize IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,         // observing in the viewport
      rootMargin: '0px',  // margin around the root (viewport)
      threshold: 0.5,     // 50% of the element must be visible to trigger the callback
    });

    // Start observing the section element
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <h2>Scroll down to see the section</h2>
      <div style={{ height: '150vh' }} /> {/* Space to allow scrolling */}

      {/* The section to be revealed */}
      <section
        ref={sectionRef}
        style={{
          display: isVisible ? 'block' : 'none', // Only display when visible
          padding: '50px',
          backgroundColor: '#f0f0f0',
          transition: 'opacity 0.5s ease-in-out',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <h3>This section is revealed when you scroll into view!</h3>
        <p>More content...</p>
      </section>

      <div style={{ height: '150vh' }} /> {/* More space to continue scrolling */}
    </div>
  );
;}

export default ScrollSection;

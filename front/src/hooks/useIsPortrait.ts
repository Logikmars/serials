import { useState, useEffect } from 'react';

const isPortrait = (): boolean => {
  const [isPortrait, setisPortrait] = useState(window.innerWidth < 1000);

  useEffect(() => {
    const handleResize = () => {
      setisPortrait(window.innerWidth < 1000);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isPortrait;
};

export default isPortrait;
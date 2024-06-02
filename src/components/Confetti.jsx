import React, { useState, useEffect } from 'react';

import ReactConfetti from 'react-confetti';

const Confetti = () => {
  const [windowDemension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const detectSize = () => {
    setDimension({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, [windowDemension]);

  return (
    <div>
      <ReactConfetti
        width={windowDemension.width}
        height={windowDemension.height}
        tweenDuration={1000}
      />
    </div>
  );
};

export default Confetti;

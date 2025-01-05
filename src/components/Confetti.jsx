import React, { useEffect } from "react";
import confetti from "canvas-confetti";

const Confetti = () => {
  useEffect(() => {
    // Trigger a single burst of confetti
    confetti({
      particleCount: 100, // Number of confetti pieces for a full burst
      startVelocity: 30, // Speed of the confetti
      spread: 360, // Spread angle (360 for full circular spread)
      origin: { x: 0.5, y: 0.5 }, // Origin at the center of the screen
      colors: ["#f94144", "#f3722c", "#f9c74f", "#90be6d", "#577590"], // Elegant pastel colors
    });

    // Clean up function is not needed since the confetti is a one-time animation
  }, []);

  return null; // No visual elements are needed
};

export default Confetti;

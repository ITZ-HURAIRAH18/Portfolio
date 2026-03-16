/**
 * Confetti celebration effect using canvas-confetti library
 * Triggered on successful actions like form submission or button clicks
 * 
 * Installation: npm install canvas-confetti
 */

import confetti from 'canvas-confetti';

export const fireConfetti = (options = {}) => {
  try {
    console.log('🎉 Confetti triggered!', options);
    
    const defaults = {
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'],
      zIndex: 9999,
      decay: 0.95,
      scalar: 1.2,
      ticks: 200,
      shapes: ['star', 'circle', 'square'],
      gravity: 1,
      ...options,
    };

    // Center burst - primary
    confetti({
      ...defaults,
      origin: { x: 0.5, y: 0.5 },
      spread: 100,
    });

    // Left burst
    setTimeout(() => {
      confetti({
        ...defaults,
        origin: { x: 0.2, y: 0.6 },
        spread: 45,
        angle: 45,
        particleCount: Math.floor(defaults.particleCount * 0.5),
      });
    }, 50);

    // Right burst
    setTimeout(() => {
      confetti({
        ...defaults,
        origin: { x: 0.8, y: 0.6 },
        spread: 45,
        angle: 135,
        particleCount: Math.floor(defaults.particleCount * 0.5),
      });
    }, 100);

    console.log('✅ Confetti animation started');
  } catch (error) {
    console.error('❌ Canvas-confetti error:', error);
  }
};

/**
 * Premium confetti burst with more particles and physics
 */
export const firePremiumConfetti = () => {
  fireConfetti({
    particleCount: 200,
    spread: 90,
    decay: 0.92,
    scalar: 1.4,
    ticks: 250,
  });
};

/**
 * Subtle confetti for light celebrations
 */
export const fireSubtleConfetti = () => {
  fireConfetti({
    particleCount: 80,
    spread: 60,
    scalar: 0.8,
  });
};

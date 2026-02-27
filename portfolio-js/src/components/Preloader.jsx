import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Remove the static loader from index.html if it exists
    const initialLoader = document.getElementById('initial-loader');
    if (initialLoader) {
      initialLoader.style.opacity = '0';
      setTimeout(() => initialLoader.remove(), 500);
    }

    const handleLoad = () => {
      // Give a minimum duration for the preloader to feel intentional
      const timeout = setTimeout(() => {
        setIsExiting(true);
        // Allow time for the fade-out animation
        setTimeout(() => setLoading(false), 800);
      }, 2000);
      return () => clearTimeout(timeout);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#030014] transition-all duration-1000 ease-in-out ${isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}`}>
      {/* Background Aesthetic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px] animate-pulse delay-700"></div>

      <div className="relative flex flex-col items-center">
        {/* Modern Glassmorphism Spinner Container */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Pulsing Outer Ring */}
          <div className="absolute inset-0 border border-purple-500/20 rounded-full animate-[ping_3s_linear_infinite]"></div>

          {/* Spinning Gradient Ring */}
          <div className="absolute inset-2 border-[3px] border-transparent border-t-purple-500 border-r-blue-500 rounded-full animate-spin"></div>

          {/* Counter-Spinning Inner Ring */}
          <div className="absolute inset-6 border-[2px] border-transparent border-b-purple-400 border-l-blue-400 rounded-full animate-[spin_2s_linear_infinite_reverse]"></div>

          {/* Core Glow */}
          <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8),0_0_40px_rgba(59,130,246,0.6)]"></div>
        </div>

        {/* Loading Typography */}
        <div className="mt-12 flex flex-col items-center gap-3">
          <h2 className="text-2xl font-bold tracking-[0.3em] uppercase">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-[length:200%_auto] animate-gradient-x">
              Loading
            </span>
          </h2>

          {/* Sophisticated Progress Bar */}
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden rounded-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-loading-bar"></div>
          </div>

          <p className="text-white/40 text-[10px] tracking-[0.5em] uppercase mt-2 font-light">
            Initializing Experience
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

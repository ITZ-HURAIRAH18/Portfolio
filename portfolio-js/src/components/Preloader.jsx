import React, { useEffect, useState } from 'react';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Sync progress for a more "active" feeling
    const interval = setInterval(() => {
      setProgress(prev => (prev >= 100 ? 100 : prev + 1));
    }, 30);

    // Remove the static loader from index.html if it exists
    const initialLoader = document.getElementById('initial-loader');
    if (initialLoader) {
      initialLoader.style.opacity = '0';
      setTimeout(() => initialLoader.remove(), 800);
    }

    const handleLoad = () => {
      // Give a minimum duration for the preloader to feel intentional
      const timeout = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            setLoading(false);
            document.body.style.overflow = 'unset';
          }, 800);
        }, 400);
      }, 2500);
      return () => clearTimeout(timeout);
    };

    document.body.style.overflow = 'hidden';

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => {
        window.removeEventListener('load', handleLoad);
        clearInterval(interval);
        document.body.style.overflow = 'unset';
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] transition-all duration-1000 ease-in-out ${isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}`}>
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)] pointer-events-none z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_2px,3px_100%] pointer-events-none z-10 opacity-20"></div>

      {/* Dynamic Background Particles (CSS only) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-20 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Background Aesthetic Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan-600/8 rounded-full blur-[80px] animate-pulse delay-700"></div>

      <div className="relative flex flex-col items-center">
        {/* Modern Glassmorphism Spinner Container */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Ring 1 - Outer Pulsing */}
          <div className="absolute inset-0 border border-blue-500/20 rounded-full animate-[ping_3s_linear_infinite]"></div>

          {/* Ring 2 - Rotating Gradient */}
          <svg className="absolute inset-0 w-full h-full rotate-[-90deg]">
            <circle
              cx="80" cy="80" r="75"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeDasharray="471"
              strokeDashoffset={471 - (471 * progress) / 100}
              strokeLinecap="round"
              className="transition-all duration-300 ease-out"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#06b6d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Ring 3 - Counter-Spinning dashed */}
          <div className="absolute inset-8 border-2 border-dashed border-white/10 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>

          {/* Ring 4 - Glowing Core */}
          <div className="relative w-16 h-16 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-cyan-500 rounded-full blur-md opacity-50 animate-pulse"></div>
            <div className="relative w-12 h-12 bg-[#050505] rounded-full flex items-center justify-center border border-white/10 backdrop-blur-sm">
              <span className="text-sm font-bold text-white tracking-tighter">
                {progress}%
              </span>
            </div>
          </div>
        </div>

        {/* Loading Typography */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-black tracking-[0.4em] uppercase">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-cyan-400 bg-[length:200%_auto] animate-gradient-x">
                Portfoilo
              </span>
            </h2>
            <div className="h-0.5 w-12 bg-gradient-to-r from-blue-500 to-cyan-500 mt-1 rounded-full animate-bounce"></div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="text-white/60 text-[10px] tracking-[0.6em] uppercase font-medium">
              Synthesizing Digital Identity
            </p>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-blue-500 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;

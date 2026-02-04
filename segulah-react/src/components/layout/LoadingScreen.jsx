import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Faster at start, slower near end
        const increment = prev < 70 ? 8 : prev < 90 ? 4 : 2;
        return Math.min(prev + increment, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      // Start fade out animation
      setTimeout(() => setFadeOut(true), 300);
      // Complete loading after fade animation
      setTimeout(() => onLoadingComplete(), 800);
    }
  }, [progress, onLoadingComplete]);

  return (
    <div 
      className={`fixed inset-0 z-100 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full bg-mlm-green-100/30 blur-3xl animate-pulse"></div>
      </div>

      {/* Logo Container */}
      <div className="relative z-10 flex flex-col items-center">
       

        {/* Progress Bar */}
        <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-linear-to-r from-mlm-green-400 to-mlm-green-600 rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="mt-4 text-sm text-slate-500 font-medium">
          {progress < 100 ? 'Loading...' : 'Ready!'}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 flex items-center gap-2 text-xs text-slate-400">
        <div className="w-2 h-2 rounded-full bg-mlm-green-500 animate-pulse"></div>
        <span>Building your success platform</span>
      </div>
    </div>
  );
};

export default LoadingScreen;

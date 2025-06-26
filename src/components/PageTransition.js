import React from 'react';

const PageTransition = ({ isActive, direction }) => {
  return (
    <>
      {/* CSS for spiral animation */}
      <style jsx>{`
        .spiral-enter {
          clip-path: circle(0% at 50% 50%);
        }
        .spiral-active {
          clip-path: circle(150% at 50% 50%);
        }
        .spiral-exit {
          clip-path: circle(0% at 50% 50%);
        }
        
        @keyframes spiralRotate {
          0% {
            transform: rotate(0deg) scale(0);
            opacity: 0;
          }
          50% {
            transform: rotate(180deg) scale(1.2);
            opacity: 1;
          }
          100% {
            transform: rotate(360deg) scale(1);
            opacity: 1;
          }
        }
        
        .spiral-content {
          animation: spiralRotate 1.2s ease-in-out;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .floating {
          animation: float 2s ease-in-out infinite;
        }
      `}</style>

      <div 
        className={`fixed inset-0 z-[100] transition-all duration-1000 ease-in-out ${
          isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Spiral Background */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-orange-900 transition-all duration-1000 ease-in-out ${
            isActive ? 'spiral-active' : 'spiral-enter'
          }`}
        >
          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-70 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${1 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Center Content */}
          <div className="flex items-center justify-center h-full spiral-content">
            <div className="text-center">
              {/* Icon */}
              <div className="text-8xl md:text-9xl mb-6 floating">
                {direction === 'creative' ? (
                  <div className="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent font-bold">
                    🎨
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-bold">
                    💼
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="text-3xl md:text-4xl font-bold text-white mb-4">
                {direction === 'creative' ? "Let's Get Weird!" : "Back to Business"}
              </div>
              
              <div className="text-lg text-white/80">
                {direction === 'creative' ? "Entering Creative Mode..." : "Entering Professional Mode..."}
              </div>

              {/* Loading bar */}
              <div className="mt-8 w-64 mx-auto">
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse transform transition-all duration-1000 w-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-10 left-10 text-6xl text-white/30 animate-spin">
            ✨
          </div>
          <div className="absolute top-10 right-10 text-6xl text-white/30 animate-spin" style={{animationDirection: 'reverse'}}>
            🌟
          </div>
          <div className="absolute bottom-10 left-10 text-6xl text-white/30 animate-bounce">
            🎭
          </div>
          <div className="absolute bottom-10 right-10 text-6xl text-white/30 animate-bounce" style={{animationDelay: '0.5s'}}>
            🚀
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTransition;
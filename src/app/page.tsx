"use client";

import Image from "next/image";
import { useEffect, useState } from "react";


export default function Home() {
  const [showCommunityModal, setShowCommunityModal] = useState(false);

  // Cleanup effect to restore body overflow when component unmounts
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Add keyboard event listener for Escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        const panel = document.getElementById('mm-panel');
        const overlay = document.getElementById('mm-overlay');
        
        if (panel && overlay) {
          panel.classList.add('translate-x-full');
          panel.classList.remove('translate-x-0');
          overlay.classList.add('hidden');
          document.body.style.overflow = 'auto';
        }
      }
    };

    // Back to top button functionality and section tracking
    const handleScroll = () => {
      const backToTopButton = document.getElementById('back-to-top');
      if (backToTopButton) {
        if (window.scrollY > 300) {
          backToTopButton.style.opacity = '1';
          backToTopButton.style.pointerEvents = 'auto';
        } else {
          backToTopButton.style.opacity = '0';
          backToTopButton.style.pointerEvents = 'none';
        }
      }

      // Update scroll progress bar
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
      }
    };

    // Smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (href) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleAnchorClick);

    // Timed community modal (5s) - always show on refresh
    const timer = setTimeout(() => setShowCommunityModal(true), 5000);

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      
    <div className="min-h-screen bg-white">
      {/* Custom Animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Mercy+Christole:wght@400&display=swap');
        
        html {
          scroll-behavior: smooth;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-random {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(10px, -10px) rotate(120deg);
          }
          66% {
            transform: translate(-5px, 5px) rotate(240deg);
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 165, 0, 0.5);
          }
          50% {
            box-shadow: 0 0 30px rgba(255, 165, 0, 0.8);
          }
        }

        @keyframes scroll-indicator {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-down {
          animation: slide-down 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float-random {
          animation: float-random linear infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(255, 165, 0, 0.6);
        }

        /* Enhanced navbar styling */
        .navbar-glass {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          background: rgba(0, 0, 0, 0.95);
          transition: all 0.3s ease;
        }

        .navbar-glass:hover {
          background: rgba(0, 0, 0, 1);
        }

        /* Ensure background image covers properly */
        .hero-bg {
          background-attachment: fixed;
          background-size: cover !important;
          background-position: center center !important;
          background-repeat: no-repeat !important;
          min-height: 100vh;
        }

        /* Additional animations for enhanced sections */
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        /* Hover lift effect */
        .hover-lift:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
        
        /* Apply Mercy Christole font to sections */
        section {
          font-family: 'Mercy Christole', serif;
        }
        
        /* Apply to specific section headings for better control */
        section h1, section h2, section h3, section h4, section h5, section h6 {
          font-family: 'Mercy Christole', serif;
        }
        
        /* Simple Mobile Menu - Reset */
        #mm-overlay { display: none; }
        #mm-overlay.open { display: block; }
        #mm-panel {
          transform: translateX(100%);
          transition: transform 0.3s ease-in-out;
          right: 0;
          top: 0;
          bottom: 0;
          width: 100vw;
          max-width: 420px;
        }
        #mm-overlay.open #mm-panel {
          transform: translateX(0);
        }
        #mm-panel.show { transform: translateX(0); }
        
        /* Mobile Menu Item Hover Effects */
        #mobile-menu a:hover {
          transform: translateX(8px);
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }
        
        /* Mobile menu item styling */
        #mobile-menu a {
          padding: 16px 20px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        /* Hamburger button active state */
        #hamburger-btn.active .hamburger-line-1 {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        #hamburger-btn.active .hamburger-line-2 {
          opacity: 0;
        }
        
        #hamburger-btn.active .hamburger-line-3 {
          transform: rotate(-45deg) translate(7px, -6px);
        }
        

        

      `}</style>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-[10000]">
        <div 
          id="scroll-progress"
          className="h-full bg-gradient-to-r from-primary-orange to-yellow-400 transition-all duration-300"
          style={{ width: '0%' }}
        ></div>
      </div>

      {/* Header/Navigation */}
      <header className="fixed top-1 left-0 right-0 z-[9999] navbar-glass border-b border-white/20 text-white py-4 px-6 lg:px-8 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* DHiDiB Logo */}
          <div className="flex items-center logo-animate">
            {/* Logo Text */}
            <span className="text-3xl font-bold text-white">
              DHiDiB
            </span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-primary-orange transition-colors">About Us</a>
            <a href="#get-involved" className="hover:text-primary-orange transition-colors">Get Involved</a>
            <a href="#programs" className="hover:text-primary-orange transition-colors">Programs</a>
            
            <a href="#events" className="hover:text-primary-orange transition-colors">Events</a>
            
            <a href="#blog" className="hover:text-primary-orange transition-colors">Blog</a>
            <a href="#contact" className="hover:text-primary-orange transition-colors">Contact</a>
          </nav>
          
          {/* Donate Button */}
          <a href="#get-involved">
            <button className="hidden md:block bg-primary-orange text-white font-bold py-2 px-6 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 pulse-glow">
              Donate Now
            </button>
          </a>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden">
            <button 
              id="hamburger-btn"
              className="text-white hover:text-primary-orange transition-colors p-2 cursor-pointer"
              onClick={() => {
                const overlay = document.getElementById('mm-overlay');
                const panel = document.getElementById('mm-panel');
                if (!overlay || !panel) return;
                
                // Remove hidden class and make overlay visible
                overlay.classList.remove('hidden');
                overlay.style.display = 'block';
                overlay.style.visibility = 'visible';
                overlay.style.opacity = '1';
                
                // Slide panel in using inline styles for guaranteed visibility
                panel.style.transform = 'translateX(0)';
                panel.style.transition = 'transform 0.3s ease-in-out';
                
                document.body.style.overflow = 'hidden';
              }}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className="w-5 h-0.5 bg-current"></span>
                <span className="w-5 h-0.5 bg-current mt-1"></span>
                <span className="w-5 h-0.5 bg-current mt-1"></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          id="mm-overlay" 
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] hidden"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              const panel = document.getElementById('mm-panel');
              const overlay = document.getElementById('mm-overlay');
              if (panel && overlay) {
                panel.classList.add('translate-x-full');
                panel.classList.remove('translate-x-0');
                overlay.classList.add('hidden');
                overlay.style.display = 'none';
                overlay.style.visibility = 'hidden';
                overlay.style.opacity = '0';
                document.body.style.overflow = 'auto';
              }
            }
          }}
        >
          <div id="mm-panel" className="fixed right-0 top-0 bottom-0 w-[85%] max-w-[420px] flex flex-col bg-gray-900 text-white shadow-2xl overflow-y-auto z-[10001]" style={{transform: 'translateX(100%)', transition: 'transform 0.3s ease-in-out'}}>
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-6 border-b border-white/40 bg-black">
              <span className="text-2xl font-bold text-white drop-shadow-lg">DHiDiB</span>
              <button 
                onClick={() => {
                  const panel = document.getElementById('mm-panel');
                  const overlay = document.getElementById('mm-overlay');
                  if (panel && overlay) {
                    panel.style.transform = 'translateX(100%)';
                    overlay.classList.add('hidden');
                    overlay.style.display = 'none';
                    overlay.style.visibility = 'hidden';
                    overlay.style.opacity = '0';
                    document.body.style.overflow = 'auto';
                  }
                }}
                className="text-white hover:text-primary-orange transition-colors p-2 bg-white/10 rounded-full hover:bg-white/20"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="flex-1 p-4 bg-black overflow-y-auto">
              <div className="space-y-3">
                <a 
                  href="#home" 
                  className="block text-lg font-bold text-white hover:text-primary-orange transition-all duration-300 transform hover:translate-x-2 bg-black border border-white/30 hover:border-primary-orange/50 rounded-xl p-3 hover:bg-gray-900 drop-shadow-lg"
                  onClick={() => {
                    const panel = document.getElementById('mm-panel');
                    const overlay = document.getElementById('mm-overlay');
                    if (panel && overlay) {
                      panel.style.transform = 'translateX(100%)';
                      overlay.classList.add('hidden');
                      overlay.style.display = 'none';
                      overlay.style.visibility = 'hidden';
                      overlay.style.opacity = '0';
                      document.body.style.overflow = 'auto';
                    }
                  }}
                >
                  🏠 Home
                </a>
                <a 
                  href="#about" 
                  className="block text-xl font-bold text-white hover:text-primary-orange transition-all duration-300 transform hover:translate-x-2 bg-black border border-white/30 hover:border-primary-orange/50 rounded-xl p-3 hover:bg-gray-900 drop-shadow-lg"
                  onClick={() => {
                    const panel = document.getElementById('mm-panel');
                    const overlay = document.getElementById('mm-overlay');
                    if (panel && overlay) {
                      panel.style.transform = 'translateX(100%)';
                      overlay.classList.add('hidden');
                      overlay.style.display = 'none';
                      overlay.style.visibility = 'hidden';
                      overlay.style.opacity = '0';
                      document.body.style.overflow = 'auto';
                    }
                  }}
                >
                  🎯 About Us
                </a>
                <a 
                  href="#get-involved" 
                  className="block text-xl font-bold text-white hover:text-primary-orange transition-all duration-300 transform hover:translate-x-2 bg-black border border-white/30 hover:border-primary-orange/50 rounded-xl p-3 hover:bg-gray-900 drop-shadow-lg"
                  onClick={() => {
                    const panel = document.getElementById('mm-panel');
                    const overlay = document.getElementById('mm-overlay');
                    if (panel && overlay) {
                      panel.style.transform = 'translateX(100%)';
                      overlay.classList.add('hidden');
                      overlay.style.display = 'none';
                      overlay.style.visibility = 'hidden';
                      overlay.style.opacity = '0';
                      document.body.style.overflow = 'auto';
                    }
                  }}
                >
                  🤝 Get Involved
                </a>
                <a 
                  href="#programs" 
                  className="block text-xl font-bold text-white hover:text-primary-orange transition-all duration-300 transform hover:translate-x-2 bg-black border border-white/30 hover:border-primary-orange/50 rounded-xl p-3 hover:bg-gray-900 drop-shadow-lg"
                  onClick={() => {
                    const panel = document.getElementById('mm-panel');
                    const overlay = document.getElementById('mm-overlay');
                    if (panel && overlay) {
                      panel.style.transform = 'translateX(100%)';
                      overlay.classList.add('hidden');
                      overlay.style.display = 'none';
                      overlay.style.visibility = 'hidden';
                      overlay.style.opacity = '0';
                      document.body.style.overflow = 'auto';
                    }
                  }}
                >
                  🚀 Programs
                </a>
                <a 
                  href="#events" 
                  className="block text-xl font-bold text-white hover:text-primary-orange transition-all duration-300 transform hover:translate-x-2 bg-black border border-white/30 hover:border-primary-orange/50 rounded-xl p-3 hover:bg-gray-900 drop-shadow-lg"
                  onClick={() => {
                    const panel = document.getElementById('mm-panel');
                    const overlay = document.getElementById('mm-overlay');
                    if (panel && overlay) {
                      panel.style.transform = 'translateX(100%)';
                      overlay.classList.add('hidden');
                      overlay.style.display = 'none';
                      overlay.style.visibility = 'hidden';
                      overlay.style.opacity = '0';
                      document.body.style.overflow = 'auto';
                    }
                  }}
                >
                  📅 Events
                </a>
                <a 
                  href="#blog" 
                  className="block text-xl font-bold text-white hover:text-primary-orange transition-all duration-300 transform hover:translate-x-2 bg-black border border-white/30 hover:border-primary-orange/50 rounded-xl p-3 hover:bg-gray-900 drop-shadow-lg"
                  onClick={() => {
                    const panel = document.getElementById('mm-panel');
                    const overlay = document.getElementById('mm-overlay');
                    if (panel && overlay) {
                      panel.classList.add('translate-x-full');
                      panel.classList.remove('translate-x-0');
                      overlay.classList.add('hidden');
                      overlay.style.display = 'none';
                      overlay.style.visibility = 'hidden';
                      overlay.style.opacity = '0';
                      document.body.style.overflow = 'auto';
                    }
                  }}
                >
                  📝 Blog
                </a>
                <a 
                  href="#contact" 
                  className="block text-xl font-bold text-white hover:text-primary-orange transition-all duration-300 transform hover:translate-x-2 bg-black border border-white/30 hover:border-primary-orange/50 rounded-xl p-3 hover:bg-gray-900 drop-shadow-lg"
                  onClick={() => {
                    const panel = document.getElementById('mm-panel');
                    const overlay = document.getElementById('mm-overlay');
                    if (panel && overlay) {
                      panel.style.transform = 'translateX(100%)';
                      overlay.classList.add('hidden');
                      overlay.style.display = 'none';
                      overlay.style.visibility = 'hidden';
                      overlay.style.opacity = '0';
                      document.body.style.overflow = 'auto';
                    }
                  }}
                >
                  📞 Contact
                </a>
                <div className="flex justify-center">
              <a href="#get-involved">
                <button 
                      className="bg-primary-orange text-white font-semibold text-sm py-2 px-4 rounded-full hover:bg-orange-600 transition-all duration-300"
                  onClick={() => {
                    const panel = document.getElementById('mm-panel');
                    const overlay = document.getElementById('mm-overlay');
                    if (panel && overlay) {
                      panel.style.transform = 'translateX(100%)';
                      overlay.classList.add('hidden');
                      overlay.style.display = 'none';
                      overlay.style.visibility = 'hidden';
                      overlay.style.opacity = '0';
                      document.body.style.overflow = 'auto';
                    }
                  }}
                >
                  🎁 Donate Now
                </button>
              </a>
            </div>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20 mb-0">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 hero-bg w-full h-full"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2132&q=80')"
            }}
          ></div>
          {/* Black Blurry Overlay */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
          
          {/* Animated Particles */}
          <div className="absolute inset-0">
            {[
              { left: "10%", top: "20%", delay: "0s", duration: "4s" },
              { left: "20%", top: "60%", delay: "0.5s", duration: "5s" },
              { left: "30%", top: "40%", delay: "1s", duration: "6s" },
              { left: "40%", top: "80%", delay: "1.5s", duration: "4.5s" },
              { left: "50%", top: "30%", delay: "2s", duration: "5.5s" },
              { left: "60%", top: "70%", delay: "0.8s", duration: "6.5s" },
              { left: "70%", top: "50%", delay: "1.2s", duration: "4.2s" },
              { left: "80%", top: "25%", delay: "1.8s", duration: "5.8s" },
              { left: "90%", top: "75%", delay: "0.3s", duration: "6.2s" },
              { left: "15%", top: "85%", delay: "2.2s", duration: "4.8s" },
              { left: "25%", top: "15%", delay: "0.7s", duration: "5.3s" },
              { left: "35%", top: "65%", delay: "1.6s", duration: "6.1s" },
              { left: "45%", top: "35%", delay: "2.1s", duration: "4.7s" },
              { left: "55%", top: "90%", delay: "0.9s", duration: "5.9s" },
              { left: "65%", top: "10%", delay: "1.4s", duration: "6.3s" }
            ].map((particle, i) => (
              <div
                key={i}
                className="absolute animate-float-random opacity-20"
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: particle.duration
                }}
              >
                <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            {/* Main Heading */}
            <div className="animate-fade-in-up">
              <h1 className="font-extrabold tracking-tight mb-4 leading-[1.05] text-5xl sm:text-6xl lg:text-7xl">
                <span className="block text-white">EMPOWERING</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-yellow-400">YOUTH</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Master in-demand skills through DHIDiB’s programs, mentors, and real projects.
              </p>
            </div>
            
            {/* Action Buttons - Compact */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-fade-in-up" style={{animationDelay: '1.2s'}}>
              <a href="#get-involved">
              <button 
                  className="group bg-primary-orange text-white font-semibold py-2 px-5 rounded-full text-sm sm:text-base hover:bg-orange-600 transition-all duration-300 shadow-xl relative overflow-hidden"
              >
                <span className="relative z-10">DONATE NOW</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
              </button>
              </a>
              
              <a href="#about">
              <button className="group bg-transparent border-2 border-white text-white font-semibold py-2 px-5 rounded-full text-sm sm:text-base hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl backdrop-blur-sm">
                <span className="relative z-10">LEARN MORE</span>
              </button>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-white/70 rounded-full mt-1 animate-scroll-indicator"></div>
          </div>
          <p className="text-white/70 text-xs mt-1">Scroll</p>
        </div>
        

      </section>



      {/* Enhanced Feature Boxes */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm relative overflow-hidden z-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-orange rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-orange to-yellow-400 rounded-full mb-6">
              <span className="text-2xl">⭐</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How You Can <span className="text-primary-orange">Make Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your way to support youth empowerment and create lasting change in communities worldwide
            </p>
            <div className="mt-4 text-sm text-gray-500">
              <span>📍 Location: Hargeisa, Somalia</span> • <span>🎯 Focus: Youth Empowerment</span> • <span>🌍 Impact: Global</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: "🚀", 
                title: "Empower Youth", 
                desc: "Support skill-building and personal growth initiatives.",
                gradient: "from-orange-400 to-red-500",
                hoverGradient: "from-orange-500 to-red-600",
                iconBg: "bg-orange-100",
                delay: "0s"
              },
              { 
                icon: "📚", 
                title: "Build Knowledge", 
                desc: "Access forums, trainings, and resources that matter.",
                gradient: "from-blue-400 to-purple-500",
                hoverGradient: "from-blue-500 to-purple-600",
                iconBg: "bg-blue-100",
                delay: "0.2s"
              },
              { 
                icon: "🌐", 
                title: "Create Opportunities", 
                desc: "Connect young people with networks and real-world experience.",
                gradient: "from-green-400 to-blue-500",
                hoverGradient: "from-green-500 to-blue-600",
                iconBg: "bg-green-100",
                delay: "0.4s"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 animate-fade-in-up border border-gray-100 overflow-hidden"
                style={{animationDelay: feature.delay}}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`w-20 h-20 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300 group-hover:bg-white/20`}>
                    <span className="text-4xl animate-bounce-slow">{feature.icon}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
                    {feature.desc}
                  </p>
                  

                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <a href="#get-involved">
            <button className="group bg-primary-orange hover:bg-orange-600 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 relative overflow-hidden">
              <span className="relative z-10">Start Making Impact Today</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden z-10">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-orange rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              About <span className="text-primary-orange">DHiDiB</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Empowering youth through innovative programs and community engagement.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Left: Story & Mission */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-primary-orange mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To empower young people with skills, knowledge, and opportunities to become leaders and change-makers.
                </p>
                
                {/* Vision Statement */}
                <div className="bg-primary-orange/20 rounded-2xl p-4 border border-primary-orange/30">
                  <h4 className="text-lg font-semibold text-primary-orange mb-2">Our Vision</h4>
                  <p className="text-white text-sm">
                    A world where every youth has equal opportunities to thrive and lead.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Core Values */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "💡", title: "Innovation", desc: "Creative solutions for modern challenges" },
                  { icon: "🤝", title: "Community", desc: "Building strong support networks" },
                  { icon: "🌱", title: "Growth", desc: "Continuous learning and development" },
                  { icon: "🎯", title: "Impact", desc: "Measurable positive change" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center transform hover:scale-105 transition-all duration-300 border border-white/20 hover:border-primary-orange/50"
                  >
                    <div className="text-3xl mb-2 animate-bounce-slow">{item.icon}</div>
                    <h5 className="text-base font-semibold text-primary-orange mb-1">{item.title}</h5>
                    <p className="text-gray-300 text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Impact Numbers */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
            {[
              { number: "29+", label: "Youth Empowered", icon: "👥" },
              { number: "6+", label: "Programs Launched", icon: "🚀" },
              { number: "2+", label: "Communities Reached", icon: "🌍" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center bg-gradient-to-br from-primary-orange/20 to-yellow-400/20 rounded-2xl p-4 border border-primary-orange/30 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-primary-orange mb-1">{stat.number}</div>
                <div className="text-gray-300 font-medium text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <a href="#get-involved">
            <button className="group bg-primary-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25 relative overflow-hidden">
              <span className="relative z-10">Join Our Mission</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-8 px-4 sm:px-6 lg:px-8 bg-primary-orange/10 backdrop-blur-sm relative overflow-hidden z-10">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-orange rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-6 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Get <span className="text-primary-orange">Involved</span>
            </h2>
            <p className="text-base text-gray-700 max-w-xl mx-auto">
              Join our mission to empower youth and create lasting change
            </p>
          </div>

          {/* Main Cards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            {/* Volunteer Card */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary-orange/20 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Volunteer Now</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Share your skills and time to make a direct impact
                  </p>
                </div>

                {/* Volunteer Form */}
                <form action="https://getform.io/f/bqoemxxb" method="POST" className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      name="name" 
                      placeholder="Full Name" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                      required 
                    />
                    <input 
                      type="email" 
                      name="email" 
                      placeholder="Email Address" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="tel" 
                      name="phone" 
                      placeholder="Phone Number" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                    />
                    <select 
                      name="volunteer-area" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                      required
                    >
                      <option value="">Select Volunteer Area</option>
                      <option value="mentorship">📚 Mentorship</option>
                      <option value="skill-training">🎨 Skill Training</option>
                      <option value="community-outreach">🌱 Community Outreach</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <select 
                      name="experience-level" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                      required
                    >
                      <option value="">Experience Level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                    <select 
                      name="availability" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                      required
                    >
                      <option value="">Availability</option>
                      <option value="weekdays">Weekdays</option>
                      <option value="weekends">Weekends</option>
                      <option value="evenings">Evenings</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  
                  <textarea 
                    name="message" 
                    rows={3}
                    placeholder="Why do you want to volunteer? Tell us about your motivation and what you hope to contribute..."
                    className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80 resize-none"
                    required
                  ></textarea>
                  
                  {/* Hidden Honeypot input to prevent spam */}
                  <input type="hidden" name="_gotcha" style={{display: 'none'}} />
                  
                  {/* Checkbox for newsletter subscription */}
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      name="subscribe" 
                      value="yes" 
                      id="subscribe-newsletter"
                      className="w-4 h-4 text-primary-orange border-primary-orange/30 rounded focus:ring-primary-orange"
                      defaultChecked
                    />
                    <label htmlFor="subscribe-newsletter" className="text-sm text-gray-700">
                      Subscribe to our newsletter for updates and opportunities
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary-orange text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Submit Volunteer Application
                  </button>
                </form>

              </div>
            </div>

            {/* Donate Card */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-primary-orange/20 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-primary-orange/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-2xl">💝</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Donate Now</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Your support directly funds programs that transform lives
                  </p>
                </div>

                {/* Donor Information Form */}
                <form action="https://getform.io/f/bqoemxxb" method="POST" className="space-y-3">
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="text" 
                      name="donor-name" 
                      placeholder="Full Name" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                      required 
                    />
                    <input 
                      type="email" 
                      name="donor-email" 
                      placeholder="Email Address" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                      required 
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <input 
                      type="tel" 
                      name="donor-phone" 
                      placeholder="Phone Number" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                    />
                    <select 
                      name="donor-type" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                      required
                    >
                      <option value="">Select Donor Type</option>
                      <option value="individual">Individual Donor</option>
                      <option value="corporate">Corporate Sponsor</option>
                      <option value="foundation">Foundation</option>
                      <option value="anonymous">Anonymous Donor</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <select 
                      name="donation-frequency" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                    >
                      <option value="">Donation Frequency</option>
                      <option value="one-time">One-time Donation</option>
                      <option value="monthly">Monthly Recurring</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="annually">Annually</option>
                    </select>
                    <select 
                      name="preferred-contact" 
                      className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80"
                    >
                      <option value="">Preferred Contact</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="mail">Postal Mail</option>
                    </select>
                  </div>
                  
                  <textarea 
                    name="donor-message" 
                    rows={3}
                    placeholder="Tell us about your interest in supporting our mission. What programs or areas would you like to know more about?"
                    className="w-full px-3 py-2 rounded-lg border border-primary-orange/30 focus:ring-2 focus:ring-primary-orange focus:border-primary-orange text-sm text-gray-900 bg-white/80 resize-none"
                  ></textarea>
                  
                  {/* Hidden Honeypot input to prevent spam */}
                  <input type="hidden" name="_gotcha" style={{display: 'none'}} />
                  
                  {/* Checkbox for newsletter subscription */}
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      name="donor-subscribe" 
                      value="yes" 
                      id="donor-subscribe-newsletter"
                      className="w-4 h-4 text-primary-orange border-primary-orange/30 rounded focus:ring-primary-orange"
                      defaultChecked
                    />
                    <label htmlFor="donor-subscribe-newsletter" className="text-sm text-gray-700">
                      Subscribe to our newsletter for impact updates and opportunities
                    </label>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="w-full bg-primary-orange text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Submit Donor Information
                  </button>
                </form>

              </div>
            </div>
          </div>

          {/* Call to Action - Compact */}
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="bg-primary-orange/10 backdrop-blur-sm rounded-xl p-4 border border-primary-orange/20">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Ready to Make a Difference?</h3>
              <p className="text-gray-700 mb-3 max-w-lg mx-auto text-sm">
                Every action counts towards building a brighter future for young people
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-yellow-400">Programs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Youth empowerment initiatives that build skills and create impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: "Knowledge Sessions", 
                desc: "Interactive workshops and learning opportunities", 
                icon: "📚", 
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
                delay: "0s",
                contents: ["Workshops", "Seminars", "Training"]
              },
              { 
                title: "Skill Exchanges", 
                desc: "Peer-to-peer learning and skill sharing", 
                icon: "🤝", 
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                delay: "0.1s",
                contents: ["Mentoring", "Peer Learning", "Skill Sharing"]
              },
              { 
                title: "Networking Nights", 
                desc: "Connect with young professionals", 
                icon: "🌐", 
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
                delay: "0.2s",
                contents: ["Networking", "Career Guidance", "Connections"]
              },
              { 
                title: "Foundation Forums", 
                desc: "Platform for discussing solutions", 
                icon: "💬", 
                color: "from-red-500 to-red-600",
                bgColor: "bg-red-50",
                borderColor: "border-red-200",
                delay: "0.3s",
                contents: ["Discussions", "Problem Solving", "Solutions"]
              },
              { 
                title: "Online Trainings", 
                desc: "Digital learning resources", 
                icon: "💻", 
                color: "from-indigo-500 to-indigo-600",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-200",
                delay: "0.4s",
                contents: ["E-Learning", "Digital Courses", "Online Resources"]
              },
              { 
                title: "Youth Leadership", 
                desc: "Developing future community leaders", 
                icon: "👑", 
                color: "from-yellow-500 to-orange-500",
                bgColor: "bg-orange-50",
                borderColor: "border-orange-200",
                delay: "0.5s",
                contents: ["Leadership", "Community Projects", "Mentorship"]
              }
            ].map((program, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border border-gray-100 overflow-hidden"
                style={{animationDelay: program.delay}}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Icon Container */}
                  <div className={`w-16 h-16 ${program.bgColor} group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-all duration-300 border ${program.borderColor} group-hover:border-white/30`}>
                    <span className="text-2xl group-hover:text-white transition-colors duration-300">{program.icon}</span>
                </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300 text-center">
                    {program.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-white/90 transition-colors duration-300 text-center">
                    {program.desc}
                  </p>
                  
                  {/* Program Contents */}
                  <div className="flex flex-wrap gap-1 mb-4 justify-center">
                    {program.contents.map((content, contentIndex) => (
                      <span 
                        key={contentIndex} 
                        className="px-2 py-1 bg-gray-100 group-hover:bg-white/20 text-gray-600 group-hover:text-white text-xs rounded-md transition-all duration-300"
                      >
                        {content}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-orange to-yellow-400 rounded-full mb-6">
              <span className="text-2xl">📅</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-yellow-400">Events</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for inspiring workshops, networking opportunities, and community-building events
            </p>
            </div>
          
          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { 
                title: "Youth Leadership Summit", 
                date: "Dec 15, 2024",
                time: "10:00 AM - 4:00 PM",
                location: "Community Center",
                desc: "A day of leadership development, networking, and skill-building workshops",
                category: "Leadership",
                icon: "👑",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
                status: "upcoming",
                delay: "0s"
              },
              { 
                title: "Digital Skills Workshop", 
                date: "Dec 20, 2024",
                time: "2:00 PM - 6:00 PM",
                location: "Tech Hub",
                desc: "Learn essential digital skills for the modern workplace",
                category: "Training",
                icon: "💻",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
                status: "upcoming",
                delay: "0.2s"
              },
              { 
                title: "Community Networking Night", 
                date: "Dec 25, 2024",
                time: "7:00 PM - 9:00 PM",
                location: "Downtown Plaza",
                desc: "Connect with young professionals and community leaders",
                category: "Networking",
                icon: "🤝",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                status: "upcoming",
                delay: "0.4s"
              },
              { 
                title: "Creative Arts Festival", 
                date: "Jan 5, 2025",
                time: "12:00 PM - 8:00 PM",
                location: "Art Gallery",
                desc: "Celebrate youth creativity through art, music, and performance",
                category: "Arts",
                icon: "🎨",
                color: "from-pink-500 to-pink-600",
                bgColor: "bg-pink-50",
                borderColor: "border-pink-200",
                status: "upcoming",
                delay: "0.6s"
              },
              { 
                title: "Environmental Awareness Day", 
                date: "Jan 12, 2025",
                time: "9:00 AM - 3:00 PM",
                location: "City Park",
                desc: "Learn about sustainability and environmental conservation",
                category: "Environment",
                icon: "🌱",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                status: "upcoming",
                delay: "0.8s"
              },
              { 
                title: "Career Fair 2025", 
                date: "Jan 20, 2025",
                time: "10:00 AM - 6:00 PM",
                location: "Convention Center",
                desc: "Meet employers and explore career opportunities",
                category: "Career",
                icon: "💼",
                color: "from-indigo-500 to-indigo-600",
                bgColor: "bg-indigo-50",
                borderColor: "border-indigo-200",
                status: "upcoming",
                delay: "1s"
              }
            ].map((event, index) => (
              <div 
                key={index}
                className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border border-gray-100 overflow-hidden"
                style={{animationDelay: event.delay}}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Event Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${event.bgColor} rounded-lg flex items-center justify-center border ${event.borderColor} group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300`}>
                      <span className="text-xl group-hover:text-white transition-colors duration-300">{event.icon}</span>
            </div>
                    <span className="px-3 py-1 bg-primary-orange text-white text-xs rounded-full font-semibold group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                      {event.category}
                    </span>
                  </div>
                  
                  {/* Event Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                      <span>📅</span>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                      <span>🕒</span>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                      <span>📍</span>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  {/* Event Description */}
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {event.desc}
                  </p>
                  
                  {/* Register Button */}
                  <button 
                    className={`w-full bg-gradient-to-r ${event.color} text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg ${index === 0 ? 'opacity-80' : 'opacity-100'}`}
                    disabled={index !== 0}
                    style={{ pointerEvents: index === 0 ? 'auto' : 'none' }}
                  >
                    {index === 0 ? 'Register Now' : 'Coming Soon'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Past Events Section */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
            <h3 className="text-2xl font-bold text-center mb-6">Recent Events</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Youth Innovation Challenge", date: "Nov 30, 2024", participants: "150+", icon: "🚀" },
                { title: "Community Service Day", date: "Nov 25, 2024", participants: "200+", icon: "❤️" },
                { title: "Tech Skills Bootcamp", date: "Nov 20, 2024", participants: "80+", icon: "💻" }
              ].map((event, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                  <div className="text-3xl mb-3">{event.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{event.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{event.date}</p>
                  <p className="text-primary-orange font-bold text-sm">{event.participants} participants</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section id="blog" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-orange rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-orange to-yellow-400 rounded-full mb-6">
              <span className="text-2xl">📝</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-orange to-yellow-400">Support Our Mission</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practical guides to help you donate, volunteer, partner, and share our work
            </p>
          </div>
          
          {/* Blogs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { 
                title: "Donate With Impact: Where Your Gift Goes", 
                excerpt: "See how each contribution powers training, mentorship, and community projects.",
                author: "Abdifatah Board at Dhidib",
                date: "Sep 3, 2025",
                readTime: "3 min read",
                category: "Support Guide",
                image: "💝",
                thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-200",
                delay: "0s",
                content: `
                  <h3 class="text-2xl font-bold text-black mb-2">Donate With Impact: Where Your Gift Goes</h3>
                  <p class="text-xs text-gray-500 mb-2">Scroll to read more ↓</p>
                  <p class="text-gray-600 mb-4">By Abdifatah Board at Dhidib | Sep 3, 2025 | 3 min read</p>
                  <p class="mb-4 text-black">Your generosity fuels real outcomes. Every contribution helps a young person gain skills, confidence, and access to opportunities that change lives. Here’s how different giving levels translate into impact on the ground.</p>
                  <ul class="list-disc list-inside mb-4 space-y-2 text-black">
                    <li>$25: Learning materials for one youth</li>
                    <li>$50: One skills workshop seat</li>
                    <li>$100: Month of mentorship and coaching</li>
                    <li>$250: Seed funds for a community project</li>
                  </ul>
                  <p class="mb-4 text-black">Larger gifts help us expand to new communities, bring in expert trainers, and provide tools like laptops and internet access. However you choose to give, you’re investing in sustainable impact.</p>
                  <h4 class="text-lg font-bold mb-2 text-black">How to Give</h4>
                  <ol class="list-decimal list-inside mb-4 space-y-2 text-black">
                    <li>Make a one-time or monthly gift via our Get Involved section.</li>
                    <li>Ask your employer about matching donations to double your impact.</li>
                    <li>Sponsor a full cohort to fund training, mentorship, and materials.</li>
                    <li>Donate in-kind (laptops, routers, venue space, transport vouchers).</li>
                  </ol>
                  <h4 class="text-lg font-bold mb-2 text-black">Transparency & Reporting</h4>
                  <p class="mb-4 text-black">We publish periodic impact snapshots and annual summaries that outline number of learners reached, completion rates, job placements, and community outcomes. Donors receive updates that highlight stories, metrics, and photos.</p>
                  <h4 class="text-lg font-bold mb-2 text-black">Frequently Asked Questions</h4>
                  <ul class="list-disc list-inside mb-6 space-y-2 text-black">
                    <li>Is my gift tax-deductible? Depends on jurisdiction; contact us for details.</li>
                    <li>Can I direct my gift to a specific program? Yes—note your preference.</li>
                    <li>How are funds allocated? Majority to programs; a small portion to operations.</li>
                  </ul>
                  <div class="flex items-center gap-4 mt-6 text-black">
                    <span class="text-sm">Share:</span>
                    <a href="https://facebook.com/sharer/sharer.php?u=https://dhidib.org" target="_blank" rel="noreferrer" class="text-blue-600">Facebook</a>
                    <a href="https://twitter.com/intent/tweet?url=https://dhidib.org&text=Support%20DHIDiB%20Foundation" target="_blank" rel="noreferrer" class="text-sky-500">Twitter</a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://dhidib.org" target="_blank" rel="noreferrer" class="text-blue-700">LinkedIn</a>
                    <a href="https://www.instagram.com/dhidib" target="_blank" rel="noreferrer" class="text-pink-600">Instagram</a>
                  </div>
                `
              },
              { 
                title: "Volunteer Guide: Make Your Time Count", 
                excerpt: "Mentor, facilitate workshops, or support events—here’s how to plug in.",
                author: "Abdifatah Board at Dhidib",
                date: "Aug 18, 2025",
                readTime: "4 min read",
                category: "Support Guide",
                image: "🤝",
                thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                color: "from-purple-500 to-purple-600",
                bgColor: "bg-purple-50",
                borderColor: "border-purple-200",
                delay: "0.2s",
                content: `
                  <h3 class="text-2xl font-bold text-black mb-2">Volunteer Guide: Make Your Time Count</h3>
                  <p class="text-xs text-gray-500 mb-2">Scroll to read more ↓</p>
                  <p class="text-gray-600 mb-4">By Abdifatah Board at Dhidib | Aug 18, 2025 | 4 min read</p>
                  <p class="mb-4 text-black">Volunteering with DHIDiB is hands-on and high-impact. Whether you mentor young people, facilitate skills workshops, or help us run events, your time directly empowers youth to learn and lead.</p>
                  <ul class="list-disc list-inside mb-4 space-y-2 text-black">
                    <li>Mentor a youth cohort (4–6 weeks)</li>
                    <li>Facilitate a skills workshop</li>
                    <li>Support events and outreach</li>
                    <li>Remote micro-volunteering opportunities</li>
                  </ul>
                  <p class="mb-4 text-black">We provide the materials, curriculum outlines, and staff coordination—you bring your experience and commitment. We’ll match you to roles that fit your interests and schedule.</p>
                  <h4 class="text-lg font-bold mb-2 text-black">Volunteer Onboarding</h4>
                  <ol class="list-decimal list-inside mb-4 space-y-2 text-black">
                    <li>Submit the short form in the Get Involved section.</li>
                    <li>Attend a 45-minute orientation (virtual or in-person).</li>
                    <li>Get matched to a role and review your starter toolkit.</li>
                    <li>Begin your placement with a named staff contact.</li>
                  </ol>
                  <h4 class="text-lg font-bold mb-2 text-black">What You’ll Gain</h4>
                  <ul class="list-disc list-inside mb-6 space-y-2 text-black">
                    <li>Direct impact on youth learning and confidence</li>
                    <li>Leadership and facilitation experience</li>
                    <li>Networking with partners and community leaders</li>
                    <li>Certificate of service for completed engagements</li>
                  </ul>
                  <div class="flex items-center gap-4 mt-6 text-black">
                    <span class="text-sm">Share:</span>
                    <a href="https://facebook.com/sharer/sharer.php?u=https://dhidib.org" target="_blank" rel="noreferrer" class="text-blue-600">Facebook</a>
                    <a href="https://twitter.com/intent/tweet?url=https://dhidib.org&text=Volunteer%20with%20DHIDiB" target="_blank" rel="noreferrer" class="text-sky-500">Twitter</a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://dhidib.org" target="_blank" rel="noreferrer" class="text-blue-700">LinkedIn</a>
                    <a href="https://www.instagram.com/dhidib" target="_blank" rel="noreferrer" class="text-pink-600">Instagram</a>
                  </div>
                `
              },
              { 
                title: "Partner With Us: Organizations & Sponsors", 
                excerpt: "Co-create programs, sponsor cohorts, or offer internships and resources.",
                author: "Abdifatah Board at Dhidib",
                date: "Jun 25, 2025",
                readTime: "4 min read",
                category: "Support Guide",
                image: "🤝",
                thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
                color: "from-green-500 to-green-600",
                bgColor: "bg-green-50",
                borderColor: "border-green-200",
                delay: "0.4s",
                content: `
                  <h3 class="text-2xl font-bold text-black mb-2">Partner With Us: Organizations & Sponsors</h3>
                  <p class="text-xs text-gray-500 mb-2">Scroll to read more ↓</p>
                  <p class="text-gray-600 mb-4">By Abdifatah Board at Dhidib | Jun 25, 2025 | 4 min read</p>
                  <p class="mb-4 text-black">We collaborate with NGOs, companies, and institutions to scale proven solutions. Together we can co-design programs, sponsor cohorts, and create talent pipelines for youth.</p>
                  <ul class="list-disc list-inside mb-4 space-y-2 text-black">
                    <li>Sponsor a program cohort</li>
                    <li>Offer internships and equipment</li>
                    <li>Provide expert mentors and speakers</li>
                    <li>Co-design community projects</li>
                  </ul>
                  <p class="mb-4 text-black">We’ll tailor a partnership to your goals, from CSR-aligned initiatives to innovation challenges and capacity-building. Let’s make measurable impact together.</p>
                  <h4 class="text-lg font-bold mb-2 text-black">Ways to Collaborate</h4>
                  <ol class="list-decimal list-inside mb-4 space-y-2 text-black">
                    <li>Program co-design: align outcomes with your CSR focus.</li>
                    <li>Resource partnerships: devices, connectivity, venues, logistics.</li>
                    <li>Talent pathways: internships, apprenticeships, job placements.</li>
                    <li>Thought leadership: events, panels, mentorship networks.</li>
                  </ol>
                  <h4 class="text-lg font-bold mb-2 text-black">Impact & Reporting</h4>
                  <p class="mb-6 text-black">Our monitoring framework tracks participation, completion, skills gains, and employment outcomes. Partners receive agreed reports and case studies to communicate results to stakeholders.</p>
                  <div class="flex items-center gap-4 mt-6 text-black">
                    <span class="text-sm">Share:</span>
                    <a href="https://facebook.com/sharer/sharer.php?u=https://dhidib.org" target="_blank" rel="noreferrer" class="text-blue-600">Facebook</a>
                    <a href="https://twitter.com/intent/tweet?url=https://dhidib.org&text=Partner%20with%20DHIDiB" target="_blank" rel="noreferrer" class="text-sky-500">Twitter</a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://dhidib.org" target="_blank" rel="noreferrer" class="text-blue-700">LinkedIn</a>
                    <a href="https://www.instagram.com/dhidib" target="_blank" rel="noreferrer" class="text-pink-600">Instagram</a>
                  </div>
                `
              }
            ].map((blog, index) => (
              <div 
                key={index}
                className="group relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border border-gray-100 overflow-hidden cursor-pointer"
                style={{animationDelay: blog.delay}}
                onClick={() => {
                  // Create modal for blog content
                  const modal = document.createElement('div');
                  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4';
                  modal.innerHTML = `
                    <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                      <div class="p-8">
                        <div class="flex justify-between items-start mb-6">
                          <div class="flex items-center space-x-3">
                            <div class="w-12 h-12 ${blog.bgColor} rounded-lg flex items-center justify-center border ${blog.borderColor}">
                              <span class="text-xl">${blog.image}</span>
                            </div>
                            <div>
                              <span class="px-3 py-1 bg-primary-orange text-white text-xs rounded-full font-semibold">${blog.category}</span>
                            </div>
                          </div>
                          <button onclick="this.closest('.fixed').remove()" class="text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
                        </div>
                        <div class="prose max-w-none">
                          ${blog.content}
                        </div>
                        <div class="mt-8 pt-6 border-t border-gray-200">
                          <div class="flex items-center justify-between text-sm text-gray-600">
                            <span>By ${blog.author}</span>
                            <span>${blog.date} • ${blog.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  `;
                  document.body.appendChild(modal);
                  modal.addEventListener('click', (e) => {
                    if (e.target === modal) modal.remove();
                  });
                }}
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${blog.color} opacity-0 group-hover:opacity-100 transition-all duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Blog Thumbnail */}
                  <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={blog.thumbnail} 
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Blog Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${blog.bgColor} rounded-lg flex items-center justify-center border ${blog.borderColor} group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300`}>
                      <span className="text-xl group-hover:text-white transition-colors duration-300">{blog.image}</span>
                    </div>
                    <span className="px-3 py-1 bg-primary-orange text-white text-xs rounded-full font-semibold group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                      {blog.category}
                    </span>
                  </div>
                  
                  {/* Blog Title */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors duration-300">
                    {blog.title}
                  </h3>
                  
                  {/* Blog Excerpt */}
                  <p className="text-gray-600 text-sm mb-4 group-hover:text-white/90 transition-colors duration-300">
                    {blog.excerpt}
                  </p>
                  
                  {/* Blog Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 group-hover:text-white/80 transition-colors duration-300">
                    <span>{blog.author}</span>
                    <span>{blog.date} • {blog.readTime}</span>
                  </div>
                  
                  {/* Read More Indicator */}
                  <div className="mt-4 flex items-center text-primary-orange group-hover:text-white font-semibold text-sm transition-colors duration-300">
                    <span>Read Full Article</span>
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Blogs Button */}
          <div className="text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <button className="bg-gradient-to-r from-primary-orange to-yellow-400 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              View All Blogs
            </button>
          </div>
        </div>
      </section>







      {/* Community Join Modal */}
      {showCommunityModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10001] flex items-center justify-center p-4" onClick={(e) => {
          if (e.target === e.currentTarget) {
            setShowCommunityModal(false);
            try { localStorage.setItem('dhidib_community_modal_dismissed', '1'); } catch {}
          }
        }}>
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Join DHIDiB Community</h3>
              <button aria-label="Close" className="text-gray-500 hover:text-gray-700" onClick={() => { setShowCommunityModal(false); try { localStorage.setItem('dhidib_community_modal_dismissed', '1'); } catch {} }}>×</button>
            </div>
            <p className="text-gray-700 mb-6">Volunteers get opportunities, access to private foundation events, and early updates. Be part of our mission-driven community.</p>
            <div className="flex items-center justify-end gap-3">
              <button className="px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100" onClick={() => { setShowCommunityModal(false); try { localStorage.setItem('dhidib_community_modal_dismissed', '1'); } catch {} }}>No thanks</button>
              <a href="https://chat.whatsapp.com/Fgvqg2jnjyvEdoKadCycbQ?mode=ems_copy_t" target="_blank" rel="noreferrer">
                <button className="px-5 py-2 rounded-full bg-primary-orange text-white hover:bg-orange-600">Join</button>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      <button 
        id="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-orange text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-110 z-50 opacity-0 pointer-events-none"
        style={{ transition: 'opacity 0.3s ease' }}
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Dhidib Foundation</h3>
              <p className="text-gray-300 mb-4">
                We are a youth-led nonprofit organization dedicated to empowering the next generation 
                with skills, knowledge, and opportunities for a sustainable future.
              </p>
              <p className="text-gray-300">
                Our mission is to create positive change through education, skill development, 
                and meaningful community connections.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#home" className="block text-gray-300 hover:text-yellow-400 transition-colors">🏠 Home</a>
                <a href="#features" className="block text-gray-300 hover:text-yellow-400 transition-colors">⭐ Features</a>
                <a href="#about" className="block text-gray-300 hover:text-yellow-400 transition-colors">🎯 About Us</a>
                <a href="#programs" className="block text-gray-300 hover:text-yellow-400 transition-colors">🚀 Programs</a>
                <a href="#events" className="block text-gray-300 hover:text-yellow-400 transition-colors">📅 Events</a>
                <a href="#blog" className="block text-gray-300 hover:text-yellow-400 transition-colors">📝 Blog</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Get Involved</h3>
              <div className="space-y-2">
                <a href="#get-involved" className="block text-gray-300 hover:text-yellow-400 transition-colors">🤝 Volunteer</a>
                <a href="#get-involved" className="block text-gray-300 hover:text-yellow-400 transition-colors">💝 Donate</a>
                <a href="#programs" className="block text-gray-300 hover:text-yellow-400 transition-colors">🎓 Join Programs</a>
                <a href="#events" className="block text-gray-300 hover:text-yellow-400 transition-colors">📅 Attend Events</a>
                <a href="#blog" className="block text-gray-300 hover:text-yellow-400 transition-colors">📖 Read Blog</a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-300">
                <p>📧 info@dhidib.org</p>
                <p>📞 +252 634 833 630</p>
                <p>📍 Hargeisa Jigjiga-yar near Papa Rotti</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">© 2024 Dhidib Foundation. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/share/1GDMAZ2dri/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/dhidib_foun?igsh=MW9zZjc1c3Fxb2Y0MA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.23 0 3.948-2.606 3.948-6.687 0-3.488-2.512-5.922-6.084-5.922-4.135 0-6.565 3.005-6.565 6.326 0 1.258.486 2.608 1.092 3.338.122.144.139.27.104.422-.114.484-.369 1.527-.419 1.741-.064.257-.258.31-.569.186-1.614-.751-2.624-3.101-2.624-4.994 0-3.665 2.667-7.026 7.686-7.026 4.035 0 7.168 2.88 7.168 6.727 0 4.01-2.528 7.225-6.037 7.225-1.179 0-2.287-.612-2.664-1.334l-.724 2.748c-.263 1.001-1.001 2.25-1.492 2.994.112.259.231.51.369.748C6.605 23.02 9.339 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/dhidib-foundation/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:info@dhidib.org" className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}

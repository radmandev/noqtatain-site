import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from './utils';
import { Menu, X, ChevronLeft, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import WhatsAppButton from './components/WhatsAppButton';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'الرئيسية', page: 'Home' },
    { name: 'من نحن', page: 'About' },
    { name: 'الخدمات', page: 'Services' },
    { name: 'تواصل معنا', page: 'Contact' },
  ];

  const isDashboard = currentPageName === 'portal' || currentPageName === 'Portal';
  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&display=swap');
        
        :root {
          --color-primary: #0F172A;
          --color-secondary: #F8FAFC;
          --color-accent: #8B5CF6;
          --color-text: #64748B;
        }
        
        * {
          font-family: 'Tajawal', sans-serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .dark .glass-effect {
          background: rgba(15, 23, 42, 0.8);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #8B5CF6;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #7C3AED;
        }
      `}</style>

      {/* Navigation */}
      {!isDashboard && (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200/50 dark:border-slate-800/50">
          ...existing code...
        </nav>
      )}

      {/* Main Content */}
      <main className={isDashboard ? '' : 'pt-20'}>
        {children}
      </main>

      {/* Footer */}
      {!isDashboard && (
        <footer className="bg-slate-900 dark:bg-slate-950 text-white py-8 border-t border-slate-800">
          ...existing code...
        </footer>
      )}

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </div>
  );
}
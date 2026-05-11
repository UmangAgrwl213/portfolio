import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#home" className="text-xl font-medium tracking-tighter text-white uppercase">
          U.Agrawal<span className="text-accent">_</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-xs font-semibold tracking-widest uppercase text-white hover:text-accent transition-all duration-300 opacity-70 hover:opacity-100">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="h-4 w-[1px] bg-[#1A1A1A]/20"></div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/UmangAgrwl213" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors"><Github size={18} /></a>
            <a href="https://www.linkedin.com/in/umang-agrawal214/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-accent transition-colors"><Linkedin size={18} /></a>
            <a href="mailto:umangagrawal213@gmail.com" className="text-white/40 hover:text-accent transition-colors"><Mail size={18} /></a>
          </div>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-[#1A1A1A]" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-[#F2F0EB] border-b border-[#1A1A1A]/10 p-6 flex flex-col gap-6"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-semibold tracking-widest uppercase text-[#1A1A1A] hover:line-through opacity-80 hover:opacity-100"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-6 pt-4 border-t border-[#1A1A1A]/10">
                <a href="https://github.com/UmangAgrwl213" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A]/60 hover:text-[#1A1A1A]"><Github size={20} /></a>
                <a href="https://www.linkedin.com/in/umang-agrawal214/" target="_blank" rel="noopener noreferrer" className="text-[#1A1A1A]/60 hover:text-[#1A1A1A]"><Linkedin size={20} /></a>
                <a href="mailto:umangagrawal213@gmail.com" className="text-[#1A1A1A]/60 hover:text-[#1A1A1A]"><Mail size={20} /></a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

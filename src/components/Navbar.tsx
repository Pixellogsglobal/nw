import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { 
  Home,
  MessageCircle,
  Phone,
  Menu,
  X,
  Brain,
  Building2,
  Sparkles,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  MessageSquare
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const menuItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: Brain },
  { id: 'universities', label: 'Universities', icon: Building2 },
  { id: 'reviews', label: 'Reviews', icon: MessageSquare },
  { id: 'contact', label: 'Contact', icon: Phone }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/pixellogsglobal', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com/pixellogsglobal', label: 'Twitter' },
  { icon: Instagram, href: 'https://instagram.com/pixellogsglobal', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/pixellogsglobal', label: 'LinkedIn' },
  { 
    icon: MessageCircle, 
    href: 'https://wa.me/447769889797',
    label: 'WhatsApp',
    className: 'text-green-500 hover:text-green-600'
  }
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white/5 backdrop-blur-xl border-b border-white/10 px-4 py-4 z-50">
        <div className="flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-2 bg-brand-red-500/10 rounded-xl">
              <Sparkles className="w-5 h-5 text-brand-red-500" />
            </div>
            <h1 className="text-xl font-bold text-brand-red-500">
              Pixellogs Global
            </h1>
          </motion.div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl hover:bg-white/5"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <motion.nav
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className="fixed left-0 top-0 h-screen bg-white/5 backdrop-blur-xl border-r border-white/10 hidden md:flex flex-col z-50 w-[240px]"
      >
        {/* Logo */}
        <div className="h-24 flex items-center px-6">
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
          >
            <div className="p-2 bg-brand-red-500/10 rounded-xl">
              <Sparkles className="w-6 h-6 text-brand-red-500" />
            </div>
            <h1 className="text-xl font-bold text-brand-red-500">
              Pixellogs Global
            </h1>
          </motion.div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 px-3 py-8 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <ScrollLink
                key={item.id}
                to={item.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onSetActive={() => setActiveSection(item.id)}
              >
                <motion.button
                  whileHover={{ x: 5 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left
                    ${activeSection === item.id
                      ? 'bg-brand-red-500 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              </ScrollLink>
            );
          })}
        </div>

        {/* Social Links */}
        <div className="px-6 py-4 border-t border-white/10">
          <div className="flex items-center gap-4 flex-wrap">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`text-gray-400 hover:text-white transition-colors ${link.className || ''}`}
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="p-6 border-t border-white/10">
          <ThemeToggle />
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-16 z-40 bg-white/5 backdrop-blur-xl border-b border-white/10 md:hidden"
          >
            <div className="p-4 space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <ScrollLink
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onSetActive={() => setActiveSection(item.id)}
                  >
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left
                        ${activeSection === item.id
                          ? 'bg-brand-red-500 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                        }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  </ScrollLink>
                );
              })}

              {/* Social Links for Mobile */}
              <div className="pt-4 mt-4 border-t border-white/10">
                <div className="flex items-center justify-center gap-6">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`text-gray-400 hover:text-white transition-colors ${link.className || ''}`}
                        aria-label={link.label}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
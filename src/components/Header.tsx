'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container } from './ui/Container';
import { Button } from './ui/Button';

const navItems = [
  { label: 'サービス', href: '#services' },
  { label: '特徴', href: '#features' },
  { label: 'ブログ', href: '/blog' },
  { label: 'よくある質問', href: '/qa' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/70 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="flex items-center h-14">
        {/* Left side with padding */}
        <div className="flex-1 flex items-center justify-between pl-4 sm:pl-6 lg:pl-8 pr-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="NodeFlare" className="h-7 sm:h-8 w-auto" />
            <span className="text-base sm:text-lg font-black text-[#333333]" style={{ fontFamily: 'Inter, sans-serif' }}>NodeFlare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-[#222222]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA Button - 右端にくっつける */}
        <Link href="/contact" className="hidden lg:block h-full">
          <button className="h-full px-8 bg-gradient-to-r from-violet-500 to-violet-700 text-white font-semibold text-sm hover:from-violet-600 hover:to-violet-800 transition-all">
            お問い合わせ
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 mr-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニュー"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden overflow-hidden transition-all duration-300 bg-white',
          isMenuOpen ? 'max-h-[400px] border-b border-gray-100' : 'max-h-0'
        )}
      >
        <Container>
          <nav className="py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Button variant="primary" size="md" className="w-full">
                お問い合わせ
              </Button>
            </div>
          </nav>
        </Container>
      </div>
    </header>
  );
}

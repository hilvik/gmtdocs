"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-gradient-to-r from-purple-600/90 to-purple-800/90 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-r from-purple-600 to-purple-800"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-white">
                Get Me Therapy
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <div className="relative flex items-center space-x-1 bg-white/10 rounded-md border border-white/20 px-3 py-1.5 shadow-sm">
                <Search className="h-4 w-4 text-white/70" />
                <input
                  type="text"
                  placeholder="Search docs..."
                  className="bg-transparent border-none outline-none text-sm text-white placeholder-white/70"
                />
                <kbd className="hidden sm:inline-flex ml-2 items-center rounded border border-white/20 bg-white/10 px-1.5 text-[10px] font-medium text-white/70">
                  ⌘K
                </kbd>
              </div>
            </div>
            <nav className="flex space-x-6">
              <Link 
                href="#client" 
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Client
              </Link>
              <Link 
                href="#therapist" 
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Therapist
              </Link>
              <Link 
                href="#admin" 
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Admin
              </Link>
              <Link 
                href="#homepage" 
                className="text-sm font-medium text-white/90 hover:text-white transition-colors"
              >
                Homepage
              </Link>
            </nav>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white/90 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white/20"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-gradient-to-r from-purple-700 to-purple-900 shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="p-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-white/70" />
              </div>
              <input
                type="text"
                placeholder="Search docs..."
                className="block w-full pl-10 pr-3 py-2 border border-white/20 rounded-md leading-5 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-1 focus:ring-white/30 focus:border-white/30 sm:text-sm"
              />
            </div>
          </div>
          <Link
            href="#client"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white hover:bg-white/10"
          >
            Client Side
          </Link>
          <Link
            href="#therapist"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white hover:bg-white/10"
          >
            Therapist Side
          </Link>
          <Link
            href="#admin"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white hover:bg-white/10"
          >
            Admin Side
          </Link>
          <Link
            href="#homepage"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white hover:bg-white/10"
          >
            Homepage
          </Link>
        </div>
      </div>
    </header>
  );
}
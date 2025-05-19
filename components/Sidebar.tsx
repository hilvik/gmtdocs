"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState('client');

  return (
    <div 
      className={cn(
        "sidebar bg-gradient-to-b from-purple-600 to-purple-800 transition-all duration-300",
        isCollapsed ? "w-[60px]" : "w-[280px]"
      )}
    >
      <div className="flex items-center justify-between py-6 px-4 border-b border-white/20">
        {!isCollapsed && (
          <h1 className="text-xl font-semibold text-white truncate">Get Me Therapy</h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5 text-white" />
          ) : (
            <ChevronLeft className="h-5 w-5 text-white" />
          )}
        </button>
      </div>

      <nav className="py-6">
        {!isCollapsed && (
          <div className="px-6 text-xs font-medium text-white/70 uppercase tracking-wider">
            Documentation
          </div>
        )}
        <div className="mt-3 space-y-1">
          {[
            { id: 'client', label: 'Client Side', href: '#client' },
            { id: 'therapist', label: 'Therapist Side', href: '#therapist' },
            { id: 'admin', label: 'Admin Side', href: '#admin' },
            { id: 'core', label: 'Core Functionality', href: '#core' },
          ].map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setActiveSection(item.id)}
              className={cn(
                "flex items-center px-6 py-2 text-sm transition-colors",
                isCollapsed ? "justify-center" : "space-x-3",
                activeSection === item.id
                  ? "bg-white/20 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              )}
            >
              <span className={cn(
                "transition-all",
                isCollapsed ? "w-6 h-6" : "w-4 h-4"
              )}>
                <Menu className="w-full h-full" />
              </span>
              {!isCollapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
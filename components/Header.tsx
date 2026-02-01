import React, { useState, useEffect, useRef } from 'react';
import { Search, Moon, Sun, User, Bell, Grip, Box, GitFork, ShoppingCart, Settings, Users, FileText, X } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  activeNavItem: string;
  onNavItemChange: (item: string) => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, onToggleDarkMode, activeNavItem, onNavItemChange }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isUserMenuOpen]);
  return (
    <header className={`border-b border-gray-200 sticky top-0 z-50 transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white'
    }`}>
      <div className="flex items-center justify-between px-4 h-14">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-4">
          <div className={`flex items-center gap-2 ${isDarkMode ? 'text-slate-200' : 'text-gray-900'}`}>
            <div className={`w-8 h-8 rounded flex items-center justify-center font-bold border ${
              isDarkMode 
                ? 'bg-slate-700 text-slate-200 border-slate-600' 
                : 'bg-gray-200 text-gray-600 border-gray-300'
            }`}>
              JLR
            </div>
            <div className="flex flex-col">
              <span className={`font-bold leading-tight ${isDarkMode ? 'text-slate-200' : 'text-gray-900'}`}>M-Config</span>
              <span className={`text-[10px] uppercase tracking-wider ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Configuration Manager</span>
            </div>
          </div>

          {/* Vertical Divider */}
          <div className={`h-6 w-px mx-2 ${isDarkMode ? 'bg-slate-600' : 'bg-gray-300'}`}></div>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <NavButton 
              icon={<Box size={16} />} 
              label="Equipment" 
              active={activeNavItem === 'Equipment'}
              isDarkMode={isDarkMode}
              onClick={() => onNavItemChange('Equipment')}
            />
            <NavButton 
              icon={<GitFork size={16} />} 
              label="Routes" 
              active={activeNavItem === 'Routes'}
              isDarkMode={isDarkMode}
              onClick={() => onNavItemChange('Routes')}
            />
            <NavButton 
              icon={<ShoppingCart size={16} />} 
              label="Orders" 
              active={activeNavItem === 'Orders'}
              isDarkMode={isDarkMode}
              onClick={() => onNavItemChange('Orders')}
            />
            <NavButton 
              icon={<Settings size={16} />} 
              label="Attributes" 
              active={activeNavItem === 'Attributes'}
              isDarkMode={isDarkMode}
              onClick={() => onNavItemChange('Attributes')}
            />
            <NavButton 
              icon={<Users size={16} />} 
              label="Personnel" 
              active={activeNavItem === 'Personnel'}
              isDarkMode={isDarkMode}
              onClick={() => onNavItemChange('Personnel')}
            />
            <NavButton 
              icon={<Grip size={16} />} 
              label="Miscellaneous" 
              active={activeNavItem === 'Miscellaneous'}
              isDarkMode={isDarkMode}
              onClick={() => onNavItemChange('Miscellaneous')}
            />
          </nav>
        </div>

        {/* Right: User Controls */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className={`hover:text-gray-700 transition-colors ${
              isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-gray-500'
            }`}
          >
            <Search size={18} />
          </button>
          <button 
            onClick={onToggleDarkMode}
            className={`hover:text-gray-700 transition-colors ${
              isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-gray-500'
            }`}
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            Production
          </div>

          <div 
            className={`flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-100 rounded px-2 py-1 transition-colors relative ${
              isDarkMode ? 'text-slate-300 hover:bg-slate-700' : 'text-gray-700'
            }`}
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
          >
            <span>rjain16</span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              isDarkMode ? 'bg-slate-600' : 'bg-slate-800'
            } text-white`}>
              <User size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsSearchOpen(false)}
          />
          
          {/* Modal */}
          <div className={`relative w-full max-w-md mx-4 rounded-lg shadow-xl ${
            isDarkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white'
          }`}>
            <div className="p-4">
              {/* Search Input */}
              <div className="relative">
                <Search size={20} className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  isDarkMode ? 'text-slate-400' : 'text-gray-400'
                }`} />
                <input
                  type="text"
                  placeholder="Search configurations, patterns, attributes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-10 pr-10 py-3 text-lg border-0 outline-none ${
                    isDarkMode 
                      ? 'bg-slate-800 text-slate-200 placeholder-slate-400' 
                      : 'bg-white text-gray-900 placeholder-gray-500'
                  }`}
                  autoFocus
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 ${
                      isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Search Results Placeholder */}
              <div className="mt-4">
                {searchQuery ? (
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                    <p className="mb-2">Search results for &quot;{searchQuery}&quot;:</p>
                    <div className={`p-3 rounded ${
                      isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                    }`}>
                      <p className="text-sm">No results found. Try searching for patterns, attributes, or configurations.</p>
                    </div>
                  </div>
                ) : (
                  <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                    <p className="mb-2">Recent searches:</p>
                    <div className="space-y-2">
                      <div className={`p-2 rounded cursor-pointer hover:bg-gray-100 ${
                        isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'
                      }`}>
                        Pattern configurations
                      </div>
                      <div className={`p-2 rounded cursor-pointer hover:bg-gray-100 ${
                        isDarkMode ? 'hover:bg-slate-700' : 'hover:bg-gray-50'
                      }`}>
                        Attribute groups
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Menu Dropdown */}
      {isUserMenuOpen && (
        <div ref={userMenuRef} className="absolute top-full right-4 mt-2 w-64 z-50">
          <div className={`rounded-lg shadow-xl border ${
            isDarkMode 
              ? 'bg-slate-800 border-slate-700' 
              : 'bg-white border-gray-200'
          }`}>
            {/* User Info Header */}
            <div className={`p-4 border-b ${
              isDarkMode ? 'border-slate-700' : 'border-gray-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isDarkMode ? 'bg-slate-600' : 'bg-slate-800'
                } text-white font-semibold`}>
                  RJ
                </div>
                <div>
                  <p className={`font-medium ${
                    isDarkMode ? 'text-slate-200' : 'text-gray-900'
                  }`}>Rohit Jain</p>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-slate-400' : 'text-gray-500'
                  }`}>rjain16@jlr.com</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            <div className="p-2">
              <button className={`w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-100 transition-colors ${
                isDarkMode 
                  ? 'text-slate-200 hover:bg-slate-700' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}>
                👤 Profile Settings
              </button>
              <button className={`w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-100 transition-colors ${
                isDarkMode 
                  ? 'text-slate-200 hover:bg-slate-700' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}>
                ⚙️ Preferences
              </button>
              <button className={`w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-100 transition-colors ${
                isDarkMode 
                  ? 'text-slate-200 hover:bg-slate-700' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}>
                🔔 Notifications
              </button>
              <button className={`w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-100 transition-colors ${
                isDarkMode 
                  ? 'text-slate-200 hover:bg-slate-700' 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}>
                📊 Activity Log
              </button>
              <div className={`border-t my-2 ${
                isDarkMode ? 'border-slate-700' : 'border-gray-200'
              }`}></div>
              <button className={`w-full text-left px-3 py-2 rounded text-sm hover:bg-red-50 text-red-600 transition-colors ${
                isDarkMode ? 'hover:bg-red-900/20' : ''
              }`}>
                🚪 Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavButtonProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  isDarkMode?: boolean;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ icon, label, active, isDarkMode, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-2 px-3 py-1.5 rounded text-sm font-medium transition-colors
        ${active 
          ? 'bg-slate-800 text-white shadow-sm' 
          : isDarkMode
            ? 'text-slate-300 hover:bg-slate-700 hover:text-white'
            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}
      `}
    >
      {icon}
      {label}
    </button>
  );
};

export default Header;

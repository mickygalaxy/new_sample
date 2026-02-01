'use client'

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import FilterBar from '../components/FilterBar';
import PatternTable from '../components/PatternTable';
import { Tab } from '../types';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.RESULT_PATTERNS);
  const [patternNameFilter, setPatternNameFilter] = useState('');
  const [patternTypeFilter, setPatternTypeFilter] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState('Attributes');

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDarkMode(shouldBeDark);
    document.documentElement.classList.toggle('dark', shouldBeDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-200 ${
      isDarkMode
        ? 'bg-slate-900 text-slate-100'
        : 'bg-slate-50 text-slate-900'
    }`}>
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        activeNavItem={activeNavItem}
        onNavItemChange={setActiveNavItem}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        <SubHeader
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isDarkMode={isDarkMode}
          activeNavItem={activeNavItem}
        />

        {activeTab === Tab.RESULT_PATTERNS ? (
          <>
            <FilterBar
              patternNameFilter={patternNameFilter}
              patternTypeFilter={patternTypeFilter}
              onPatternNameChange={setPatternNameFilter}
              onPatternTypeChange={setPatternTypeFilter}
              isDarkMode={isDarkMode}
            />
            <PatternTable
              patternNameFilter={patternNameFilter}
              patternTypeFilter={patternTypeFilter}
              isDarkMode={isDarkMode}
            />
          </>
        ) : activeTab === Tab.ATTRIBUTE_GROUPS ? (
          <div className={`flex-1 flex items-center justify-center transition-colors duration-200 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-400'
          }`}>
            <div className="text-center">
              <h3 className={`text-lg font-medium mb-1 ${
                isDarkMode ? 'text-slate-200' : 'text-gray-900'
              }`}>Attribute Groups</h3>
              <p>Manage attribute groups and their configurations</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Coming soon: Create and organize attribute groups</p>
              </div>
            </div>
          </div>
        ) : activeTab === Tab.ATTRIBUTES ? (
          <div className={`flex-1 flex items-center justify-center transition-colors duration-200 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-400'
          }`}>
            <div className="text-center">
              <h3 className={`text-lg font-medium mb-1 ${
                isDarkMode ? 'text-slate-200' : 'text-gray-900'
              }`}>Attributes</h3>
              <p>Configure individual attributes and their properties</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Coming soon: Define attribute schemas and validation rules</p>
              </div>
            </div>
          </div>
        ) : activeTab === Tab.SWITCHES ? (
          <div className={`flex-1 flex items-center justify-center transition-colors duration-200 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-400'
          }`}>
            <div className="text-center">
              <h3 className={`text-lg font-medium mb-1 ${
                isDarkMode ? 'text-slate-200' : 'text-gray-900'
              }`}>Switches</h3>
              <p>Manage configuration switches and toggles</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Coming soon: Control feature flags and system switches</p>
              </div>
            </div>
          </div>
        ) : activeTab === Tab.IMPORT ? (
          <div className={`flex-1 flex items-center justify-center transition-colors duration-200 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-400'
          }`}>
            <div className="text-center">
              <h3 className={`text-lg font-medium mb-1 ${
                isDarkMode ? 'text-slate-200' : 'text-gray-900'
              }`}>Import</h3>
              <p>Import configurations from external sources</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Coming soon: Upload and import configuration files</p>
              </div>
            </div>
          </div>
        ) : activeTab === Tab.EXPORT ? (
          <div className={`flex-1 flex items-center justify-center transition-colors duration-200 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-400'
          }`}>
            <div className="text-center">
              <h3 className={`text-lg font-medium mb-1 ${
                isDarkMode ? 'text-slate-200' : 'text-gray-900'
              }`}>Export</h3>
              <p>Export configurations to external formats</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Coming soon: Download configurations in various formats</p>
              </div>
            </div>
          </div>
        ) : activeTab === Tab.TEST ? (
          <div className={`flex-1 flex items-center justify-center transition-colors duration-200 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-400'
          }`}>
            <div className="text-center">
              <h3 className={`text-lg font-medium mb-1 ${
                isDarkMode ? 'text-slate-200' : 'text-gray-900'
              }`}>Test</h3>
              <p>Test and validate configurations</p>
              <div className="mt-4 text-sm text-gray-500">
                <p>Coming soon: Run validation tests and check configuration integrity</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={`flex-1 flex items-center justify-center transition-colors duration-200 ${
            isDarkMode ? 'text-slate-400' : 'text-gray-400'
          }`}>
            <div className="text-center">
              <h3 className={`text-lg font-medium mb-1 ${
                isDarkMode ? 'text-slate-200' : 'text-gray-900'
              }`}>{activeTab}</h3>
              <p>Content placeholder for {activeTab}</p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
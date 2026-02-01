import React from 'react';
import { Tab } from '../types';
import { TABS } from '../lib/constants';
import { Layers, ListFilter, FileInput, FileOutput, Play } from 'lucide-react';

interface SubHeaderProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
  isDarkMode?: boolean;
  activeNavItem: string;
}

const SubHeader: React.FC<SubHeaderProps> = ({ activeTab, onTabChange, isDarkMode, activeNavItem }) => {
  return (
    <div className={`border-b border-gray-200 transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white'
    }`}>
      {/* Breadcrumbs */}
      <div className={`px-6 py-2 text-xs flex items-center gap-2 ${
        isDarkMode ? 'text-slate-400' : 'text-gray-500'
      }`}>
        <span className={`hover:text-gray-800 cursor-pointer ${
          isDarkMode ? 'hover:text-slate-200' : ''
        }`}>Home</span>
        <span>/</span>
        <div className={`flex items-center gap-1 px-2 py-0.5 rounded ${
          isDarkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'
        }`}>
          <span>{activeNavItem}</span>
          <button className={`ml-1 hover:text-gray-600 ${
            isDarkMode ? 'text-slate-400 hover:text-slate-200' : 'text-gray-400'
          }`}>×</button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 flex items-center gap-6 overflow-x-auto no-scrollbar">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`
              flex items-center gap-2 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap
              ${activeTab === tab
                ? 'border-slate-800 text-slate-800'
                : isDarkMode
                  ? 'border-transparent text-slate-400 hover:text-slate-200 hover:border-slate-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            <TabIcon tab={tab} />
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
};

const TabIcon: React.FC<{ tab: Tab }> = ({ tab }) => {
    switch (tab) {
        case Tab.RESULT_PATTERNS: return <ListFilter size={16} />;
        case Tab.ATTRIBUTE_GROUPS: return <Layers size={16} />;
        case Tab.ATTRIBUTES: return <Layers size={16} />; // Reuse icon for simplicity
        case Tab.SWITCHES: return <div className="w-4 h-4 border-2 border-current rounded-full" />;
        case Tab.IMPORT: return <FileInput size={16} />;
        case Tab.EXPORT: return <FileOutput size={16} />;
        case Tab.TEST: return <Play size={16} />;
        default: return null;
    }
}

export default SubHeader;

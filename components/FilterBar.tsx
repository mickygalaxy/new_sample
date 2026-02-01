import React from 'react';
import { Search } from 'lucide-react';

interface FilterBarProps {
  patternNameFilter: string;
  patternTypeFilter: string;
  onPatternNameChange: (value: string) => void;
  onPatternTypeChange: (value: string) => void;
  isDarkMode?: boolean;
}

const FilterBar: React.FC<FilterBarProps> = ({
  patternNameFilter,
  patternTypeFilter,
  onPatternNameChange,
  onPatternTypeChange,
  isDarkMode,
}) => {
  return (
    <div className={`p-4 border-b border-gray-200 transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white'
    }`}>
      <div className="flex items-end gap-4">
        {/* Pattern Name Input */}
        <div className="flex flex-col gap-1 w-64">
          <label className={`text-[11px] font-bold uppercase tracking-wide ${
            isDarkMode ? 'text-slate-400' : 'text-gray-400'
          }`}>
            Pattern Name Contains
          </label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={patternNameFilter}
              onChange={(e) => onPatternNameChange(e.target.value)}
              className={`w-full pl-3 pr-3 py-2 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-slate-500 transition-colors ${
                isDarkMode 
                  ? 'bg-slate-700 border-slate-600 text-slate-200 placeholder-slate-400 focus:border-slate-400' 
                  : 'border-gray-300 bg-white'
              }`}
            />
          </div>
        </div>

        {/* Pattern Type Dropdown */}
        <div className="flex flex-col gap-1 w-64">
          <label className={`text-[11px] font-bold uppercase tracking-wide ${
            isDarkMode ? 'text-slate-400' : 'text-gray-400'
          }`}>
            Pattern Type
          </label>
          <select 
            value={patternTypeFilter}
            onChange={(e) => onPatternTypeChange(e.target.value)}
            className={`w-full pl-3 pr-8 py-2 border rounded text-sm bg-white focus:outline-none focus:ring-1 focus:ring-slate-500 appearance-none transition-colors ${
              isDarkMode 
                ? 'bg-slate-700 border-slate-600 text-slate-200 focus:border-slate-400' 
                : 'border-gray-300'
            }`}
          >
            <option value="">All Pattern Type</option>
            <option value="Alphanumeric">Alphanumeric</option>
            <option value="Numeric">Numeric</option>
            <option value="Boolean">Boolean</option>
            <option value="Text">Text</option>
          </select>
        </div>

        {/* Search Button */}
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded text-sm font-medium flex items-center gap-2 shadow-sm transition-all ml-auto">
          <Search size={14} />
          SEARCH RESULT PATTERNS
        </button>
      </div>
    </div>
  );
};

export default FilterBar;

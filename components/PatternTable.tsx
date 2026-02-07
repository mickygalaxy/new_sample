import React, { useState, useMemo } from 'react';
import { MOCK_PATTERNS } from '../lib/constants';
import { Pattern } from '../types';
import { Plus, Edit2, Trash2, Columns, Search, Filter, ArrowUpDown } from 'lucide-react';

interface PatternTableProps {
  patternNameFilter: string;
  patternTypeFilter: string;
  isDarkMode?: boolean;
}

const PatternTable: React.FC<PatternTableProps> = ({ patternNameFilter, patternTypeFilter, isDarkMode }) => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [patterns, setPatterns] = useState<Pattern[]>(MOCK_PATTERNS);

  const filteredPatterns = useMemo(() => {
    return patterns.filter(pattern => {
      const matchesName = pattern.patternName.toLowerCase().includes(patternNameFilter.toLowerCase());
      const matchesType = !patternTypeFilter || pattern.patternType === patternTypeFilter;
      return matchesName && matchesType;
    });
  }, [patterns, patternNameFilter, patternTypeFilter]);

  const toggleSelection = (id: string) => {
    const newSelection = new Set(selectedIds);
    if (newSelection.has(id)) {
      newSelection.delete(id);
    } else {
      newSelection.add(id);
    }
    setSelectedIds(newSelection);
  };

  const toggleAll = () => {
    if (selectedIds.size === filteredPatterns.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(filteredPatterns.map(p => p.id)));
    }
  };

  const handleAdd = () => {
    // For now, just add a new pattern with default values
    const newPattern: Pattern = {
      id: Date.now().toString(),
      patternName: 'New Pattern',
      patternType: 'Alphanumeric',
      resultMaxLength: null,
      resultPattern: '',
      resultMinValue: null,
      resultMaxValue: null,
    };
    setPatterns([...patterns, newPattern]);
  };

  const handleEdit = () => {
    if (selectedIds.size === 1) {
      const id = Array.from(selectedIds)[0];
      // For now, just rename it
      setPatterns(patterns.map(p => 
        p.id === id ? { ...p, patternName: p.patternName + ' (Edited)' } : p
      ));
    }
  };

  const handleDelete = () => {
    if (selectedIds.size > 0) {
      setPatterns(patterns.filter(p => !selectedIds.has(p.id)));
      setSelectedIds(new Set());
    }
  };

  return (
    <div className={`flex-1 flex flex-col overflow-hidden transition-colors duration-200 ${
      isDarkMode ? 'bg-slate-900' : 'bg-slate-50'
    }`}>
      {/* Action Toolbar */}
      <div className={`px-2 sm:px-4 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 ${
        isDarkMode ? 'text-slate-200' : 'text-gray-600'
      }`}>
        <div className="w-full sm:w-auto text-center sm:text-left">
          <h2 className="text-sm font-semibold">Result Patterns</h2>
          <div className="text-xs text-gray-400">({filteredPatterns.length} Result Patterns Found)</div>
        </div>

        <div className="w-full sm:w-auto flex gap-2 flex-col sm:flex-row">
          <button 
            onClick={handleAdd}
            className={`w-full sm:w-auto px-3 py-2 rounded text-xs font-bold flex items-center gap-2 justify-center transition-colors uppercase ${
              isDarkMode 
                ? 'bg-slate-700 hover:bg-slate-600 text-slate-200' 
                : 'bg-slate-800 hover:bg-slate-700 text-white'
            }`}
          >
            <Plus size={14} />
            Add Result Pattern
          </button>
          
          <button 
            onClick={handleEdit}
            disabled={selectedIds.size !== 1}
            className={`w-full sm:w-auto px-3 py-2 rounded text-xs font-bold flex items-center gap-2 justify-center uppercase transition-colors ${
              selectedIds.size === 1
                ? isDarkMode
                  ? 'bg-blue-700 hover:bg-blue-600 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
                : isDarkMode
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Edit2 size={12} />
            Edit Result Pattern
          </button>

          <button 
            onClick={handleDelete}
            disabled={selectedIds.size === 0}
            className={`w-full sm:w-auto px-3 py-2 rounded text-xs font-bold flex items-center gap-2 justify-center uppercase transition-colors ${
              selectedIds.size > 0
                ? isDarkMode
                  ? 'bg-red-700 hover:bg-red-600 text-white'
                  : 'bg-red-600 hover:bg-red-700 text-white'
                : isDarkMode
                  ? 'bg-slate-700 text-slate-500 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Trash2 size={12} />
            Delete Result Pattern
          </button>
        </div>
      </div>

      {/* Table Container */}
      <div className="flex-1 px-0 sm:px-6 pb-6 overflow-hidden flex flex-col">
        <div className={`border rounded-lg shadow-sm flex flex-col h-full transition-colors duration-200 ${
          isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
        }`}>
            
            {/* Table Utility Bar (Columns) */}
            <div className={`p-2 border-b border-gray-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 ${
              isDarkMode ? 'bg-slate-700/50 border-slate-600' : 'bg-gray-50/50'
            }`}>
               <div className="relative w-full sm:w-auto">
                 <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                 <input 
                    type="text" 
                    placeholder="Search all columns..." 
                    className="pl-8 pr-4 py-1.5 text-xs border border-gray-300 rounded bg-white w-full sm:w-64 focus:outline-none focus:border-slate-400"
                 />
               </div>
               <div className="w-full sm:w-auto flex justify-end">
                 <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-900 bg-white border border-gray-300 px-2 py-1 rounded shadow-sm w-full sm:w-auto justify-center">
                   <Columns size={12} />
                   Columns
                 </button>
               </div>
            </div>

          {/* Table */}
          <div className="overflow-auto flex-1">
            <table className="w-full text-left border-collapse">
              <thead className={`sticky top-0 z-10 ${
                isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
              }`}>
                <tr>
                  <th className={`p-3 w-10 border-b border-gray-200 ${
                    isDarkMode ? 'border-slate-600' : ''
                  }`}>
                    <input 
                        type="checkbox" 
                        className="rounded border-gray-300" 
                        checked={selectedIds.size === filteredPatterns.length && filteredPatterns.length > 0}
                        onChange={toggleAll}
                    />
                  </th>
                  <HeaderCell label="PATTERN NAME" isDarkMode={isDarkMode} />
                  <HeaderCell label="PATTERN TYPE" isDarkMode={isDarkMode} />
                  <HeaderCell label="RESULT MAX LENGTH" isDarkMode={isDarkMode} />
                  <HeaderCell label="RESULT PATTERN" isDarkMode={isDarkMode} />
                  <HeaderCell label="RESULT MIN VALUE" isDarkMode={isDarkMode} />
                  <HeaderCell label="RESULT MAX VALUE" isDarkMode={isDarkMode} />
                </tr>
              </thead>
              <tbody className={`divide-y ${
                isDarkMode ? 'divide-slate-600' : 'divide-gray-100'
              }`}>
                {filteredPatterns.map((pattern) => (
                  <tr key={pattern.id} className={`transition-colors group ${
                    isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-blue-50/50'
                  }`}>
                    <td className={`p-3 border-r border-transparent group-hover:border-blue-100 ${
                      isDarkMode ? 'group-hover:border-slate-600' : ''
                    }`}>
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300"
                        checked={selectedIds.has(pattern.id)}
                        onChange={() => toggleSelection(pattern.id)}
                      />
                    </td>
                    <td className={`p-3 text-sm font-medium ${
                      isDarkMode ? 'text-slate-200' : 'text-gray-700'
                    }`}>{pattern.patternName}</td>
                    <td className={`p-3 text-sm ${
                      isDarkMode ? 'text-slate-300' : 'text-gray-600'
                    }`}>{pattern.patternType}</td>
                    <td className={`p-3 text-sm ${
                      isDarkMode ? 'text-slate-300' : 'text-gray-600'
                    }`}>{pattern.resultMaxLength ?? ''}</td>
                    <td className={`p-3 text-sm font-mono text-xs rounded w-fit px-2 ${
                      isDarkMode ? 'text-slate-300 bg-slate-700' : 'text-gray-600 bg-gray-50'
                    }`}>{pattern.resultPattern}</td>
                    <td className={`p-3 text-sm ${
                      isDarkMode ? 'text-slate-300' : 'text-gray-600'
                    }`}>{pattern.resultMinValue ?? ''}</td>
                    <td className={`p-3 text-sm ${
                      isDarkMode ? 'text-slate-300' : 'text-gray-600'
                    }`}>{pattern.resultMaxValue ?? ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Footer / Pagination (Placeholder) */}
          <div className={`border-t p-2 text-xs flex justify-end transition-colors duration-200 ${
            isDarkMode 
              ? 'border-slate-600 bg-slate-700/50 text-slate-400' 
              : 'border-gray-200 bg-gray-50 text-gray-500'
          }`}>
            Showing {filteredPatterns.length} rows
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderCell: React.FC<{ label: string; isDarkMode?: boolean }> = ({ label, isDarkMode }) => (
  <th className={`p-3 border-b text-xs font-bold uppercase tracking-wider group cursor-pointer transition-colors ${
    isDarkMode 
      ? 'border-slate-600 text-slate-400 hover:bg-slate-600' 
      : 'border-gray-200 text-gray-500 hover:bg-gray-200'
  }`}>
    <div className="flex items-center justify-between gap-2">
      <span>{label}</span>
      <div className={`flex items-center opacity-50 group-hover:opacity-100 transition-opacity ${
        isDarkMode ? 'text-slate-500' : 'text-gray-400'
      }`}>
        <ArrowUpDown size={10} className="mr-1" />
        <Filter size={10} />
      </div>
    </div>
  </th>
);

export default PatternTable;

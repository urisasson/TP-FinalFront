import React from 'react';


interface Props {
  value: string;
  onChange: (val: string) => void;
}


export const SearchBar: React.FC<Props> = ({ value, onChange }) => {
  return (
    <div className="relative max-w-xl mx-auto mb-6">
      <input
        type="text"
        placeholder="Buscar local o servicio en Buenos Aires..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-sky-500 focus:outline-none text-gray-700 placeholder-gray-400"
      />
      <span className="absolute left-3.5 top-3.5 text-gray-400 text-lg">🔍</span>
    </div>
  );
};

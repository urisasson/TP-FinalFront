import React from 'react';
import { CATEGORIES } from '../data/Places';


interface Props {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
}


export const CategoryFilter: React.FC<Props> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {CATEGORIES.map((category) => {
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              isActive
                ? 'bg-sky-600 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

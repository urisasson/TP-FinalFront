

import React, { useState } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { RegisterModal } from './components/RegisterModal';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { PLACES_DATA } from './data/Places';

const MainContent: React.FC = () => {
  const { user } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filteredPlaces = PLACES_DATA.filter((place) => {
    const matchesCategory = selectedCategory === 'Todas' || place.category === selectedCategory;
    const matchesNameOnly = place.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
    return matchesCategory && matchesNameOnly;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-800">
      <Navbar />

      {!user && <RegisterModal />}

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-800">Buscador de locales en Buenos Aires</h1>
          <p className="text-xs text-gray-500">Filtrá por nombre de local o categoría.</p>
        </div>

        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        
        <div className="mt-6 bg-white p-4 rounded-lg border border-gray-200">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">
            Resultados encontrados ({filteredPlaces.length}):
          </h2>
          {filteredPlaces.length === 0 ? (
            <p className="text-xs text-gray-500">No hay coincidencias.</p>
          ) : (
            <ul className="divide-y divide-gray-100">
              {filteredPlaces.map((place) => (
                <li key={place.id} className="py-2 text-xs flex justify-between items-center">
                  <span className="font-medium text-gray-800">{place.name}</span>
                  <span className="text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{place.category}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

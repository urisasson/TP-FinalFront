import React, { useState, useMemo } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { RegisterModal } from './components/RegisterModal';
import { SearchBar } from './components/SearchBar';
import { CategoryFilter } from './components/CategoryFilter';
import { PlaceCard } from './components/PlaceCard';
import { ReservationModal } from './components/ReservationModal';
import { SuccessView } from './components/SuccessView';
import { ReservationCard } from './components/ReservationCard';
import { PLACES_DATA } from './data/Places';
import type { Place } from './types';


const MainContent: React.FC = () => {
  const { user, viewState, setViewState, reservations } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [selectedPlaceForModal, setSelectedPlaceForModal] = useState<Place | null>(null);


  // FILTRO: Filtra SOLO por categoría y por el NOMBRE del lugar
  const filteredPlaces = useMemo(() => {
    return PLACES_DATA.filter((place) => {
      const matchesCategory = selectedCategory === 'Todas' || place.category === selectedCategory;
      const matchesNameOnly = place.name.toLowerCase().includes(searchTerm.toLowerCase().trim());
      return matchesCategory && matchesNameOnly;
    });
  }, [searchTerm, selectedCategory]);


  return (
    <div className="min-h-screen bg-gray-100 flex flex-col font-sans text-gray-800">
      <Navbar />


      {!user && <RegisterModal />}


      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        {viewState === 'success' && <SuccessView />}


        {viewState === 'my-reservations' && (
          <div>
            <div className="flex justify-between items-center mb-5 pb-2 border-b border-gray-200">
              <h1 className="text-xl font-bold text-gray-800">Mis Reservas</h1>
              <button
                onClick={() => setViewState('main')}
                className="text-xs font-semibold text-sky-700 hover:underline"
              >
                ← Volver al catálogo
              </button>
            </div>


            {reservations.length === 0 ? (
              <div className="bg-white rounded-lg p-6 text-center text-gray-500 border border-gray-200 text-sm">
                No tenés reservas activas por el momento.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {reservations.map((res) => (
                  <ReservationCard key={res.id} reservation={res} />
                ))}
              </div>
            )}
          </div>
        )}


        {viewState === 'main' && (
          <div>
            <div className="mb-6">
              <h1 className="text-xl font-bold text-gray-800">Buscador de locales en Buenos Aires</h1>
              <p className="text-xs text-gray-500">Filtrá por nombre de local o categoría para reservar un turno.</p>
            </div>


            <SearchBar value={searchTerm} onChange={setSearchTerm} />
            <CategoryFilter
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
            />


            {filteredPlaces.length === 0 ? (
              <div className="text-center text-gray-500 py-8 bg-white rounded-lg border border-gray-200 text-sm">
                No hay resultados para "{searchTerm}" en la categoría seleccionada.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPlaces.map((place) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    searchTerm={searchTerm}
                    onReserve={(p) => setSelectedPlaceForModal(p)}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </main>


      {selectedPlaceForModal && (
        <ReservationModal
          place={selectedPlaceForModal}
          onClose={() => setSelectedPlaceForModal(null)}
        />
      )}
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

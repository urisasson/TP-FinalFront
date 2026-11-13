import React from 'react';
import type { Place } from '../types';


interface Props {
  place: Place;
  searchTerm: string;
  onReserve: (place: Place) => void;
}


export const PlaceCard: React.FC<Props> = ({ place, searchTerm, onReserve }) => {
  // Función para poner en negrita las coincidencias del buscador en el título
  const renderHighlightedName = (name: string, query: string) => {
    if (!query.trim()) return name;


    const regex = new RegExp(`(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = name.split(regex);


    return parts.map((part, index) =>
      part.toLowerCase() === query.trim().toLowerCase() ? (
        <span key={index} className="font-extrabold text-sky-900 bg-amber-200 px-0.5 rounded">
          {part}
        </span>
      ) : (
        part
      )
    );
  };


  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col justify-between hover:border-gray-300 transition">
      <div>
        <img
          src={place.image}
          alt={place.name}
          className="h-36 w-full object-cover"
        />
        <div className="p-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded">
              {place.category}
            </span>
            <span className="text-xs font-bold text-amber-600">
              ★ {place.rating}
            </span>
          </div>


          <h3 className="text-base font-medium text-gray-900 mb-1 leading-snug">
            {renderHighlightedName(place.name, searchTerm)}
          </h3>


          <p className="text-xs text-gray-500 mb-2">📍 {place.address}</p>
          <p className="text-xs text-gray-600 line-clamp-2">{place.description}</p>
        </div>
      </div>


      <div className="p-4 pt-0">
        <button
          onClick={() => onReserve(place)}
          className="w-full bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold py-2 rounded transition"
        >
          Reservar turno
        </button>
      </div>
    </div>
  );
};

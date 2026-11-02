import React from 'react';
import { useApp } from '../context/AppContext';


export const Navbar: React.FC = () => {
  const { user, reservations, setViewState, viewState } = useApp();


  const initialLetter = user?.firstName ? user.firstName.charAt(0).toUpperCase() : '?';


  return (
    <nav className="bg-sky-700 text-white shadow-sm sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <button
          onClick={() => setViewState('main')}
          className="text-xl font-bold tracking-tight hover:opacity-90 flex items-center gap-1.5"
        >
          <span>📍</span>
          <span>ReserBA</span>
        </button>


        {user && (
          <div className="flex items-center gap-3">
            <button
              onClick={() => setViewState(viewState === 'my-reservations' ? 'main' : 'my-reservations')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition ${
                viewState === 'my-reservations'
                  ? 'bg-sky-900 text-white'
                  : 'bg-sky-800 hover:bg-sky-600 text-sky-100'
              }`}
            >
              Mis reservas ({reservations.length})
            </button>


            <div className="flex items-center gap-2 pl-2 border-l border-sky-600">
              <div className="w-8 h-8 rounded-full bg-white text-sky-800 font-bold flex items-center justify-center text-sm shadow">
                {initialLetter}
              </div>
              <span className="text-sm font-normal hidden sm:inline">
                Hola, <strong>{user.firstName}</strong>
              </span>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

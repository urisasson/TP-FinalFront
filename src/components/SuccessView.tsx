import React from 'react';
import { useApp } from '../context/AppContext';


export const SuccessView: React.FC = () => {
  const { setViewState } = useApp();


  return (
    <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center">
      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl shadow-inner font-bold">
        ✓
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">¡Reserva completada!</h2>
      <p className="text-gray-600 mb-6 text-sm">
        Tu turno ha sido agendado con éxito. Podés consultar tus turnos activos en "Mis reservas".
      </p>
      <button
        onClick={() => setViewState('main')}
        className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 rounded-lg transition"
      >
        Volver atrás
      </button>
    </div>
  );
};

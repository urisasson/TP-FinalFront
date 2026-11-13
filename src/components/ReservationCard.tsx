import React from 'react';
import type { Reservation } from '../types';
import { useApp } from '../context/AppContext';

interface Props {
  reservation: Reservation;
}

export const ReservationCard: React.FC<Props> = ({ reservation }) => {
  const { cancelReservation } = useApp();

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm flex flex-col justify-between">
      <div>
        <h3 className="text-base font-bold text-gray-800 mb-1">{reservation.placeName}</h3>
        <p className="text-xs text-gray-500 mb-3">A nombre de: <strong>{reservation.userName}</strong></p>
        
        <div className="bg-gray-50 rounded p-2.5 space-y-1 text-xs text-gray-700 mb-3">
          <p>📅 <strong>Fecha:</strong> {reservation.date}</p>
          <p>⏰ <strong>Hora:</strong> {reservation.time}</p>
          {reservation.notes && (
            <p className="text-gray-500 italic mt-1">"{reservation.notes}"</p>
          )}
        </div>
      </div>

      <button
        onClick={() => cancelReservation(reservation.id)}
        className="text-xs text-red-600 border border-red-200 hover:bg-red-50 py-1 px-2.5 rounded font-medium transition self-end"
      >
        Cancelar reserva
      </button>
    </div>
  );
};
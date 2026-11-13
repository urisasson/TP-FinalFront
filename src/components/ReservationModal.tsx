import React, { useState } from 'react';
import type { Place } from '../types';
import { useApp } from '../context/AppContext';

interface Props {
  place: Place;
  onClose: () => void;
}

export const ReservationModal: React.FC<Props> = ({ place, onClose }) => {
  const { user, addReservation } = useApp();

  const [userName, setUserName] = useState(user ? `${user.firstName} ${user.lastName}` : '');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !date.trim() || !time.trim()) return;

    addReservation({
      placeId: place.id,
      placeName: place.name,
      userName: userName.trim(),
      date: date.trim(),
      time: time.trim(),
      notes: notes.trim()
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-md max-w-md w-full p-6 border border-gray-200">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">Reservar en {place.name}</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-lg font-bold"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Nombre completo
            </label>
            <input
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-sky-600"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Fecha
              </label>
              <input
                type="text"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-sky-600"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Hora
              </label>
              <input
                type="text"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-sky-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Descripción / Notas
            </label>
            <textarea
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-sky-600"
            />
          </div>

          <div className="flex gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-2 border border-gray-300 rounded text-gray-600 text-xs font-semibold hover:bg-gray-50 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="w-1/2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold py-2 rounded transition"
            >
              Confirmar reserva
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
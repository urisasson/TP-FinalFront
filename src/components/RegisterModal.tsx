import React, { useState } from 'react';
import { useApp } from '../context/AppContext';


export const RegisterModal: React.FC = () => {
  const { setUser } = useApp();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim() || !password.trim()) return;
    setUser({ firstName: firstName.trim(), lastName: lastName.trim() });
  };


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-md max-w-sm w-full p-6 border border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 mb-1">Registro - ReserBA</h2>
        <p className="text-gray-500 text-xs mb-5">Ingresá tus datos para acceder al sistema.</p>
       
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Nombre</label>
            <input
              type="text"
              required
              placeholder="Ej. Juan"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-sky-600"
            />
          </div>


          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Apellido</label>
            <input
              type="text"
              required
              placeholder="Ej. Pérez"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-sky-600"
            />
          </div>


          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">Contraseña</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-1.5 text-sm border border-gray-300 rounded focus:outline-none focus:border-sky-600"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-sky-700 hover:bg-sky-800 text-white font-medium py-2 rounded text-sm transition mt-2"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

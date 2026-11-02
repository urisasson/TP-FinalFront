import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User, Reservation } from '../types';


interface AppContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  reservations: Reservation[];
  addReservation: (reservation: Omit<Reservation, 'id'>) => void;
  cancelReservation: (id: string) => void;
  viewState: 'main' | 'my-reservations' | 'success';
  setViewState: (view: 'main' | 'my-reservations' | 'success') => void;
}


const AppContext = createContext<AppContextType | undefined>(undefined);


export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('reserva_ba_user');
    return saved ? JSON.parse(saved) : null;
  });


  const [reservations, setReservations] = useState<Reservation[]>(() => {
    const saved = localStorage.getItem('reserva_ba_reservations');
    return saved ? JSON.parse(saved) : [];
  });


  const [viewState, setViewState] = useState<'main' | 'my-reservations' | 'success'>('main');


  useEffect(() => {
    if (user) {
      localStorage.setItem('reserva_ba_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('reserva_ba_user');
    }
  }, [user]);


  useEffect(() => {
    localStorage.setItem('reserva_ba_reservations', JSON.stringify(reservations));
  }, [reservations]);


  const addReservation = (data: Omit<Reservation, 'id'>) => {
    const newRes: Reservation = {
      ...data,
      id: Date.now().toString()
    };
    setReservations(prev => [newRes, ...prev]);
    setViewState('success');
  };


  const cancelReservation = (id: string) => {
    setReservations(prev => prev.filter(r => r.id !== id));
  };


  return (
    <AppContext.Provider value={{
      user,
      setUser,
      reservations,
      addReservation,
      cancelReservation,
      viewState,
      setViewState
    }}>
      {children}
    </AppContext.Provider>
  );
};


export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp debe usarse dentro de AppProvider');
  return context;
};

import type { Place } from '../types';


export const CATEGORIES = [
  'Todas',
  'Cafeterías',
  'Barberías',
  'Librerías',
  'Clases',
  'Estética'
];


export const PLACES_DATA: Place[] = [
  {
    id: '1',
    name: 'Café San Telmo',
    category: 'Cafeterías',
    address: 'Defensa 1100, San Telmo',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&q=80',
    description: 'Café de especialidad en el corazón del barrio histórico.',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Liniers Coffee Roasters',
    category: 'Cafeterías',
    address: 'Av. Rivadavia 10800, Liniers',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=600&q=80',
    description: 'Cafetería de autor con los mejores granos tostados en vivo.',
    rating: 4.7
  },
  {
    id: '3',
    name: 'Barbería Palermo Soho',
    category: 'Barberías',
    address: 'Honduras 4800, Palermo',
    image: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80',
    description: 'Cortes clásicos y modernos con atención personalizada.',
    rating: 4.9
  },
  {
    id: '4',
    name: 'La Recoleta Barber Club',
    category: 'Barberías',
    address: 'Av. Callao 1500, Recoleta',
    image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=600&q=80',
    description: 'Estilo vintage, perfilado de barba y bebidas de cortesía.',
    rating: 4.6
  },
  {
    id: '5',
    name: 'Librería El Ateneo Grand Splendid',
    category: 'Librerías',
    address: 'Av. Santa Fe 1860, Recoleta',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80',
    description: 'Una de las librerías más hermosas del mundo en un antiguo teatro.',
    rating: 5.0
  },
  {
    id: '6',
    name: 'Librería Eterna Cadencia',
    category: 'Librerías',
    address: 'Honduras 5574, Palermo',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80',
    description: 'Catálogo de literatura independiente con patio de lectura.',
    rating: 4.8
  },
  {
    id: '7',
    name: 'Tango & Baile San Cristóbal',
    category: 'Clases',
    address: 'Av. Jujuy 800, San Cristóbal',
    image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80',
    description: 'Clases grupales e individuales de tango y ritmos urbanos.',
    rating: 4.7
  },
  {
    id: '8',
    name: 'Taller de Cerámica Almagro',
    category: 'Clases',
    address: 'Av. Corrientes 3900, Almagro',
    image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=600&q=80',
    description: 'Aprende alfarería y modelado en arcilla paso a paso.',
    rating: 4.9
  },
  {
    id: '9',
    name: 'Spa & Estética Belgrano',
    category: 'Estética',
    address: 'Cabildo 2200, Belgrano',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    description: 'Tratamientos faciales, masajes relajantes y cosmetología.',
    rating: 4.8
  },
  {
    id: '10',
    name: 'Nails & Beauty Caballito',
    category: 'Estética',
    address: 'Av. Rivadavia 5100, Caballito',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80',
    description: 'Manicuría rusa, uñas esculpidas y perfilado de pestañas.',
    rating: 4.6
  }
];

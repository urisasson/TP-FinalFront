export interface Place {
    id: string;
    name: string;
    category: string;
    address: string;
    image: string;
    description: string;
    rating: number;
  }
 
  export interface Reservation {
    id: string;
    placeId: string;
    placeName: string;
    userName: string;
    date: string;
    time: string;
    notes: string;
  }
 
  export interface User {
    firstName: string;
    lastName: string;
  }

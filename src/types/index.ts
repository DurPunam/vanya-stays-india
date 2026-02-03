export interface Resort {
  id: string;
  name: string;
  location: {
    city: string;
    state: string;
    pincode: string;
  };
  images: string[];
  pricePerNight: number;
  rating: number;
  reviewCount: number;
  amenities: string[];
  propertyType: 'villa' | 'beach-resort' | 'boutique' | 'heritage' | 'mountain-retreat';
  badges: string[];
  description: string;
  highlights: string[];
  roomTypes: RoomType[];
  isWishlisted?: boolean;
}

export interface RoomType {
  id: string;
  name: string;
  price: number;
  maxGuests: number;
  bedType: string;
  amenities: string[];
  image: string;
}

export interface Destination {
  id: string;
  name: string;
  state: string;
  image: string;
  resortCount: number;
  tagline: string;
}

export interface Review {
  id: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  date: string;
  comment: string;
  tripType: string;
}

export interface SearchFilters {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  rooms: number;
  priceRange: [number, number];
  rating: number | null;
  amenities: string[];
  propertyTypes: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'traveler' | 'partner' | 'admin';
  avatar?: string;
}

export interface Booking {
  id: string;
  resortId: string;
  resortName: string;
  userId: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  totalAmount: number;
  gstAmount: number;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  createdAt: string;
}

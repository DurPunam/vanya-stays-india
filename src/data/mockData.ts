import { Resort, Destination, Review } from '@/types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Goa',
    state: 'Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80',
    resortCount: 156,
    tagline: 'Beaches & Nightlife'
  },
  {
    id: '2',
    name: 'Manali',
    state: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
    resortCount: 89,
    tagline: 'Mountain Magic'
  },
  {
    id: '3',
    name: 'Jaipur',
    state: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80',
    resortCount: 124,
    tagline: 'Royal Heritage'
  },
  {
    id: '4',
    name: 'Udaipur',
    state: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=800&q=80',
    resortCount: 78,
    tagline: 'City of Lakes'
  },
  {
    id: '5',
    name: 'Munnar',
    state: 'Kerala',
    image: 'https://images.unsplash.com/photo-1559888292-34e19cfb46f5?w=800&q=80',
    resortCount: 67,
    tagline: 'Tea Gardens Paradise'
  },
  {
    id: '6',
    name: 'Ooty',
    state: 'Tamil Nadu',
    image: 'https://images.unsplash.com/photo-1620766182969-dbb1f58c46f8?w=800&q=80',
    resortCount: 54,
    tagline: 'Queen of Hills'
  },
  {
    id: '7',
    name: 'Coorg',
    state: 'Karnataka',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    resortCount: 43,
    tagline: 'Scotland of India'
  },
  {
    id: '8',
    name: 'Pondicherry',
    state: 'Puducherry',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    resortCount: 38,
    tagline: 'French Riviera'
  }
];

export const resorts: Resort[] = [
  {
    id: '1',
    name: 'SeaBreeze Beach Resort',
    location: { city: 'Calangute', state: 'Goa', pincode: '403516' },
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&q=80'
    ],
    pricePerNight: 8500,
    rating: 4.8,
    reviewCount: 324,
    amenities: ['Pool', 'Spa', 'Beach Access', 'Restaurant', 'WiFi', 'Gym', 'Bar'],
    propertyType: 'beach-resort',
    badges: ['Free Cancellation', 'Breakfast Included', 'Sea View'],
    description: 'Experience the perfect blend of luxury and coastal charm at SeaBreeze Beach Resort. Located just steps from the golden sands of Calangute Beach, this stunning property offers breathtaking ocean views and world-class amenities.',
    highlights: ['Private beach access', 'Infinity pool overlooking the Arabian Sea', 'Award-winning spa', 'Multi-cuisine restaurant'],
    roomTypes: [
      { id: 'r1', name: 'Deluxe Sea View', price: 8500, maxGuests: 2, bedType: 'King', amenities: ['Sea View', 'Balcony', 'Mini Bar'], image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80' },
      { id: 'r2', name: 'Premium Suite', price: 14500, maxGuests: 4, bedType: 'King + Twin', amenities: ['Sea View', 'Living Room', 'Jacuzzi'], image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80' }
    ]
  },
  {
    id: '2',
    name: 'Royal Haveli Heritage',
    location: { city: 'Jaipur', state: 'Rajasthan', pincode: '302001' },
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80'
    ],
    pricePerNight: 12000,
    rating: 4.9,
    reviewCount: 189,
    amenities: ['Heritage Tours', 'Spa', 'Restaurant', 'Cultural Shows', 'WiFi', 'Pool'],
    propertyType: 'heritage',
    badges: ['Heritage Property', 'Popular with Couples'],
    description: 'Step back in time at Royal Haveli Heritage, a magnificently restored 18th-century mansion that captures the essence of Rajasthani royalty.',
    highlights: ['Original Rajasthani architecture', 'Rooftop dining with fort views', 'Traditional cultural performances', 'Curated heritage walks'],
    roomTypes: [
      { id: 'r1', name: 'Heritage Room', price: 12000, maxGuests: 2, bedType: 'King', amenities: ['Fort View', 'Antique Decor'], image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80' },
      { id: 'r2', name: 'Maharaja Suite', price: 25000, maxGuests: 4, bedType: 'King', amenities: ['Private Terrace', 'Butler Service'], image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80' }
    ]
  },
  {
    id: '3',
    name: 'Backwater Bliss',
    location: { city: 'Alleppey', state: 'Kerala', pincode: '688001' },
    images: [
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=800&q=80',
      'https://images.unsplash.com/photo-1585543805890-6051f7829f98?w=800&q=80'
    ],
    pricePerNight: 9800,
    rating: 4.7,
    reviewCount: 267,
    amenities: ['Houseboat', 'Ayurveda Spa', 'Restaurant', 'Kayaking', 'WiFi', 'Yoga'],
    propertyType: 'boutique',
    badges: ['Eco-Friendly', 'Free Cancellation', 'Great for Weekend from Bengaluru'],
    description: 'Discover serenity at Backwater Bliss, where the gentle rhythm of Kerala\'s backwaters creates the perfect escape from city life.',
    highlights: ['Private houseboat experiences', 'Authentic Ayurvedic treatments', 'Farm-to-table Kerala cuisine', 'Sunrise yoga sessions'],
    roomTypes: [
      { id: 'r1', name: 'Waterfront Cottage', price: 9800, maxGuests: 2, bedType: 'Queen', amenities: ['Lake View', 'Private Deck'], image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80' }
    ]
  },
  {
    id: '4',
    name: 'Hillside Retreat Manali',
    location: { city: 'Manali', state: 'Himachal Pradesh', pincode: '175131' },
    images: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
      'https://images.unsplash.com/photo-1609766418204-94aae0ecfdfc?w=800&q=80'
    ],
    pricePerNight: 7500,
    rating: 4.6,
    reviewCount: 412,
    amenities: ['Mountain View', 'Bonfire', 'Restaurant', 'Trekking', 'WiFi', 'Parking'],
    propertyType: 'mountain-retreat',
    badges: ['Mountain View', 'Adventure Activities', 'Pet Friendly'],
    description: 'Nestled in the majestic Himalayas, Hillside Retreat offers panoramic views of snow-capped peaks and lush valleys.',
    highlights: ['360° mountain views', 'Guided treks to hidden waterfalls', 'Cozy bonfire evenings', 'Local Himachali cuisine'],
    roomTypes: [
      { id: 'r1', name: 'Valley View Room', price: 7500, maxGuests: 2, bedType: 'King', amenities: ['Mountain View', 'Heater'], image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80' },
      { id: 'r2', name: 'Family Cottage', price: 12000, maxGuests: 4, bedType: 'Twin King', amenities: ['Garden', 'Fireplace'], image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&q=80' }
    ]
  },
  {
    id: '5',
    name: 'Lake Palace Udaipur',
    location: { city: 'Udaipur', state: 'Rajasthan', pincode: '313001' },
    images: [
      'https://images.unsplash.com/photo-1524230507669-5ff97982bb5e?w=800&q=80',
      'https://images.unsplash.com/photo-1549144511-f099e773c147?w=800&q=80'
    ],
    pricePerNight: 22000,
    rating: 4.9,
    reviewCount: 156,
    amenities: ['Lake View', 'Spa', 'Fine Dining', 'Pool', 'WiFi', 'Boat Transfer'],
    propertyType: 'heritage',
    badges: ['Luxury', 'Iconic Property', 'Honeymoon Special'],
    description: 'Float in luxury at Lake Palace, an iconic white marble wonder rising from the waters of Lake Pichola.',
    highlights: ['Boat arrival experience', 'Sunset dinners on the lake', 'Royal spa treatments', 'Private terrace suites'],
    roomTypes: [
      { id: 'r1', name: 'Lake View Suite', price: 22000, maxGuests: 2, bedType: 'King', amenities: ['Lake View', 'Butler'], image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80' }
    ]
  },
  {
    id: '6',
    name: 'Coorg Coffee Estate Villa',
    location: { city: 'Madikeri', state: 'Karnataka', pincode: '571201' },
    images: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
      'https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&q=80'
    ],
    pricePerNight: 11500,
    rating: 4.8,
    reviewCount: 198,
    amenities: ['Coffee Tours', 'Nature Trails', 'Spa', 'Restaurant', 'WiFi', 'Pool'],
    propertyType: 'villa',
    badges: ['Private Villa', 'Coffee Estate', 'Great for Weekend from Bengaluru'],
    description: 'Wake up to the aroma of fresh coffee at this stunning villa set amidst 50 acres of working coffee plantation.',
    highlights: ['Private coffee estate tours', 'Plunge pool with valley views', 'Nature walks with expert guides', 'Farm-fresh Coorgi cuisine'],
    roomTypes: [
      { id: 'r1', name: 'Estate Villa', price: 11500, maxGuests: 4, bedType: 'Twin King', amenities: ['Private Pool', 'Garden'], image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&q=80' }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    userName: 'Priya Sharma',
    rating: 5,
    date: '2024-01-15',
    comment: 'Absolutely magical stay! The sunrise views from our room were breathtaking. The staff went above and beyond to make our anniversary special.',
    tripType: 'Couple'
  },
  {
    id: '2',
    userName: 'Rajesh Kumar',
    rating: 4,
    date: '2024-01-10',
    comment: 'Great location and excellent amenities. The breakfast spread was impressive with local delicacies. Would definitely recommend for families.',
    tripType: 'Family'
  },
  {
    id: '3',
    userName: 'Ananya Patel',
    rating: 5,
    date: '2024-01-05',
    comment: 'Perfect weekend getaway from Bengaluru! The spa treatments were rejuvenating and the food was authentic and delicious.',
    tripType: 'Solo'
  },
  {
    id: '4',
    userName: 'Vikram Singh',
    rating: 5,
    date: '2023-12-28',
    comment: 'One of the best resorts we\'ve stayed at in India. The attention to detail and personalized service made all the difference.',
    tripType: 'Business'
  }
];

export const amenityIcons: Record<string, string> = {
  'Pool': '🏊',
  'Spa': '💆',
  'Restaurant': '🍽️',
  'WiFi': '📶',
  'Gym': '💪',
  'Bar': '🍸',
  'Beach Access': '🏖️',
  'Mountain View': '🏔️',
  'Lake View': '🌊',
  'Heritage Tours': '🏛️',
  'Cultural Shows': '🎭',
  'Houseboat': '🛶',
  'Ayurveda Spa': '🧘',
  'Kayaking': '🚣',
  'Yoga': '🧘‍♀️',
  'Bonfire': '🔥',
  'Trekking': '🥾',
  'Parking': '🅿️',
  'Fine Dining': '🥂',
  'Boat Transfer': '⛵',
  'Coffee Tours': '☕',
  'Nature Trails': '🌿',
  'Pet Friendly': '🐕'
};

export const indianCities = [
  'Goa', 'Manali', 'Jaipur', 'Udaipur', 'Munnar', 'Ooty', 'Coorg', 'Pondicherry',
  'Shimla', 'Darjeeling', 'Agra', 'Varanasi', 'Rishikesh', 'Andaman', 'Lakshadweep',
  'Jodhpur', 'Kochi', 'Hampi', 'Leh', 'Ladakh', 'Nainital', 'Mussoorie', 'Lonavala'
];

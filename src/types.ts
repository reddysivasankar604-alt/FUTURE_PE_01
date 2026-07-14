/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'biryani' | 'starter' | 'lunchbox' | 'combo' | 'dessert';
  isVeg: boolean;
  isPopular?: boolean;
  spiceLevel: 'Mild' | 'Medium' | 'Spicy' | 'Hyderabad Hot';
  serves: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Family' | 'Student' | 'Office Employee' | 'Tourist';
  quote: string;
  rating: number;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Reservation {
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  audienceType: 'Family' | 'Student' | 'Office Employee' | 'Tourist';
  specialRequests?: string;
}

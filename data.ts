/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem, Testimonial, FAQ } from './types';

export const menuItems: MenuItem[] = [
  // Biryani Category
  {
    id: 'biryani-1',
    name: 'Royal Hyderabadi Mutton Dum Biryani',
    description: 'Our signature dish. Prime cuts of tender goat meat layered with premium long-grain Basmati rice, hand-ground secret spices, and fresh mint, slow-cooked in a sealed clay handi over fire.',
    price: 420,
    category: 'biryani',
    isVeg: false,
    isPopular: true,
    spiceLevel: 'Hyderabad Hot',
    serves: '2 adults'
  },
  {
    id: 'biryani-2',
    name: 'Kashmiri Saffron Chicken Biryani',
    description: 'Fragrant and layered. Marinated chicken slow-cooked with pure Kashmiri saffron, cardamom, rose water, and caramelized onions. Rich in flavor yet moderate on heat.',
    price: 380,
    category: 'biryani',
    isVeg: false,
    spiceLevel: 'Medium',
    serves: '2 adults'
  },
  {
    id: 'biryani-3',
    name: 'Nizami Paneer Tikka Dum Biryani',
    description: 'A vegetarian masterpiece. Tandoor-roasted paneer cubes layered with aromatic spices, fresh coriander, and basmati rice, finished with a touch of saffron milk.',
    price: 320,
    category: 'biryani',
    isVeg: true,
    isPopular: true,
    spiceLevel: 'Medium',
    serves: '2 adults'
  },

  // Starters Category
  {
    id: 'starter-1',
    name: 'Fresh Spice Signature Lamb Seekh Kebab',
    description: 'Succulent minced lamb mixed with fresh green chilies, cilantro, ginger, and a proprietary blend of Hyderabad spices, skewered and charred to perfection in our clay tandoor.',
    price: 310,
    category: 'starter',
    isVeg: false,
    isPopular: true,
    spiceLevel: 'Spicy',
    serves: '2-3 guests'
  },
  {
    id: 'starter-2',
    name: 'Fiery Guntur Chilli Chicken',
    description: 'A hot-seller for spice lovers. Juicy chicken chunks tossed in deep-fried curry leaves, crushed garlic, and highly aromatic sun-dried Guntur red chilies.',
    price: 280,
    category: 'starter',
    isVeg: false,
    spiceLevel: 'Spicy',
    serves: '2 guests'
  },
  {
    id: 'starter-3',
    name: 'Charred Tandoori Broccoli & Babycorn',
    description: 'Crunchy florets and sweet babycorn marinated in a spiced hung yogurt mix with roasted chickpea flour, grilled to a smoky golden crust.',
    price: 240,
    category: 'starter',
    isVeg: true,
    spiceLevel: 'Mild',
    serves: '2 guests'
  },

  // Office Lunchboxes Category (Fast, tidy, complete desk meal)
  {
    id: 'lunchbox-1',
    name: 'Express Nizami Chicken Lunchbox',
    description: 'Designed for a productive desk lunch. Features boneless Butter Chicken, aromatic Jeera Rice, one soft butter paratha, cool mint raita, and a fresh gulab jamun.',
    price: 220,
    category: 'lunchbox',
    isVeg: false,
    isPopular: true,
    spiceLevel: 'Medium',
    serves: '1 person'
  },
  {
    id: 'lunchbox-2',
    name: 'Express Garden Veg Lunchbox',
    description: 'A delicious, balanced midday meal. Soft Paneer Butter Masala, yellow Dal Fry, steaming Basmati rice, one garlic paratha, fresh cucumber salad, and gulab jamun.',
    price: 190,
    category: 'lunchbox',
    isVeg: true,
    spiceLevel: 'Mild',
    serves: '1 person'
  },

  // Student Combos Category (Pocket-friendly, highly satisfying)
  {
    id: 'combo-1',
    name: 'Student Biryani & Coke Special',
    description: 'Unbeatable value. A generous single portion of our legendary Chicken Biryani, boiled egg, creamy raita, gravy (Salan), and a chilled 250ml Coca-Cola.',
    price: 180,
    category: 'combo',
    isVeg: false,
    isPopular: true,
    spiceLevel: 'Spicy',
    serves: '1 student'
  },
  {
    id: 'combo-2',
    name: 'Campus Dal Makhani & Laccha Combo',
    description: 'Heavy on comfort, light on the wallet. Creamy slow-cooked black lentils (Dal Makhani), two crispy flaky Laccha parathas, sliced onions, and a fresh lemon slice.',
    price: 150,
    category: 'combo',
    isVeg: true,
    spiceLevel: 'Mild',
    serves: '1 student'
  },

  // Tourist Specials
  {
    id: 'combo-3',
    name: 'The Tourist "Nizami Legacy" Tasting Platter',
    description: 'Perfect for first-time visitors! A curated mini-feast featuring a small portion of Mutton Dum Biryani, Chicken Tikka, Malai Paneer, garlic naan, and our signature apricots dessert. Comes with customized spice level.',
    price: 490,
    category: 'combo',
    isVeg: false,
    spiceLevel: 'Medium',
    serves: '1 explorer'
  },

  // Desserts Category
  {
    id: 'dessert-1',
    name: 'Royal Qubani Ka Meetha with Saffron Ice Cream',
    description: 'The definitive Hyderabadi dessert. Stewed dried apricots flavored with rose-water, served warm with a rich scoop of house-made saffron and pistachio ice cream.',
    price: 180,
    category: 'dessert',
    isVeg: true,
    isPopular: true,
    spiceLevel: 'Mild',
    serves: '1-2 guests'
  },
  {
    id: 'dessert-2',
    name: 'Double Ka Meetha (Bread Pudding)',
    description: 'A royal heritage recipe. Fried bread slices soaked in cardamom-infused milk and sugar syrup, loaded with roasted cashew nuts and dry fruits.',
    price: 150,
    category: 'dessert',
    isVeg: true,
    spiceLevel: 'Mild',
    serves: '1-2 guests'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'The Hyderabad Family (Dinesh & Priya Reddy)',
    role: 'Family',
    quote: 'Finding a restaurant that pleases our grandparents, satisfies our spicy cravings, and keeps the kids happy is tough. Fresh Spice is our undisputed Sunday ritual. The family-style seating is spacious and the Mutton Biryani is exactly like the legacy recipes we grew up with!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-2',
    name: 'Rahul Verma (IIIT Hyderabad Student)',
    role: 'Student',
    quote: 'Between coding labs and late-night study sessions, Fresh Spice is our lifeline. Their Student Biryani Special is pocket-friendly and absolutely massive. Plus, showing our student ID gets us a neat 15% discount on weekdays. It is the ultimate student hangout!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-3',
    name: 'Neha Sen (Software Architect, HITEC City)',
    role: 'Office Employee',
    quote: 'Our team orders the Express Lunchboxes almost every week. The packaging is absolutely leaf-proof and clean, fitting easily on a desk. Getting warm butter chicken, paratha, and a gulab jamun delivered in under 15 minutes is a game-changer during busy project releases.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
  },
  {
    id: 'test-4',
    name: 'Marc & Clara (Travel Bloggers, Munich)',
    role: 'Tourist',
    quote: 'We were highly warned about Hyderabad’s fiery spices, so we were nervous. But the head chef at Fresh Spice personally customized our Nizami Platter to a mild-medium level. The smoky flavor of the Seekh Kebabs and the fragrance of the saffron rice were the highlights of our India tour!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200'
  }
];

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Where exactly are you located in Hyderabad, and is parking available?',
    answer: 'We are prime-located on Jubilee Hills Road No. 36, near the Metro Station. We provide free valet parking and a spacious driveway, ensuring families and office groups can park easily even during busy weekend hours.',
    category: 'Location & Parking'
  },
  {
    id: 'faq-2',
    question: 'How do you cater to different spice tolerance levels, especially for tourists?',
    answer: 'We understand Hyderabadi food can be highly fiery! That is why we offer adjustable spice levels—Mild, Medium, Spicy, and authentic Hyderabad Hot. Our waitstaff will gladly consult you and customize your order, ensuring a comfortable experience for foreign and local tourists.',
    category: 'Spice Control'
  },
  {
    id: 'faq-3',
    question: 'Do you offer special deals for students, and how do we redeem them?',
    answer: 'Yes! Students from local universities (IIIT, ISB, Osmania, etc.) enjoy a flat 15% discount on our entire dine-in menu from Monday to Thursday. Just present your physical or digital university ID card before placing your order.',
    category: 'Student Discounts'
  },
  {
    id: 'faq-4',
    question: 'What is the delivery time and bulk ordering process for local offices?',
    answer: 'Our Express Office Lunchboxes are delivered within 15–20 minutes to IT hubs across Gachibowli, HITEC City, and Madhapur. For bulk meetings, corporate training, or board lunches, you can place orders directly on our portal or call us 2 hours in advance for customized billing and priority delivery.',
    category: 'Office & Corporate'
  },
  {
    id: 'faq-5',
    question: 'Do you offer pure vegetarian options?',
    answer: 'Absolutely! Fresh Spice treats veg and non-veg with equal reverence. We maintain separate preparation stations and utensils in our kitchen. From our clay-roasted Nizami Paneer Tikka Biryani to charred broccoli and dal makhani, vegetarian diners have plenty of rich options to choose from.',
    category: 'Dietary Preferences'
  }
];

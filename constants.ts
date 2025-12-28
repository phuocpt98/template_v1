
import { Product, TeamMember } from './types';

export const TEAM_INFO: TeamMember[] = [
  {
    name: 'Nguyen An',
    role: 'Lead Designer',
    avatar: 'https://picsum.photos/seed/an/200/200',
    bio: 'Specialist in UI/UX and minimal aesthetic web designs.'
  },
  {
    name: 'Tran Binh',
    role: 'Fullstack Architect',
    avatar: 'https://picsum.photos/seed/binh/200/200',
    bio: 'Expert in high-performance static sites and cloud integrations.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'wedding-eternity',
    title: 'Eternity Wedding - Premium Digital Invite',
    description: 'Thiệp cưới kỹ thuật số cao cấp với đầy đủ tính năng: Đếm ngược, Dòng kỷ niệm, Gallery ảnh và Bản đồ dẫn đường.',
    category: 'Wedding',
    thumbnail: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop',
    price: 49,
    demoUrl: 'products/wedding-eternity/index.html',
    features: ['Lịch đếm ngược thời gian thực', 'Dòng kỷ niệm Our Story', 'Gallery ảnh tương tác', 'Bản đồ vị trí chính xác', 'Âm nhạc nền lãng mạn'],
    tags: ['Luxury', 'Animation', 'Mobile First']
  },
  {
    id: 'hotel-grand',
    title: 'Grand Hotel Booking',
    description: 'Modern hotel showcase with room management and booking inquiries.',
    category: 'Hotel',
    thumbnail: 'https://picsum.photos/seed/hotel1/800/600',
    price: 99,
    demoUrl: 'products/hotel-grand/index.html',
    features: ['Room Catalog', 'Check-in/out form', 'Review System', 'Multilingual'],
    tags: ['Business', 'Premium', 'Clean']
  },
  {
    id: 'portfolio-creative',
    title: 'Creative Studio',
    description: 'Breathtaking portfolio for photographers and digital artists.',
    category: 'Portfolio',
    thumbnail: 'https://picsum.photos/seed/port1/800/600',
    price: 39,
    demoUrl: 'products/portfolio-creative/index.html',
    features: ['Case Studies', 'Filterable Grid', 'Smooth Scroll', 'Contact Integration'],
    tags: ['Visual', 'Minimalist', 'Fast']
  },
  {
    id: 'rest-gourmet',
    title: 'Gourmet Dining',
    description: 'Appetizing restaurant template with digital menu and reservation.',
    category: 'Restaurant',
    thumbnail: 'https://picsum.photos/seed/rest1/800/600',
    price: 59,
    demoUrl: 'products/rest-gourmet/index.html',
    features: ['Digital Menu', 'Online Reservation', 'Social Integration', 'Location Map'],
    tags: ['Food', 'Modern', 'Responsive']
  },
  {
    id: 'biz-corporate',
    title: 'Corporate Pro',
    description: 'Solid business landing page to build trust and capture leads.',
    category: 'Business',
    thumbnail: 'https://picsum.photos/seed/biz1/800/600',
    price: 79,
    demoUrl: 'products/biz-corporate/index.html',
    features: ['Service Listing', 'Team Section', 'Testimonials', 'Lead Form'],
    tags: ['Professional', 'Corporate', 'Secure']
  }
];

export const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/AKfycbzexample/exec';

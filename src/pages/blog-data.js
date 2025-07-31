// src/pages/blog-data.js
export const blogs = [
  {
    id: 'goa-trip',
    title: 'Exploring the Beaches of Goa',
    excerpt: 'A peaceful solo trip...',
    image: '/images/goa-trip.jpeg', // used in blog card
    images: [ // used in detail view carousel
      '/images/goa-trip.jpeg',
      '/images/goa-trip.jpeg',
      '/images/goa-trip.jpeg',
    ],
    content: `Spent 4 days in South Goa...`,
  },
  {
    id: 'kashmir-snow',
    title: 'Snowy Adventures in Kashmir',
    excerpt: 'Kashmir in winter is a wonderland. Gulmarg, snowboarding and more!',
    image: 'https://source.unsplash.com/400x250/?kashmir,snow',
    images: [ // used in detail view carousel
      '/images/goa1.jpg',
      '/images/goa2.jpg',
      '/images/goa3.jpg',
    ],
    content: `Traveled with friends to Srinagar, Gulmarg, and Sonamarg.
    Tried snowboarding and had the most scenic shikara ride. Will return for a summer trek!`,
  }
];

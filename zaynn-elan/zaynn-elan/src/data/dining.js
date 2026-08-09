import { IMAGES } from './images.js';

export const DINING = [
  {
    id: 'elan',
    name: 'ÉLAN',
    kind: 'Signature Restaurant',
    cuisine: 'Contemporary Fine Dining',
    hours: 'Dinner · 6:30 PM – 11:00 PM',
    description:
      'A seasonal tasting menu built around regional produce, paired with a considered wine list and unhurried, precise service.',
    longDescription:
      'ÉLAN is the house of record for a considered evening — a compact, seasonal tasting menu shaped around what is best that week, plated with restraint and served at an unhurried pace. The wine list favours small growers over big names, and every course is designed to be discussed, not rushed through.',
    image: { src: IMAGES.elanTable, alt: 'ÉLAN restaurant table setting with warm ambient lighting' },
    ctaLabel: 'Reserve a Table',
  },
  {
    id: 'noir',
    name: 'NOIR',
    kind: 'Cocktail Lounge',
    cuisine: 'Cocktails & Late-Night Fare',
    hours: 'Evenings · 6:00 PM – 1:00 AM',
    description:
      'An intimate room of low light and low voices, where a small plates menu meets a cocktail list built on rare spirits.',
    longDescription:
      'NOIR keeps its lights low and its pours generous. The back bar is stocked with spirits chosen for character rather than name recognition, and the small plates menu is built to share across a long conversation. Booths are limited — reservations are recommended after 8 PM.',
    image: { src: IMAGES.noirBar, alt: 'NOIR cocktail lounge bar shelf with bottles and warm lighting' },
    ctaLabel: 'Reserve a Table',
  },
  {
    id: 'terrace',
    name: 'TERRACE',
    kind: 'All-Day Dining',
    cuisine: 'Mediterranean-Inflected, All Day',
    hours: 'Daily · 7:00 AM – 10:30 PM',
    description:
      'Open-air dining above the city, from a considered breakfast to a relaxed dinner service beneath the evening sky.',
    longDescription:
      'TERRACE runs from the first coffee of the day to the last course of the evening, open to the sky and set above the city. Mornings favour a considered breakfast menu; by dusk the same tables turn toward a relaxed, shareable dinner service with panoramic views in every direction.',
    image: { src: IMAGES.terraceView, alt: 'TERRACE open-air dining area with panoramic pool and skyline view' },
    ctaLabel: 'Reserve a Table',
  },
];

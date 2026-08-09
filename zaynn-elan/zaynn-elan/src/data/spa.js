import { IMAGES } from './images.js';

export const SPA = {
  intro:
    'Restore balance in a sanctuary designed around stillness, warmth, and considered wellness.',
  hours: 'Daily · 7:00 AM – 9:00 PM',
  images: [
    { src: IMAGES.sauna, alt: 'Wooden sauna with a forest view at Zaynn Élan Spa', label: 'Sauna & Steam' },
    { src: IMAGES.fitness, alt: 'Fully equipped fitness studio at Zaynn Élan', label: 'Fitness Studio' },
  ],
  treatments: [
    {
      name: 'Signature Massage',
      description: 'A full-body therapeutic massage tailored to your preferred pressure and focus areas.',
      duration: '60 / 90 min',
    },
    {
      name: 'Sauna & Steam Ritual',
      description: 'Guided access to our wood-fired sauna and aromatic steam room, framed by a forest view.',
      duration: '45 min',
    },
    {
      name: 'Wellness Facial',
      description: 'A restorative facial ritual using natural, locally sourced botanical ingredients.',
      duration: '50 min',
    },
    {
      name: 'Private Yoga & Meditation',
      description: 'A one-on-one or small-group session led by our resident wellness instructor.',
      duration: '45 min',
    },
    {
      name: 'Fitness Studio Access',
      description: 'Full use of our fully equipped studio, open around the clock for guests in residence.',
      duration: '24/7',
    },
  ],
};

// Central image manifest — every photo used across the site is declared once
// here so no URL is duplicated by accident. All photos are free-to-use
// Unsplash photography (Unsplash License: https://unsplash.com/license).
const u = (id, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  entrance: u('photo-1761778364718-a19ee94c1209', 2400),
  lobby: u('photo-1758448500688-3ababa93fd67', 1600),
  pool: u('photo-1753724933350-c2e0e2990445', 1600),

  deluxeBedroom: u('photo-1600908389678-64b54d9cf054', 1200),
  deluxeBathroom: u('photo-1764551322786-54a994923d8f', 1200),
  deluxeSitting: u('photo-1758448500688-3ababa93fd67', 1200),

  executiveBedroom: u('photo-1618773928121-c32242e63f39', 1200),
  executiveLiving: u('photo-1757416654883-c73c67b3382b', 1200),
  executiveBathroom: u('photo-1776482128011-c707121f081a', 1200),

  presidentialBedroom: u('photo-1631049421450-348ccd7f8949', 1200),
  presidentialBathroom: u('photo-1744000311871-b0ca10a69df5', 1200),
  presidentialView: u('photo-1761778364718-a19ee94c1209', 1200),

  elanTable: u('photo-1762806883627-4bcbfad98a2c', 1400),
  noirBar: u('photo-1658386321892-7139f2e6d5cb', 1400),
  terraceView: u('photo-1753724933350-c2e0e2990445', 1400),

  sauna: u('photo-1745894118353-88e64617e064', 1400),
  fitness: u('photo-1728486145245-d4cb0c9c3470', 1400),

  galleryExterior: u('photo-1761778364718-a19ee94c1209', 900),
  galleryLobby: u('photo-1758448500688-3ababa93fd67', 900),
  galleryPool: u('photo-1753724933350-c2e0e2990445', 900),
  galleryDining: u('photo-1762806883627-4bcbfad98a2c', 900),
  galleryBar: u('photo-1658386321892-7139f2e6d5cb', 900),
  gallerySauna: u('photo-1745894118353-88e64617e064', 900),
  galleryFitness: u('photo-1728486145245-d4cb0c9c3470', 900),
};

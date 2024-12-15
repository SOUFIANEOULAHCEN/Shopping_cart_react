const ProductData = [
  {
    id: 1,
    name: "T-shirt Classique",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "Hauts",
  },
  {
    id: 2,
    name: "Jean Slim",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    category: "Pantalons",
  },
  {
    id: 3,
    name: "Robe d'Été",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    category: "Robes",
  },
  {
    id: 4,
    name: "Veste en Cuir",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    category: "Vestes",
  },
  {
    id: 5,
    name: "Chemise à Carreaux",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8",
    category: "Hauts",
  },
  {
    id: 6,
    name: "Jupe Plissée",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
    category: "Jupes",
  },
  {
    id: 7,
    name: "Pull-over",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1577655197620-704858b270ac",
    category: "Hauts",
  },
  {
    id: 8,
    name: "Short en Jean",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b",
    category: "Shorts",
  },
  {
    id: 9,
    name: "Blazer Élégant",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1598808503746-f34c53b9323e",
    category: "Vestes",
  },
  {
    id: 10,
    name: "Pantalon Chino",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80",
    category: "Pantalons",
  },
  {
    id: 11,
    name: "Robe de Soirée",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae",
    category: "Robes",
  },
  {
    id: 12,
    name: "Sweat à Capuche",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7",
    category: "Hauts",
  },
  {
    id: 13,
    name: "Jupe Crayon",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1582142306909-195724d33ffc",
    category: "Jupes",
  },
  {
    id: 14,
    name: "Chemise en Lin",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157",
    category: "Hauts",
  },
  {
    id: 15,
    name: "Pantalon de Yoga",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8",
    category: "Pantalons",
  },
  {
    id: 16,
    name: "Veste en Jean",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef",
    category: "Vestes",
  },
  {
    id: 17,
    name: "Robe Chemise",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8",
    category: "Robes",
  },
  {
    id: 18,
    name: "Cardigan Long",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f",
    category: "Hauts",
  },
  {
    id: 19,
    name: "Short de Sport",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1562886877-aaaa5c0b3225",
    category: "Shorts",
  },
  {
    id: 20,
    name: "Blouse Florale",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1602407069119-e0c6f1602e31",
    category: "Hauts",
  },
  {
    id: 21,
    name: "Pantalon Large",
    price: 54.99,
    image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec",
    category: "Pantalons",
  },
  {
    id: 22,
    name: "Robe Maxi",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c",
    category: "Robes",
  },
  {
    id: 23,
    name: "Gilet Matelassé",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea",
    category: "Vestes",
  },
  {
    id: 24,
    name: "Jupe Longue",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa",
    category: "Jupes",
  },
  {
    id: 25,
    name: "Polo Classique",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99",
    category: "Hauts",
  },
  {
    id: 26,
    name: "Bermuda Chino",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1565693413579-8ff3fdc1b03b",
    category: "Shorts",
  },
  {
    id: 27,
    name: "Combinaison Élégante",
    price: 84.99,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8",
    category: "Robes",
  },
  {
    id: 28,
    name: "Veste de Costume",
    price: 109.99,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
    category: "Vestes",
  },
  {
    id: 29,
    name: "Débardeur Sport",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    category: "Hauts",
  },
  {
    id: 30,
    name: "Pantalon de Costume",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35",
    category: "Pantalons",
  },
];

export default ProductData;

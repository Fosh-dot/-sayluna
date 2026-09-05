import shangriLaBoracay from "../assets/resorts/shangri-la-boracay.jpg";
import elNidoResorts from "../assets/resorts/el-nido-resorts.jpg";

const resorts = [
  {
    id: 1,
    slug: "shangri-la-boracay",
    name: "Shangri-La Boracay",
    location: "Yapak, Boracay, Aklan",
    region: "Western Visayas",
    category: "Luxury Resort",
    rating: 4.8,
    priceLevel: "Luxury",
    description:
      "A secluded island retreat on Boracay's northern coastline, surrounded by tropical landscapes and two secluded beaches.",
    image: shangriLaBoracay,
    officialWebsite: "https://www.shangri-la.com/boracay/boracayresort/",
    features: [
      "Private beaches",
      "Swimming pools",
      "Spa & wellness",
      "Multiple restaurants",
      "Luxury villas",
    ],
    bestFor: ["Luxury escapes", "Couples", "Families", "Special occasions"],
    highlights: [
      "Secluded northern coastline",
      "Two secluded beaches",
      "Luxury villas",
      "Ocean and tropical views",
    ],
  },

  {
    id: 2,
    slug: "el-nido-resorts",
    name: "El Nido Resorts",
    location: "Palawan",
    region: "MIMAROPA",
    category: "Island Resort",
    rating: 4.7,
    priceLevel: "Luxury",
    description:
      "An island escape surrounded by limestone landscapes, turquoise waters, tropical forests, and spectacular marine environments.",
    image: elNidoResorts,
    officialWebsite: "https://elnidoresorts.com/",
    features: [
      "Island activities",
      "Beach access",
      "Snorkeling",
      "Diving",
      "Spa & wellness",
    ],
    bestFor: [
      "Island adventures",
      "Couples",
      "Nature lovers",
      "Luxury travellers",
    ],
    highlights: [
      "Limestone island scenery",
      "Marine experiences",
      "Island activities",
      "Tropical surroundings",
    ],
  },

  {
    id: 3,
    slug: "crimson-resort-cebu",
    name: "Crimson Resort & Spa",
    location: "Mactan, Cebu",
    region: "Central Visayas",
    category: "Beach Resort",
    rating: 4.6,
    priceLevel: "Premium",
    description:
      "A modern coastal retreat in Mactan offering a private beach, infinity pool, wellness facilities, dining, and tropical surroundings.",
    image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1",
    officialWebsite: "https://www.crimsonhotel.com/cebu/",
    features: [
      "Private beach",
      "Infinity pool",
      "Spa",
      "Restaurants",
      "Fitness centre",
    ],
    bestFor: ["Couples", "Families", "Relaxation", "Weekend escapes"],
    highlights: [
      "Private beach",
      "Infinity pool",
      "Aum Spa",
      "Mactan location",
    ],
  },

  {
    id: 4,
    slug: "nay-palad-hideaway",
    name: "Nay Palad Hideaway",
    location: "Malinao, Siargao",
    region: "Surigao del Norte",
    category: "Private Island",
    rating: 4.9,
    priceLevel: "Ultra Luxury",
    description:
      "A secluded Siargao hideaway between a private white-sand beach and ancient mangrove forests, built around personalized barefoot luxury.",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6",
    officialWebsite: "https://naypaladhideaway.com/",
    features: [
      "Private beach",
      "All-inclusive stay",
      "Water activities",
      "Wellness",
      "Personalized experiences",
    ],
    bestFor: [
      "Ultra-luxury escapes",
      "Couples",
      "Private getaways",
      "Wellness",
    ],
    highlights: [
      "Private bay",
      "Ancient mangrove forests",
      "All-inclusive experience",
      "Barefoot luxury",
    ],
  },

  {
    id: 5,
    slug: "the-bellevue-resort-bohol",
    name: "The Bellevue Resort",
    location: "Doljo, Panglao, Bohol",
    region: "Central Visayas",
    category: "Luxury Resort",
    rating: 4.7,
    priceLevel: "Luxury",
    description:
      "A luxury beachfront sanctuary in Panglao offering a peaceful coastal setting, spacious accommodation, dining, and easy access to Bohol's natural attractions.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    officialWebsite: "https://www.thebellevuebohol.com/",
    features: [
      "White-sand beachfront",
      "Swimming pools",
      "Spa & wellness",
      "Restaurants",
      "Ocean views",
    ],
    bestFor: ["Luxury escapes", "Couples", "Families", "Relaxation"],
    highlights: [
      "Doljo Beach",
      "540-meter beachfront",
      "Luxury accommodation",
      "Bohol island experiences",
    ],
  },
];

export default resorts;

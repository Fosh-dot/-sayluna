import islandHopping from "../assets/experiences/island-hopping.jpg";
import siargaoSurfing from "../assets/experiences/siargao-surfing.jpg";
import boracaySunset from "../assets/experiences/boracay-sunset.jpg";

const experiences = [
  {
    id: 1,
    title: "Island Hopping",
    location: "Palawan",
    category: "Adventure",
    description:
      "Sail through turquoise waters, hidden lagoons, and dramatic limestone islands.",
    image: islandHopping,
  },

  {
    id: 2,
    title: "Chase the Waves",
    location: "Siargao",
    category: "Surfing",
    description:
      "Experience the famous waves, laid-back island culture, and tropical scenery of Siargao.",
    image: siargaoSurfing,
  },

  {
    id: 3,
    title: "Underwater Adventures",
    location: "Cebu",
    category: "Diving",
    description:
      "Discover vibrant marine life and some of the Philippines' unforgettable underwater experiences.",
    image: islandHopping,
  },

  {
    id: 4,
    title: "Sunset Escapes",
    location: "Boracay",
    category: "Relaxation",
    description:
      "Slow down, feel the ocean breeze, and watch the sky transform over the island.",
    image: boracaySunset,
  },
];

export default experiences;

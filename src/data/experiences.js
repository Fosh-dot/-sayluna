import islandHopping from "../assets/experiences/island-hopping.jpg";
import siargaoSurfing from "../assets/experiences/siargao-surfing.jpg";
import boracaySunset from "../assets/experiences/boracay-sunset.jpg";

const experiences = [
  {
    id: 1,
    slug: "island-hopping-palawan",
    title: "Island Hopping",
    location: "Palawan",
    category: "Adventure",
    description:
      "Sail through turquoise waters, hidden lagoons, and dramatic limestone islands while discovering some of Palawan's most memorable coastal scenery.",
    image: islandHopping,
    overview:
      "Island hopping is one of the defining experiences of Palawan. A day on the water can take travellers between beaches, lagoons, smaller islands, and snorkelling areas while offering a different perspective of the coastline.",
    highlights: [
      "Limestone island scenery",
      "Hidden lagoons and beaches",
      "Swimming and snorkelling",
      "Full-day coastal exploration",
    ],
    planningTips: [
      "Check weather and sea conditions before booking a boat trip.",
      "Bring sunscreen, drinking water, and comfortable clothing for time outdoors.",
      "Leave some flexibility in your itinerary because boat activities can be affected by weather.",
    ],
  },

  {
    id: 2,
    slug: "surfing-siargao",
    title: "Chase the Waves",
    location: "Siargao",
    category: "Surfing",
    description:
      "Experience the famous waves, laid-back island culture, and tropical scenery of Siargao while discovering why the island is closely associated with surfing.",
    image: siargaoSurfing,
    overview:
      "Surfing is an important part of Siargao's identity, particularly around Cloud 9. The island attracts experienced surfers while also offering opportunities for beginners who want to learn with local instructors.",
    highlights: [
      "Surf culture around Cloud 9",
      "Beginner-friendly learning opportunities",
      "Tropical coastal scenery",
      "Relaxed island atmosphere",
    ],
    planningTips: [
      "Choose a surf instructor or school appropriate for your experience level.",
      "Check current sea and weather conditions before heading into the water.",
      "Allow time to enjoy Siargao beyond surfing, including its beaches, cafés, and island scenery.",
    ],
  },

  {
    id: 3,
    slug: "underwater-adventures-cebu",
    title: "Underwater Adventures",
    location: "Cebu",
    category: "Diving",
    description:
      "Discover vibrant marine life and some of the Philippines' unforgettable underwater experiences through diving and snorkelling around Cebu.",
    image: islandHopping,
    overview:
      "Cebu is a popular destination for travellers interested in marine experiences. Diving and snorkelling provide opportunities to explore underwater environments while experiencing a different side of the island beyond its beaches and resorts.",
    highlights: [
      "Diving experiences",
      "Snorkelling opportunities",
      "Marine environments",
      "Coastal exploration",
    ],
    planningTips: [
      "Choose a reputable operator with qualified guides.",
      "Match your dive site and activity to your experience level.",
      "Follow local safety instructions and current sea conditions.",
    ],
  },

  {
    id: 4,
    slug: "sunset-escapes-boracay",
    title: "Sunset Escapes",
    location: "Boracay",
    category: "Relaxation",
    description:
      "Slow down, feel the ocean breeze, and watch the sky transform over Boracay's famous coastline as the day comes to an end.",
    image: boracaySunset,
    overview:
      "Watching the sunset is one of the simplest ways to experience Boracay. White Beach provides a long stretch of coastline where visitors can slow down, enjoy the changing colours of the sky, and end the day by the water.",
    highlights: [
      "White Beach sunsets",
      "Relaxed evening atmosphere",
      "Beach walks",
      "Ocean views",
    ],
    planningTips: [
      "Arrive early enough to find a comfortable place along the beach.",
      "Keep the beach clean and follow local environmental guidelines.",
      "Pair sunset time with dinner or a relaxed evening around Boracay.",
    ],
  },
];

export default experiences;

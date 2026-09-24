import boracay from "../assets/images/destinations/boracay.png";
import palawan from "../assets/images/destinations/palawan.jpg";
import cebu from "../assets/images/destinations/cebu.jpg";
import siargao from "../assets/images/destinations/siargao.jpg";
import bohol from "../assets/images/destinations/bohol.jpg";

const destinationDetails = [
  {
    id: 1,
    slug: "boracay",
    name: "Boracay",
    region: "Western Visayas",
    tagline: "White sands, turquoise waters, unforgettable island days.",
    description:
      "Boracay is one of the Philippines' best-known island destinations, combining beautiful beaches, clear tropical waters, sunset views, water activities, dining, and a lively coastal atmosphere. While White Beach is the island's most famous attraction, Boracay also offers quieter corners and experiences beyond the main beachfront.",
    image: boracay,

    bestFor: [
      "Beach lovers",
      "Couples",
      "Families",
      "Nightlife",
      "Water activities",
    ],

    highlights: [
      "White Beach",
      "Island hopping",
      "Sunset sailing",
      "Puka Beach",
      "Bulabog Beach",
      "Local dining",
    ],

    sections: [
      {
        heading: "Why visit Boracay?",
        paragraphs: [
          "Boracay is a destination where a beach holiday can be as relaxed or as active as you want it to be. You can spend a morning swimming, explore the coastline in the afternoon, and finish the day watching the sunset by the sea.",
          "The island also has a wide variety of accommodation, restaurants, cafés, activities, and nightlife. This makes it suitable for travellers who want the convenience of having many experiences within easy reach.",
        ],
      },
      {
        heading: "Things to do in Boracay",
        paragraphs: [
          "White Beach is the natural starting point for many first-time visitors. Beyond simply relaxing on the sand, travellers can explore the coast by boat, try water activities, enjoy a sunset cruise, or discover other beaches around the island.",
          "Bulabog Beach is associated with water sports, while Puka Beach offers a different atmosphere from the busier sections of White Beach. Island-hopping trips can also introduce visitors to smaller beaches and nearby waters.",
        ],
      },
      {
        heading: "Where to stay in Boracay",
        paragraphs: [
          "Where you stay can significantly change your Boracay experience. Areas around White Beach provide convenient access to restaurants, shops, activities, and the beachfront, while quieter locations can offer a more peaceful retreat.",
          "SAYLUNA recommends comparing the location, atmosphere, facilities, and distance from the experiences you want before choosing your accommodation.",
        ],
      },
      {
        heading: "Planning your Boracay trip",
        paragraphs: [
          "Give yourself enough time to enjoy the island instead of filling every day with activities. A balanced itinerary can include beach time, one or two organised experiences, local food, and an evening to simply explore.",
          "Travel requirements, transportation arrangements, weather conditions, and operating schedules can change, so check official local information before travelling.",
        ],
      },
    ],

    travelTips: [
      "Choose your accommodation based on the atmosphere and activities you prefer.",
      "Leave room in your itinerary for relaxed beach time.",
      "Check current local travel requirements before your trip.",
      "Protect the coastline by following local environmental guidelines.",
      "Weather and sea conditions can affect water activities.",
    ],

    faqs: [
      {
        question: "What is Boracay known for?",
        answer:
          "Boracay is best known for its white-sand beaches, clear waters, sunsets, water activities, restaurants, resorts, and lively island atmosphere.",
      },
      {
        question: "Is Boracay good for families?",
        answer:
          "Yes. Boracay has a wide range of accommodation, dining options, beaches, and activities that can suit families.",
      },
      {
        question: "How many days should I spend in Boracay?",
        answer:
          "A few days can provide a good introduction to the island, while a longer stay gives you more time to combine beach relaxation with activities and exploration.",
      },
    ],
  },

  {
    id: 2,
    slug: "palawan",
    name: "Palawan",
    region: "MIMAROPA",
    tagline: "Limestone islands, hidden lagoons, and crystal-clear seas.",
    description:
      "Palawan is a vast island province known for dramatic limestone landscapes, turquoise waters, beaches, lagoons, marine environments, and memorable island adventures. El Nido and Coron are among its best-known areas, while other parts of the province offer their own distinct experiences.",
    image: palawan,

    bestFor: [
      "Nature lovers",
      "Island hopping",
      "Couples",
      "Adventure",
      "Luxury escapes",
    ],

    highlights: [
      "El Nido",
      "Coron",
      "Island hopping",
      "Hidden lagoons",
      "Snorkeling and diving",
      "Limestone landscapes",
    ],

    sections: [
      {
        heading: "Why visit Palawan?",
        paragraphs: [
          "Palawan is ideal for travellers who want dramatic scenery and outdoor experiences. Its combination of limestone formations, tropical islands, beaches, lagoons, and marine environments creates some of the Philippines' most recognisable landscapes.",
          "The province is large, so planning matters. El Nido and Coron offer different experiences and should not be treated as if they were one small destination. Travellers visiting more than one area should allow enough time for transportation.",
        ],
      },
      {
        heading: "Things to do in Palawan",
        paragraphs: [
          "Island hopping is one of the defining experiences of Palawan. Boat trips can take visitors to beaches, lagoons, snorkelling locations, and smaller islands surrounded by clear tropical water.",
          "El Nido is particularly known for its limestone scenery and lagoon experiences, while Coron is well known for its island landscapes, lakes, marine activities, and diving opportunities.",
        ],
      },
      {
        heading: "Where to stay in Palawan",
        paragraphs: [
          "Your choice of location depends heavily on the kind of trip you want. El Nido works well for travellers focused on lagoons, island hopping, and dramatic coastal scenery. Coron offers a different combination of island, lake, and marine experiences.",
          "Luxury travellers can also find secluded island resorts where the accommodation itself becomes part of the experience.",
        ],
      },
      {
        heading: "Planning your Palawan trip",
        paragraphs: [
          "Because Palawan covers a large area, avoid creating an itinerary that moves between distant locations without allowing enough travel time. A slower itinerary can give you more time to enjoy each place.",
          "Boat trips and outdoor activities can be affected by weather and sea conditions. Check local conditions and operator information before setting out.",
        ],
      },
    ],

    travelTips: [
      "Allow enough time when visiting more than one area of Palawan.",
      "Boat schedules can depend on weather and sea conditions.",
      "Pack sun protection for long days outdoors.",
      "Carry appropriate cash for areas where card access may be limited.",
      "Choose responsible tour operators and respect marine environments.",
    ],

    faqs: [
      {
        question: "What is Palawan known for?",
        answer:
          "Palawan is known for limestone landscapes, turquoise waters, lagoons, beaches, island hopping, diving, snorkelling, and spectacular natural scenery.",
      },
      {
        question: "Is El Nido the same as Palawan?",
        answer:
          "El Nido is a municipality and destination within Palawan province. Palawan is much larger and includes other destinations such as Coron.",
      },
      {
        question: "Is Palawan good for couples?",
        answer:
          "Yes. Its beaches, private island experiences, scenic boat trips, resorts, and quieter natural settings make it popular with couples.",
      },
    ],
  },

  {
    id: 3,
    slug: "cebu",
    name: "Cebu",
    region: "Central Visayas",
    tagline: "Island adventures, waterfalls, beaches, and vibrant culture.",
    description:
      "Cebu combines city life, history, beaches, waterfalls, marine experiences, food, and island adventures. It is one of the Philippines' most versatile destinations and can work for travellers looking for a mixture of urban exploration and outdoor experiences.",
    image: cebu,

    bestFor: [
      "Adventure",
      "Beach lovers",
      "Food lovers",
      "Families",
      "Island hopping",
    ],

    highlights: [
      "Moalboal",
      "Kawasan Falls",
      "Mactan Island",
      "Snorkeling",
      "Cebu City",
      "Local cuisine",
    ],

    sections: [
      {
        heading: "Why visit Cebu?",
        paragraphs: [
          "Cebu offers a different style of Philippine escape because it combines an urban centre with beaches, islands, waterfalls, marine experiences, and cultural attractions. This makes it possible to build very different itineraries around the same destination.",
          "Travellers can spend part of their trip exploring Cebu City and then continue towards coastal areas for beaches, diving, snorkelling, or outdoor adventures.",
        ],
      },
      {
        heading: "Things to do in Cebu",
        paragraphs: [
          "Cebu's attractions range from historical and cultural sites to waterfalls and marine experiences. Moalboal is known for its marine environment, while Kawasan Falls is associated with outdoor adventure and freshwater scenery.",
          "Mactan provides easy access to beach resorts and water activities, making it useful for travellers who prefer to stay close to resort facilities.",
        ],
      },
      {
        heading: "Where to stay in Cebu",
        paragraphs: [
          "The best location depends on your itinerary. Cebu City is useful for travellers interested in urban attractions, food, shopping, and convenient access to transport connections.",
          "Travellers focused on beaches and resort experiences may prefer Mactan or another coastal area, while adventure-focused itineraries may benefit from staying closer to southern Cebu attractions.",
        ],
      },
      {
        heading: "Planning your Cebu trip",
        paragraphs: [
          "Cebu is larger and more geographically varied than some island destinations, so travel time should be considered when building your itinerary. Trying to cover every major attraction in a short stay can leave little time to enjoy each location.",
          "A practical itinerary usually groups nearby attractions together and leaves additional time for transportation.",
        ],
      },
    ],

    travelTips: [
      "Plan your itinerary around geographic areas to reduce unnecessary travel.",
      "Allow extra time for road journeys between major attractions.",
      "Combine outdoor adventures with Cebu's food and cultural experiences.",
      "Check weather and local operating conditions before outdoor activities.",
      "Choose accommodation based on the part of Cebu you want to explore most.",
    ],

    faqs: [
      {
        question: "What is Cebu known for?",
        answer:
          "Cebu is known for beaches, waterfalls, marine experiences, historical attractions, food, island adventures, and its important urban centre.",
      },
      {
        question: "Is Cebu good for first-time visitors to the Philippines?",
        answer:
          "Cebu can be a convenient introduction because it combines city, culture, beaches, outdoor activities, and access to other destinations in the Visayas.",
      },
      {
        question: "Can I visit Cebu for both beaches and adventure?",
        answer:
          "Yes. Cebu offers coastal resorts alongside waterfalls, marine activities, island trips, and other outdoor experiences.",
      },
    ],
  },

  {
    id: 4,
    slug: "siargao",
    name: "Siargao",
    region: "Surigao del Norte",
    tagline: "Surf, palms, lagoons, and slow island living.",
    description:
      "Siargao is a tropical destination known for surfing, coconut-lined roads, lagoons, rock pools, island hopping, cafés, and a relaxed island atmosphere. It appeals to travellers who want outdoor adventure without giving up the slower rhythm of island life.",
    image: siargao,

    bestFor: [
      "Surfers",
      "Adventure lovers",
      "Couples",
      "Nature lovers",
      "Slow travel",
    ],

    highlights: [
      "Cloud 9",
      "Island hopping",
      "Sugba Lagoon",
      "Magpupungko Rock Pools",
      "Coconut roads",
      "Local cafés",
    ],

    sections: [
      {
        heading: "Why visit Siargao?",
        paragraphs: [
          "Siargao has developed a strong identity around surfing and island culture, but there is much more to experience beyond the famous waves. Visitors can explore lagoons, rock pools, beaches, islands, coconut-lined roads, restaurants, cafés, and quieter coastal areas.",
          "The destination works particularly well for travellers who enjoy combining outdoor activities with relaxed days and an informal island atmosphere.",
        ],
      },
      {
        heading: "Things to do in Siargao",
        paragraphs: [
          "Surfing is one of Siargao's defining experiences, with Cloud 9 being its best-known surf area. Beginners and experienced surfers can explore different options depending on conditions and experience level.",
          "Island-hopping trips, lagoon visits, rock pools, and coastal exploration provide alternatives for travellers who do not surf or want to experience different sides of the island.",
        ],
      },
      {
        heading: "Where to stay in Siargao",
        paragraphs: [
          "Many visitors choose to stay around General Luna because of its concentration of restaurants, cafés, accommodation, and access to activities. Other parts of the island offer a quieter experience for travellers looking to slow down.",
          "When choosing accommodation, consider how important nightlife, dining, surfing access, and quiet surroundings are to your trip.",
        ],
      },
      {
        heading: "Planning your Siargao trip",
        paragraphs: [
          "Siargao is best experienced without rushing. Give yourself time to explore the island, stop at local cafés, enjoy the coastline, and adjust your plans around weather and sea conditions.",
          "Tides can affect access to some natural attractions, so check local conditions before visiting rock pools and other coastal sites.",
        ],
      },
    ],

    travelTips: [
      "Check tide conditions before visiting natural rock pools.",
      "Allow flexibility for weather-dependent island activities.",
      "Transportation can make exploring areas outside General Luna easier.",
      "Leave time for slow mornings and spontaneous discoveries.",
      "Respect surf etiquette and local coastal environments.",
    ],

    faqs: [
      {
        question: "What is Siargao famous for?",
        answer:
          "Siargao is particularly famous for surfing, especially around Cloud 9, as well as its lagoons, islands, rock pools, coconut landscapes, and relaxed island culture.",
      },
      {
        question: "Is Siargao only for surfers?",
        answer:
          "No. Visitors can enjoy island hopping, lagoons, rock pools, beaches, food, cafés, sightseeing, and other outdoor experiences without surfing.",
      },
      {
        question: "Where do most visitors stay in Siargao?",
        answer:
          "General Luna is a popular base because it provides convenient access to restaurants, cafés, accommodation, and many island activities.",
      },
    ],
  },

  {
    id: 5,
    slug: "bohol",
    name: "Bohol",
    region: "Central Visayas",
    tagline: "Tropical beaches, natural wonders, and island adventures.",
    description:
      "Bohol offers a combination of beaches, countryside scenery, marine experiences, wildlife, cultural attractions, and some of the Philippines' most recognisable natural landmarks. Panglao is especially popular with travellers looking for beach resorts and easy access to island activities.",
    image: bohol,

    bestFor: [
      "Families",
      "Nature lovers",
      "Couples",
      "Adventure",
      "Beach escapes",
    ],

    highlights: [
      "Chocolate Hills",
      "Panglao Island",
      "Balicasag Island",
      "Loboc River",
      "Diving and snorkeling",
      "Countryside exploration",
    ],

    sections: [
      {
        heading: "Why visit Bohol?",
        paragraphs: [
          "Bohol is appealing because a single trip can include beaches, countryside landscapes, marine activities, cultural attractions, and natural landmarks. It is a destination where travellers can combine relaxation with exploration.",
          "Panglao is a popular base for beach-focused trips, while inland Bohol provides a very different atmosphere and a chance to explore the island beyond its coastline.",
        ],
      },
      {
        heading: "Things to do in Bohol",
        paragraphs: [
          "The Chocolate Hills are among Bohol's best-known natural attractions, while the Panglao area provides access to beaches and marine activities. Balicasag Island is another popular destination for travellers interested in snorkelling and diving.",
          "Visitors can also explore inland areas, rivers, countryside scenery, and local communities for a more varied experience.",
        ],
      },
      {
        heading: "Where to stay in Bohol",
        paragraphs: [
          "Panglao is a convenient choice for travellers who prioritise beaches, resorts, restaurants, and marine activities. Inland stays offer a quieter experience and place you closer to countryside attractions.",
          "When selecting accommodation, consider whether your priority is beachfront relaxation, sightseeing, diving, or access to inland attractions.",
        ],
      },
      {
        heading: "Planning your Bohol trip",
        paragraphs: [
          "A balanced Bohol itinerary can combine a few days of beach time with inland exploration. Because attractions are spread across different areas, grouping nearby activities together can make your trip more comfortable.",
          "Marine excursions can depend on weather and sea conditions, so allow flexibility when planning boat-based activities.",
        ],
      },
    ],

    travelTips: [
      "Consider staying around Panglao if beach access is important to you.",
      "Combine beach time with inland attractions for a more complete experience.",
      "Allow enough travel time between coastal and inland attractions.",
      "Marine activities can be affected by weather and sea conditions.",
      "Respect wildlife and natural environments during excursions.",
    ],

    faqs: [
      {
        question: "What is Bohol known for?",
        answer:
          "Bohol is known for the Chocolate Hills, beaches, Panglao, marine activities, countryside scenery, cultural attractions, and its diverse natural environment.",
      },
      {
        question: "Is Bohol good for families?",
        answer:
          "Yes. Bohol offers beaches, sightseeing, nature experiences, boat trips, and accommodation options that can suit families.",
      },
      {
        question: "Where should I stay in Bohol?",
        answer:
          "Panglao is convenient for travellers prioritising beaches, resorts, restaurants, and marine activities. Other areas may be better for travellers focused on inland attractions and a quieter setting.",
      },
    ],
  },
];

export default destinationDetails;

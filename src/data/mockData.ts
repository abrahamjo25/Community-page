export const postsdata = [
  {
    id: 1,
    img: "https://picsum.photos/800/450?random=21",
    tag: "Photography",
    title: "Explore the Beauty of Ethiopian Landscapes",
    description:
      "Dive into Ethiopia's breathtaking natural beauty through captivating images that showcase its unique landscapes and culture.",
    authors: [
      {
        name: "Tigist Alemayehu",
        avatar: "/static/images/avatar/6.jpg",
        date: "2023-08-05T11:00:00Z",
      },
    ],
  },
  {
    id: 2,
    img: "https://picsum.photos/800/450?random=22",
    tag: "Culture",
    title: "Capturing the Essence of Ethiopian Traditions",
    description:
      "Discover how Ethiopia's rich cultural heritage can be portrayed through stunning visuals that tell a story of history and identity.",
    authors: [
      {
        name: "Abel Tesfaye",
        avatar: "/static/images/avatar/7.jpg",
        date: "2023-08-12T11:00:00Z",
      },
    ],
  },
  {
    id: 3,
    img: "https://picsum.photos/800/450?random=23",
    tag: "Food",
    title: "Ethiopian Cuisine: A Feast for the Eyes and Taste",
    description:
      "Showcase the vibrant and colorful dishes of Ethiopia with high-quality images that highlight the nation's culinary delights.",
    authors: [
      {
        name: "Mekdes Tadesse",
        avatar: "/static/images/avatar/8.jpg",
        date: "2023-08-20T11:00:00Z",
      },
    ],
  },
  {
    id: 4,
    img: "https://picsum.photos/800/450?random=24",
    tag: "Wildlife",
    title: "Wildlife Wonders of the Simien Mountains",
    description:
      "Experience the diverse wildlife of Ethiopia, captured through stunning images from the Simien Mountains National Park.",
    authors: [
      {
        name: "Yonas Demeke",
        avatar: "/static/images/avatar/9.jpg",
        date: "2023-08-27T11:00:00Z",
      },
    ],
  },
  {
    id: 5,
    img: "https://picsum.photos/800/450?random=25",
    tag: "Architecture",
    title: "The Timeless Churches of Lalibela",
    description:
      "Explore Ethiopia's architectural marvels, including the rock-hewn churches of Lalibela, through captivating imagery.",
    authors: [
      {
        name: "Senait Assefa",
        avatar: "/static/images/avatar/10.jpg",
        date: "2023-09-02T11:00:00Z",
      },
    ],
  },
  {
    id: 6,
    img: "https://picsum.photos/800/450?random=26",
    tag: "Travel Tips",
    title: "A Photographer’s Guide to Ethiopia",
    description:
      "Get tips and insights on capturing Ethiopia's stunning beauty, from its landscapes to its people and culture.",
    authors: [
      {
        name: "Getu Worku",
        avatar: "/static/images/avatar/11.jpg",
        date: "2023-09-10T11:00:00Z",
      },
    ],
  },
];
export const articleInfo = [
  {
    id: 11,
    img: "https://picsum.photos/800/450?random=31",
    tag: "History",
    title: "The Ancient Legacy of Aksumite Civilization",
    description:
      "Unveil the wonders of the Aksumite Empire, its monuments, and its influence on Ethiopian culture and history.",
    authors: [
      {
        name: "Tewodros Mekonnen",
        avatar: "/static/images/avatar/12.jpg",
        date: "2023-09-15T11:00:00Z",
      },
    ],
  },
  {
    id: 12,
    img: "https://picsum.photos/800/450?random=32",
    tag: "Art",
    title: "Ethiopian Art: A Blend of Tradition and Modernity",
    description:
      "Discover how Ethiopian artists are blending traditional art with modern techniques to create stunning masterpieces.",
    authors: [
      {
        name: "Hanna Girma",
        avatar: "/static/images/avatar/13.jpg",
        date: "2023-09-20T11:00:00Z",
      },
    ],
  },
  {
    id: 13,
    img: "https://picsum.photos/800/450?random=33",
    tag: "Travel",
    title: "Exploring the Blue Nile Falls: Ethiopia’s Natural Wonder",
    description:
      "Journey to the breathtaking Blue Nile Falls and capture the awe-inspiring beauty of one of Ethiopia’s iconic landmarks.",
    authors: [
      {
        name: "Dereje Fekadu",
        avatar: "/static/images/avatar/14.jpg",
        date: "2023-09-28T11:00:00Z",
      },
    ],
  },
  {
    id: 14,
    img: "https://picsum.photos/800/450?random=34",
    tag: "Festivals",
    title: "The Vibrance of Timket: Ethiopia's Epiphany Celebration",
    description:
      "Step into Ethiopia's Timket festival with vibrant images that capture the essence of this grand celebration.",
    authors: [
      {
        name: "Almaz Zewde",
        avatar: "/static/images/avatar/15.jpg",
        date: "2023-10-05T11:00:00Z",
      },
    ],
  },
  {
    id: 15,
    img: "https://picsum.photos/800/450?random=35",
    tag: "Culture",
    title: "Coffee Ceremonies: The Heart of Ethiopian Hospitality",
    description:
      "Learn about Ethiopia's traditional coffee ceremony, a symbol of hospitality and community bonding.",
    authors: [
      {
        name: "Elias Bekele",
        avatar: "/static/images/avatar/16.jpg",
        date: "2023-10-10T11:00:00Z",
      },
    ],
  },
  {
    id: 16,
    img: "https://picsum.photos/800/450?random=36",
    tag: "Wildlife",
    title: "The Ethiopian Wolf: A Rare and Beautiful Predator",
    description:
      "Get up close with the Ethiopian wolf, one of the rarest carnivores on Earth, and learn about its conservation story.",
    authors: [
      {
        name: "Saron Abate",
        avatar: "/static/images/avatar/17.jpg",
        date: "2023-10-18T11:00:00Z",
      },
    ],
  },
];

export const postComments = [
  {
    id: 1,
    postId: 1,
    display: "This is the first main comment.",
    author: "Abebe Kebede",
    commentedDate: "2023-11-20T10:30:00Z",
    children: [
      {
        id: 2,
        display: "Reply to the first main comment.",
        author: "Azeb Desta",
        commentedDate: "2023-11-21T11:00:00Z",
        children: [
          {
            id: 3,
            display: "Reply to the first reply.",
            author: "Solomon Tesfaye",
            commentedDate: "2023-11-22T12:30:00Z",
            children: [],
          },
        ],
      },
      {
        id: 4,
        display: "Another reply to the first main comment.",
        author: "Tewodros Assefa",
        commentedDate: "2023-11-23T13:00:00Z",
        children: [],
      },
    ],
  },
  {
    id: 5,
    postId: 1,
    display: "This is the second main comment.",
    author: "Mulugeta Ferede",
    commentedDate: "2023-11-24T14:00:00Z",
    children: [
      {
        id: 6,
        display: "Reply to the second main comment.",
        author: "Eyerusalem Hailu",
        commentedDate: "2023-11-25T15:00:00Z",
        children: [],
      },
    ],
  },
  {
    id: 7,
    postId: 2,
    display: "This is the third main comment.",
    author: "Daniel Gebremariam",
    commentedDate: "2023-11-26T16:00:00Z",
    children: [],
  },
  {
    id: 8,
    postId: 3,
    display: "This is the fourth main comment.",
    author: "Wondwossen Lemma",
    commentedDate: "2023-11-27T17:00:00Z",
    children: [
      {
        id: 9,
        display: "Reply to the fourth main comment.",
        author: "Yohannes Eshetu",
        commentedDate: "2023-11-28T18:00:00Z",
        children: [],
      },
    ],
  },
  {
    id: 10,
    postId: 4,
    display: "This is the fifth main comment.",
    author: "Senait Mekonnen",
    commentedDate: "2023-11-29T19:00:00Z",
    children: [],
  },
];

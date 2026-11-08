/**
 * Customer reviews for the CULTURE / 001 storefront.
 * `productId` links each review to an item in products.js.
 */
const reviews = [
  {
    id: 1,
    productId: 1,
    user: {
      name: "Kwame Mensah",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    rating: 5,
    title: "Beautiful weave",
    comment:
      "The colours are rich and the wrap drapes beautifully. Wore it to a naming ceremony and got compliments all day.",
    date: "2026-08-02",
    verifiedPurchase: true,
  },
  {
    id: 2,
    productId: 1,
    user: {
      name: "Ama Serwaa",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    rating: 4,
    title: "Lovely set",
    comment:
      "Soft, lightweight and easy to style. The stole is a little longer than expected but I actually prefer it that way.",
    date: "2026-08-19",
    verifiedPurchase: true,
  },
  {
    id: 3,
    productId: 2,
    user: {
      name: "Kofi Boateng",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    rating: 5,
    title: "Made for celebrations",
    comment:
      "We ordered matching outfits for our anniversary and the fit was perfect. The fabric feels substantial without being heavy.",
    date: "2026-07-28",
    verifiedPurchase: true,
  },
  {
    id: 4,
    productId: 2,
    user: {
      name: "Efua Owusu",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    rating: 5,
    title: "So elegant",
    comment:
      "The pattern is even richer in person. It photographs well and still feels comfortable after hours of wear.",
    date: "2026-09-05",
    verifiedPurchase: true,
  },
  {
    id: 5,
    productId: 3,
    user: {
      name: "Yaw Darko",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    rating: 4,
    title: "Great traditional look",
    comment:
      "True to the photos and well finished. I sized up for a looser fit and it worked perfectly.",
    date: "2026-08-11",
    verifiedPurchase: true,
  },
  {
    id: 6,
    productId: 3,
    user: {
      name: "Nana Adjei",
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    rating: 5,
    title: "Best outfit I've bought",
    comment:
      "Wore it to my sister's wedding and everyone asked where it was from. The tailoring is sharp.",
    date: "2026-09-14",
    verifiedPurchase: false,
  },
  {
    id: 7,
    productId: 4,
    user: {
      name: "Selorm Agbeko",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    rating: 5,
    title: "Looks premium",
    comment:
      "Feels far more expensive than it costs. The finish on the seams is excellent and the colours are deep and clean.",
    date: "2026-09-21",
    verifiedPurchase: true,
  },
  {
    id: 8,
    productId: 4,
    user: {
      name: "Kojo Annan",
      avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    },
    rating: 4,
    title: "A real statement",
    comment:
      "Bold and elegant. It runs slightly long on the sleeves, but a quick adjustment sorted that out.",
    date: "2026-10-03",
    verifiedPurchase: true,
  },
  {
    id: 9,
    productId: 5,
    user: {
      name: "Akosua Frimpong",
      avatar: "https://randomuser.me/api/portraits/women/29.jpg",
    },
    rating: 5,
    title: "Great value",
    comment:
      "The cloth is generous in length and the patterns are lovely. Easy to tie and it stayed in place all evening.",
    date: "2026-08-25",
    verifiedPurchase: true,
  },
  {
    id: 10,
    productId: 5,
    user: {
      name: "Elikem Tetteh",
      avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    },
    rating: 4,
    title: "Good for daily wear",
    comment:
      "Solid everyday wrap. It softened nicely after the first wash and the colour did not run.",
    date: "2026-09-30",
    verifiedPurchase: false,
  },
  {
    id: 11,
    productId: 6,
    user: {
      name: "Prince Quaye",
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    rating: 4,
    title: "Smart and light",
    comment:
      "Breathable in the Accra heat and adds a nice finishing touch to a plain outfit.",
    date: "2026-08-08",
    verifiedPurchase: true,
  },
  {
    id: 12,
    productId: 6,
    user: {
      name: "Fiifi Ansah",
      avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    },
    rating: 5,
    title: "Clean look",
    comment:
      "The weave is neat and the colours sit well together. I bought a second one as a gift.",
    date: "2026-09-12",
    verifiedPurchase: true,
  },
  {
    id: 13,
    productId: 7,
    user: {
      name: "Abena Osei",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    rating: 5,
    title: "So pretty",
    comment:
      "Comfortable from the first wear and the detailing is beautiful. Perfect for a weekend outing.",
    date: "2026-09-02",
    verifiedPurchase: true,
  },
  {
    id: 14,
    productId: 7,
    user: {
      name: "Mawuena Kpodo",
      avatar: "https://randomuser.me/api/portraits/women/85.jpg",
    },
    rating: 4,
    title: "Lovely sandals",
    comment:
      "True to size and well made. They took a day to break in but are very comfortable now.",
    date: "2026-10-07",
    verifiedPurchase: true,
  },
  {
    id: 15,
    productId: 8,
    user: {
      name: "Daniel Ofori",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    rating: 5,
    title: "Regal",
    comment:
      "The regalia set is stunning. The cloth is weighty in the best way and the gold detail is striking.",
    date: "2026-09-18",
    verifiedPurchase: true,
  },
  {
    id: 16,
    productId: 8,
    user: {
      name: "Naa Lamiokor",
      avatar: "https://randomuser.me/api/portraits/women/90.jpg",
    },
    rating: 5,
    title: "Worth every cedi",
    comment:
      "Bought it for a traditional wedding and it was worth it. Beautiful craftsmanship and a perfect fit.",
    date: "2026-10-10",
    verifiedPurchase: true,
  },
];

export default reviews;

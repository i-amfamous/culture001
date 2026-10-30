import featuredProducts from "./featuredProducts.js";
// Import the featuredProducts array from the featuredProducts.js file

const newFeaturedProducts = featuredProducts.map((product) => {
  const discountRate = 0.15; // 15% discount
  const discountedPrice = product.price * (1 - discountRate);

  return {
    ...product,
    discountPrice: discountedPrice,
  };
});


const featuredProductsContainer = document.querySelector(".products");

newFeaturedProducts.forEach((product) => {
  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  const productImage = document.createElement("img");
  productImage.src = product.coverImage;
  productImage.alt = product.name;

  const productName = document.createElement("h3");
  productName.textContent = product.name;

  const productPrice = document.createElement("p");
  productPrice.classList.add("product-price");
  productPrice.textContent = `Discount Price: GHC ${product.discountPrice.toFixed(2)}`;

  const originalPrice = document.createElement("span");
  originalPrice.classList.add("original-price");
  originalPrice.textContent = `Price: GHC ${product.price.toFixed(2)}`;

  const priceContainer = document.createElement("div");
  priceContainer.classList.add("price-container");
  priceContainer.append(originalPrice, productPrice);

  productCard.append(productImage, productName, priceContainer);
  featuredProductsContainer.appendChild(productCard);
});

const reviews = [
  {
    "id": 1,
    "productId": 1,
    "productSlug": "classic-white-tee",
    "productUrl": "/products/classic-white-tee",
    "user": {
      "name": "Kwame Mensah",
      "avatar": "https://randomuser.me/api/portraits/men/32.jpg"
    },
    "rating": 5,
    "title": "Perfect fit",
    "comment": "Thick cotton, doesn't go see-through. Washed 5 times and still holds shape.",
    "date": "2026-08-02",
    "verifiedPurchase": true,
    "helpfulVotes": 8,
    "coverImage": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 2,
    "productId": 1,
    "productSlug": "classic-white-tee",
    "productUrl": "/products/classic-white-tee",
    "user": {
      "name": "Ama Serwaa",
      "avatar": "https://randomuser.me/api/portraits/women/44.jpg"
    },
    "rating": 4,
    "title": "Great basic",
    "comment": "Soft and comfy. Runs slightly large so size down if you like it snug.",
    "date": "2026-08-19",
    "verifiedPurchase": true,
    "helpfulVotes": 15,
    "coverImage": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 3,
    "productId": 2,
    "productSlug": "essential-grey-hoodie",
    "productUrl": "/products/essential-grey-hoodie",
    "user": {
      "name": "Kofi Boateng",
      "avatar": "https://randomuser.me/api/portraits/men/45.jpg"
    },
    "rating": 5,
    "title": "Cozy and solid",
    "comment": "Warm without being heavy. The drawstrings are strong and the pocket is deep.",
    "date": "2026-07-28",
    "verifiedPurchase": true,
    "helpfulVotes": 22,
    "coverImage": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 4,
    "productId": 2,
    "productSlug": "essential-grey-hoodie",
    "productUrl": "/products/essential-grey-hoodie",
    "user": {
      "name": "Efua Owusu",
      "avatar": "https://randomuser.me/api/portraits/women/68.jpg"
    },
    "rating": 5,
    "title": "Love it",
    "comment": "Oversized fit exactly how I wanted. Perfect for AC offices and rainy evenings.",
    "date": "2026-09-05",
    "verifiedPurchase": true,
    "helpfulVotes": 6,
    "coverImage": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 5,
    "productId": 3,
    "productSlug": "slim-fit-blue-jeans",
    "productUrl": "/products/slim-fit-blue-jeans",
    "user": {
      "name": "Yaw Darko",
      "avatar": "https://randomuser.me/api/portraits/men/75.jpg"
    },
    "rating": 4,
    "title": "Good denim",
    "comment": "Stretch is comfortable and colour is true to the photo. Waist runs a little tight.",
    "date": "2026-08-11",
    "verifiedPurchase": true,
    "helpfulVotes": 13,
    "coverImage": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 6,
    "productId": 3,
    "productSlug": "slim-fit-blue-jeans",
    "productUrl": "/products/slim-fit-blue-jeans",
    "user": {
      "name": "Nana Adjei",
      "avatar": "https://randomuser.me/api/portraits/men/12.jpg"
    },
    "rating": 5,
    "title": "Best jeans I've bought",
    "comment": "Fits great and looks sharp with sneakers or boots.",
    "date": "2026-09-14",
    "verifiedPurchase": false,
    "helpfulVotes": 20,
    "coverImage": "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 7,
    "productId": 4,
    "productSlug": "urban-leather-jacket",
    "productUrl": "/products/urban-leather-jacket",
    "user": {
      "name": "Selorm Agbeko",
      "avatar": "https://randomuser.me/api/portraits/men/22.jpg"
    },
    "rating": 5,
    "title": "Looks premium",
    "comment": "Feels way more expensive than the price. Zip is smooth and lining is warm.",
    "date": "2026-09-21",
    "verifiedPurchase": true,
    "helpfulVotes": 4,
    "coverImage": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 8,
    "productId": 4,
    "productSlug": "urban-leather-jacket",
    "productUrl": "/products/urban-leather-jacket",
    "user": {
      "name": "Kojo Annan",
      "avatar": "https://randomuser.me/api/portraits/men/52.jpg"
    },
    "rating": 4,
    "title": "Stylish",
    "comment": "Got lots of compliments. A bit stiff at first but softens with wear.",
    "date": "2026-10-03",
    "verifiedPurchase": true,
    "helpfulVotes": 11,
    "coverImage": "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 9,
    "productId": 5,
    "productSlug": "everyday-stack-tee-pack",
    "productUrl": "/products/everyday-stack-tee-pack",
    "user": {
      "name": "Akosua Frimpong",
      "avatar": "https://randomuser.me/api/portraits/women/29.jpg"
    },
    "rating": 5,
    "title": "Great value",
    "comment": "Three tees at this price is a steal. Colours are nice and fabric is soft.",
    "date": "2026-08-25",
    "verifiedPurchase": true,
    "helpfulVotes": 18,
    "coverImage": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 10,
    "productId": 5,
    "productSlug": "everyday-stack-tee-pack",
    "productUrl": "/products/everyday-stack-tee-pack",
    "user": {
      "name": "Elikem Tetteh",
      "avatar": "https://randomuser.me/api/portraits/men/61.jpg"
    },
    "rating": 4,
    "title": "Good for daily wear",
    "comment": "Solid basics. Shrunk a tiny bit after the first wash.",
    "date": "2026-09-30",
    "verifiedPurchase": false,
    "helpfulVotes": 2,
    "coverImage": "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 11,
    "productId": 6,
    "productSlug": "weekend-shirt-collection",
    "productUrl": "/products/weekend-shirt-collection",
    "user": {
      "name": "Prince Quaye",
      "avatar": "https://randomuser.me/api/portraits/men/18.jpg"
    },
    "rating": 4,
    "title": "Smart and light",
    "comment": "Breathable in Accra heat. Works for church or hanging out.",
    "date": "2026-08-08",
    "verifiedPurchase": true,
    "helpfulVotes": 9,
    "coverImage": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 12,
    "productId": 6,
    "productSlug": "weekend-shirt-collection",
    "productUrl": "/products/weekend-shirt-collection",
    "user": {
      "name": "Fiifi Ansah",
      "avatar": "https://randomuser.me/api/portraits/men/36.jpg"
    },
    "rating": 5,
    "title": "Clean look",
    "comment": "Collar sits well and the stitching is neat. Will buy another colour.",
    "date": "2026-09-12",
    "verifiedPurchase": true,
    "helpfulVotes": 16,
    "coverImage": "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 13,
    "productId": 7,
    "productSlug": "boutique-rack-dress",
    "productUrl": "/products/boutique-rack-dress",
    "user": {
      "name": "Abena Osei",
      "avatar": "https://randomuser.me/api/portraits/women/10.jpg"
    },
    "rating": 5,
    "title": "So pretty",
    "comment": "Flowy and light. Got it for a weekend outing and it was perfect.",
    "date": "2026-09-02",
    "verifiedPurchase": true,
    "helpfulVotes": 23,
    "coverImage": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 14,
    "productId": 7,
    "productSlug": "boutique-rack-dress",
    "productUrl": "/products/boutique-rack-dress",
    "user": {
      "name": "Mawuena Kpodo",
      "avatar": "https://randomuser.me/api/portraits/women/85.jpg"
    },
    "rating": 4,
    "title": "Lovely dress",
    "comment": "Fabric is lovely and the waist fits well. Slightly longer than expected.",
    "date": "2026-10-07",
    "verifiedPurchase": true,
    "helpfulVotes": 7,
    "coverImage": "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 15,
    "productId": 8,
    "productSlug": "court-runner-sneakers",
    "productUrl": "/products/court-runner-sneakers",
    "user": {
      "name": "Daniel Ofori",
      "avatar": "https://randomuser.me/api/portraits/men/3.jpg"
    },
    "rating": 5,
    "title": "Very comfortable",
    "comment": "Walked all day in them with no pain. Looks great in red.",
    "date": "2026-09-18",
    "verifiedPurchase": true,
    "helpfulVotes": 14,
    "coverImage": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": 16,
    "productId": 8,
    "productSlug": "court-runner-sneakers",
    "productUrl": "/products/court-runner-sneakers",
    "user": {
      "name": "Naa Lamiokor",
      "avatar": "https://randomuser.me/api/portraits/women/90.jpg"
    },
    "rating": 5,
    "title": "Worth every cedi",
    "comment": "Light, cushioned and stylish. Sizing is true to size.",
    "date": "2026-10-10",
    "verifiedPurchase": true,
    "helpfulVotes": 21,
    "coverImage": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80"
  }
]

const myReviews = document.querySelector(".userReview");

const reviewCards = reviews.map((review) => {
  const reviewCard = document.createElement("div");
  reviewCard.classList.add("review-card");

  const userAvatar = document.createElement("img");
  userAvatar.src = review.user.avatar;
  userAvatar.alt = `${review.user.name}'s avatar`;
  userAvatar.classList.add("user-avatar");

  const userName = document.createElement("h4");
  userName.textContent = review.user.name;

  const rating = document.createElement("p");
  rating.classList.add("review-rating");
  rating.setAttribute("aria-label", `Rated ${review.rating} out of 5 stars`);

  const stars = document.createElement("span");
  stars.classList.add("review-stars");
  stars.setAttribute("aria-hidden", "true");
  stars.textContent = `${"★".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`;

  const ratingScore = document.createElement("span");
  ratingScore.classList.add("review-rating-score");
  ratingScore.textContent = `${review.rating} / 5`;

  rating.append(stars, ratingScore);

  const title = document.createElement("h5");
  title.textContent = review.title;

  const comment = document.createElement("p");
  comment.textContent = review.comment;

  reviewCard.append(userAvatar, userName, rating, title, comment);
  return reviewCard;
});

const reviewSlides = [];
for (let index = 0; index < reviewCards.length; index += 3) {
  const slide = document.createElement("div");
  slide.classList.add("review-slide");
  slide.setAttribute("role", "group");
  slide.setAttribute("aria-roledescription", "slide");
  slide.setAttribute(
    "aria-label",
    `Reviews ${index + 1} to ${Math.min(index + 3, reviewCards.length)} of ${reviewCards.length}`,
  );
  slide.append(...reviewCards.slice(index, index + 3));
  reviewSlides.push(slide);
}

if (reviewSlides.length > 0) {
  const firstClone = reviewSlides[0].cloneNode(true);
  const lastClone = reviewSlides[reviewSlides.length - 1].cloneNode(true);
  firstClone.setAttribute("aria-hidden", "true");
  lastClone.setAttribute("aria-hidden", "true");
  myReviews.replaceChildren(lastClone, ...reviewSlides, firstClone);

  const reviewControls = document.querySelectorAll("[data-review-direction]");
  let currentIndex = 1;
  let isAnimating = false;

  function finishTransition() {
    if (currentIndex === 0) {
      currentIndex = reviewSlides.length;
      myReviews.classList.add("is-resetting");
      myReviews.style.transform = `translateX(-${currentIndex * 100}%)`;
      requestAnimationFrame(() => {
        myReviews.classList.remove("is-resetting");
        isAnimating = false;
      });
    } else if (currentIndex === reviewSlides.length + 1) {
      currentIndex = 1;
      myReviews.classList.add("is-resetting");
      myReviews.style.transform = `translateX(-${currentIndex * 100}%)`;
      requestAnimationFrame(() => {
        myReviews.classList.remove("is-resetting");
        isAnimating = false;
      });
    } else {
      isAnimating = false;
    }
  }

  myReviews.addEventListener("transitionend", (event) => {
    if (event.propertyName !== "transform") return;
    finishTransition();
  });

  reviewControls.forEach((control) => {
    control.addEventListener("click", () => {
      if (isAnimating) return;

      isAnimating = true;
      currentIndex += control.dataset.reviewDirection === "next" ? 1 : -1;
      myReviews.style.transform = `translateX(-${currentIndex * 100}%)`;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        finishTransition();
      }
    });
  });
}

const footerDate = document.querySelector(".footerDate");
const currentYear = new Date().getFullYear();
footerDate.textContent = currentYear;
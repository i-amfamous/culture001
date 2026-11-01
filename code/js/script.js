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
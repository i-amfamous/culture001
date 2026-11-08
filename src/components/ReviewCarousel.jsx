import { useEffect, useMemo, useState } from "react";
import reviews from "./data/reviews";

function getPerView() {
  if (typeof window === "undefined") return 3;
  if (window.matchMedia("(min-width: 900px)").matches) return 3;
  if (window.matchMedia("(min-width: 600px)").matches) return 2;
  return 1;
}

const averageRating = (
  reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
).toFixed(1);

function formatReviewDate(value) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function chunk(list, size) {
  const chunks = [];

  for (let index = 0; index < list.length; index += size) {
    chunks.push(list.slice(index, index + size));
  }

  return chunks;
}

function ReviewCard({ review }) {
  const [avatarFailed, setAvatarFailed] = useState(false);
  const initials = review.user.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <article className="review-card">
      <div className="review-card-top">
        <p
          className="review-rating"
          aria-label={`Rated ${review.rating} out of 5 stars`}
        >
          <span className="review-stars" aria-hidden="true">
            {"★".repeat(review.rating)}
            {"☆".repeat(5 - review.rating)}
          </span>
          <span className="review-rating-score">{review.rating}.0</span>
        </p>
        <time className="review-date" dateTime={review.date}>
          {formatReviewDate(review.date)}
        </time>
      </div>
      <h4 className="review-title">{review.title}</h4>
      <p className="review-comment">{review.comment}</p>
      <footer className="review-author">
        <div className="review-author-avatar-wrap">
          {avatarFailed ? (
            <span
              className="user-avatar user-avatar--initials"
              aria-hidden="true"
            >
              {initials}
            </span>
          ) : (
            <img
              className="user-avatar"
              src={review.user.avatar}
              alt=""
              loading="lazy"
              onError={() => setAvatarFailed(true)}
            />
          )}
        </div>

        <div className="review-author-meta">
          <div className="review-author-name-row">
            <h5>{review.user.name}</h5>
            {review.verifiedPurchase ? (
              <span className="review-badge">Verified</span>
            ) : null}
          </div>
          <span className="review-author-role">
            {review.verifiedPurchase ? "Verified purchase" : "Customer review"}
          </span>
        </div>
      </footer>
    </article>
  );
}

const ReviewCarousel = () => {
  const [perView, setPerView] = useState(getPerView);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setPerView(getPerView());
      setIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = useMemo(() => chunk(reviews, perView), [perView]);
  const slideCount = slides.length;

  useEffect(() => {
    if (slideCount <= 1) return undefined;

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slideCount);
    }, 5200);

    return () => window.clearInterval(timer);
  }, [slideCount]);

  if (slideCount === 0) return null;

  return (
    <section className="review" aria-labelledby="reviews-title">
      <div className="review-heading">
        <div>
          <h2 id="reviews-title">Latest reviews</h2>
          <p className="review-subtitle">
            Real words from people wearing the collection.
          </p>
        </div>
        <div className="review-toolbar">
          <div
            className="review-summary"
            aria-label={`Average rating ${averageRating} out of 5 from ${reviews.length} reviews`}
          >
            <span className="review-summary-score">{averageRating}</span>
            <span className="review-summary-meta">
              <span className="review-stars" aria-hidden="true">
                ★★★★★
              </span>
              <span>{reviews.length} reviews</span>
            </span>
          </div>
        </div>
      </div>

      <div className="review-viewport" aria-live="polite" aria-atomic="true">
        <div
          className="userReview"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div
              key={slide[0]?.id ?? slideIndex}
              className="review-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`Reviews ${slideIndex + 1} of ${slideCount}`}
              aria-hidden={slideIndex !== index}
              style={{
                gridTemplateColumns: `repeat(${Math.min(perView, slide.length)}, minmax(0, 1fr))`,
              }}
            >
              {slide.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="review-dots" aria-label="Review slides">
        {slides.map((slide, slideIndex) => (
          <span
            key={slide[0]?.id ?? slideIndex}
            className={slideIndex === index ? "review-dot is-active" : "review-dot"}
            aria-current={slideIndex === index}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewCarousel;

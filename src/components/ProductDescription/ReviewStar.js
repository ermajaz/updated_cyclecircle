import PropTypes from "prop-types";
import React, { useState } from "react";
import "./ReviewStar.css";
import star from "../../img/star.svg";
import solarStar from "../../img/solar-star.svg";

function ReviewStar({ img}) {
  const [totalStars, setTotalStars] = useState(0);

  const toggleStar = () => {
    setTotalStars((prevTotal) => (prevTotal + 1) % 6);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <div
          key={i}
          className="reviewStar-starIcon"
          onClick={() => toggleIndividualStar(i)}
        >
          {i < totalStars ? (
            <img src={solarStar} alt="star Icon" />
          ) : (
            <img src={star} alt="star Icon" />
          )}
        </div>
      );
    }
    return stars;
  };

  const toggleIndividualStar = (index) => {
    if (index < totalStars) {
      setTotalStars(index);
    } else {
      setTotalStars(index + 1);
    }
  };

  return (
    <div className="reviewStar-ratings">
      <div className="reviewStar-rating">{renderStars()}</div>
      <span className="reviewStar-total-star-count">({totalStars})</span>
    </div>
  );
}

export default ReviewStar;

ReviewStar.propTypes = {
  img: PropTypes.string,
  solarStarBold: PropTypes.string,
};

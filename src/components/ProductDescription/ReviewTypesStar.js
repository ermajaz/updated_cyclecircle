import PropTypes from "prop-types";
import React, { useState } from "react";
import "./ReviewTypesStar.css";
import star from "../../img/starmultiple.svg";
import solarStar from "../../img/solar-star.svg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";

function ReviewTypesStar({ img, solarStarBold }) {
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
          className="reviewTypesStar-starIcon"
          onClick={() => toggleIndividualStar(i)}
        >
          {i < totalStars ? (
            <StarRoundedIcon/>
          ) : (
            <StarOutlineRoundedIcon />
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
    <div className="reviewTypesStar-ratings">
      <div className="reviewTypesStar-rating">{renderStars()}</div>
      <span className="reviewTypesStar-total-star-count">({totalStars})</span>
    </div>
  );
}

export default ReviewTypesStar;

ReviewTypesStar.propTypes = {
  img: PropTypes.string,
  solarStarBold: PropTypes.string,
};

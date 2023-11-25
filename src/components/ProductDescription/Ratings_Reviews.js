import React from "react";
import "./Ratings_Reviews.css";
import StarIcon from "@mui/icons-material/Star";
import { ratings } from "../../data";
import { reviews } from "../../data";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import { useState } from "react";
import { WriteReviews } from "./WriteReviews";
import health from "../../img/healthwhite.svg";
import release from "../../img/releasewhite.svg";
import service from "../../img/servicewhite.svg";
import { colors } from "@mui/material";
import starGold from "../../img/solar-smallstar.svg";
import star from "../../img/starmultiple_white.svg";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";

function Ratings_Reviews() {
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [reviewData, setReviewData] = useState(reviews);

  const toggleReviewPopup = () => {
    setShowReviewPopup(!showReviewPopup);
  };
  const closeReviewPopup = () => {
    setShowReviewPopup(false);
  };

  const handleLike = (index) => {
    const updatedReviewData = [...reviewData];
    updatedReviewData[index].liked = !updatedReviewData[index].liked;
    updatedReviewData[index].likes += updatedReviewData[index].liked ? 1 : -1;
    setReviewData(updatedReviewData);
  };

  const handleDislike = (index) => {
    const updatedReviewData = [...reviewData];
    updatedReviewData[index].disliked = !updatedReviewData[index].disliked;
    updatedReviewData[index].dislike += updatedReviewData[index].disliked
      ? 1
      : -1;
    setReviewData(updatedReviewData);
  };

  return (
    <React.Fragment>
      {showReviewPopup && <div className="overlay" />}
      <div className="containers">
        <div className="ratings-box">
          <div className="ratings-types-reviews-container">
            <div className="ratings-types-review-container-div">
              <p className="rating_number" style={{ fontSize: "1.8rem" }}>
                3.5
              </p>
              <div className="total-ratings">
                <div className="ratings-details">
                  <div className="ratings-details-svg-div">
                    <StarRoundedIcon />
                    <StarRoundedIcon />
                    <StarRoundedIcon />
                    <StarHalfRoundedIcon />
                    <StarOutlineRoundedIcon />
                  </div>
                  <p className="ratings-totals" style={{ color: "#eeeeee" }}>
                    4.0 rating of 750 reviews
                  </p>
                  <button onClick={toggleReviewPopup}>write a review</button>
                </div>
              </div>
            </div>
            <div className="rating-types-div-container">
              <div className="ratings-types-div">
                <div className="ratings-types-div-img-container">
                  <img src={service} />
                  <p style={{ color: "#eeeeee" }}>Product Design</p>
                </div>
                <div className="ratings-gold">
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                </div>
                <span>5</span>
              </div>
              <div className="ratings-types-div">
                <div className="ratings-types-div-img-container">
                  <img src={release} />
                  <p style={{ color: "#eeeeee" }}>Value for money</p>
                </div>
                <div className="ratings-gold">
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                  <StarOutlineRoundedIcon />
                </div>
                <span>4</span>
              </div>
              <div className="ratings-types-div">
                <div className="ratings-types-div-img-container">
                  <img src={health} />
                  <p style={{ color: "#eeeeee" }}>Product Service</p>
                </div>
                <div className="ratings-gold">
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                  <StarRoundedIcon />
                  <StarOutlineRoundedIcon />
                  <StarOutlineRoundedIcon />
                </div>
                <span>3</span>
              </div>
            </div>
          </div>
          <div className="ratings-graph">
            <h4>Ratings</h4>
            {ratings.map((rate, index) => (
              <li key={index}>
                <div className="ratings_5">
                  <div className="ratings_5_details">
                    <span>{rate.width}%</span>
                    <span
                      className="ratings_5_details_no_span"
                      style={{ fontSize: "0.7rem" }}
                    >
                      {rate.reviews} reviews
                    </span>
                  </div>
                  <div className="ratings_5_n">
                    {Array.from({ length: rate.noOfRate }, (_, i) => (
                      <StarRoundedIcon key={i} />
                    ))}
                  </div>
                </div>
                <div className="ratings-color-div">
                  <p style={{ width: `${rate.width}%` }}></p>
                </div>
              </li>
            ))}
          </div>
        </div>
        {showReviewPopup && <WriteReviews onClose={closeReviewPopup} />}
        <div className="reviews-containers">
          <h3>Reviews</h3>
          <div className="reviews-filter-containers">
            <p className="write-review" onClick={toggleReviewPopup}>
              <CreateOutlinedIcon
                style={{ fontSize: "25px", marginRight: "5px" }}
              />{" "}
              Write a Review
            </p>
            <div className="reviews-filter">
              <select name="filter" id="filter">
                <option value="most-recent">Most Recent</option>
                <option value="most-ratings">Most Ratings</option>
              </select>
            </div>
            <div className="reviews-ratings">
              <select name="ratings" id="ratings">
                <option value="ratings">Ratings</option>
                <option value="reviews">Reviews</option>
              </select>
            </div>
          </div>
        </div>
        <div className="reviews-info-containers">
          {reviews.map((review, index) => (
            <div key={index} className="review-detail">
              <div className="review-name-containers">
                <div className="review-logo">
                  <img src={review.img} />
                  <div className="review-name-time">
                    <h4>{review.name}</h4>
                    <span>{review.time}</span>
                  </div>
                </div>
                <div className="review-ratings">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <StarRoundedIcon key={i} />
                  ))}
                </div>
              </div>
              <div className="review-desc">{review.review}</div>
              <div className="review-reaction">
                {review.liked ? (
                  <ThumbUpAltIcon
                    style={{
                      cursor: "pointer",
                      color: "#3a9978",
                      marginBottom: "5px",
                    }}
                    onClick={() => handleLike(index)}
                  />
                ) : (
                  <ThumbUpOutlinedIcon
                    style={{
                      cursor: "pointer",
                      color: "#3a9978",
                      marginBottom: "5px",
                    }}
                    onClick={() => handleLike(index)}
                  />
                )}
                <span>{review.likes}</span>
                {review.disliked ? (
                  <ThumbDownIcon
                    style={{
                      cursor: "pointer",
                      color: "rgb(230, 11, 29)",
                      marginTop: "3px",
                    }}
                    onClick={() => handleDislike(index)}
                  />
                ) : (
                  <ThumbDownAltOutlinedIcon
                    style={{
                      cursor: "pointer",
                      color: "rgb(230, 11, 29)",
                      marginTop: "3px",
                    }}
                    onClick={() => handleDislike(index)}
                  />
                )}
                <span>{review.dislike}</span>
                {/* <ChatBubbleOutlineOutlinedIcon style={{cursor:"pointer"}}/>
              <span>{review.share}</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Ratings_Reviews;

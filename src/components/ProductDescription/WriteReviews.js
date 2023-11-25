import React, { useState,useEffect,useRef } from "react";
import { Ratings } from "./ReviewStar";
import "./WriteReviews.css";
import ReviewStar from "./ReviewStar";
import ReviewTypesStar from "./ReviewTypesStar";
import star from "../../img/star.svg";
import solarStar from "../../img/solar-smallstar.svg";
import globe from "../../img/globe.svg";
import close from "../../img/close.svg";
import health from "../../img/health.svg";
import Service from "../../img/service.svg";
import release from "../../img/release.svg";

export const WriteReviews = ({ onClose }) => {
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handlePrivacyChange = (event) => {
    setIsAnonymous(event.target.value === "anonymous");
  };
  const infoRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        // Clicked outside the component, you can close it here
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div ref={infoRef} className="write-review-container">
      <div className="div">Write Review</div>
      <img
        className="octicon-x"
        alt="Octicon x"
        src={close}
        onClick={onClose}
      />
      <div className="overlap">
        <textarea className="text-wrapper-3" placeholder="write a review..." />
      </div>
      <div className="policy">
        <img className="gridicons-globe" alt="Gridicons globe" src={globe} />
        <p className="text-wrapper-4">
          Your review will be in our web page under cyclecircle privacy policy
        </p>
      </div>
      <div className="text-wrapper-2">
        {isAnonymous ? "Anonymous" : <p style={{fontSize:"1.3rem",margin:0}}>Deva,<span style={{fontSize:"1rem",marginBottom:"3px"}}>Tamilnadu</span></p>}
      </div>
      <div className="publish-privacy">
        <div className="publish-container-div">
          <input type="radio" id="public" name="privacy" value="public" defaultChecked={!isAnonymous}
            onChange={handlePrivacyChange}/>
          <label for="html">Public</label>
        </div>
        <div className="publish-container-div">
          <input type="radio" id="private" name="privacy" value="anonymous" onChange={handlePrivacyChange}/>
          <label for="css">Anonymous</label>
        </div>
      </div>
      <div className="publish" onClick={onClose}>
        <div className="overlap-group">
          <div className="text-wrapper-5">Publish</div>
        </div>
      </div>
      <div className="cancel" onClick={onClose}>
        <div className="div-wrapper">
          <div className="text-wrapper-6">Cancel</div>
        </div>
      </div>
      <div className="ratings-types-container">
        <div className="ratings-types-div">
          <div className="ratings-types-img-div">
            <img src={Service} />
            <span>Product Design</span>
          </div>
          <ReviewTypesStar
            className="ratings-instance"
            img={star}
            solarStarBold={solarStar}
          />
        </div>
        <div className="ratings-types-div">
          <div className="ratings-types-img-div">
            <img src={release} />
            <span>Value for Money</span>
          </div>
          <ReviewTypesStar
            className="ratings-instance"
            img={star}
            solarStarBold={solarStar}
          />
        </div>
        <div className="ratings-types-div">
          <div className="ratings-types-img-div">
            <img src={health} />
            <span>Product Service</span>
          </div>
          <ReviewTypesStar
            className="ratings-instance"
            img={star}
            solarStarBold={solarStar}
          />
        </div>
      </div>
    </div>
  );
};

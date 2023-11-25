import React, { useState } from "react";
import "./Detail.css";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import SharePopUp from "./SharePopUp";

function FavShare() {
  const [showSharePopup, setShowSharePopup] = useState(false);

  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  const toggleSharePopup = () => {
    setShowSharePopup(!showSharePopup);
  };

  const closeSharePopup = () => {
    setShowSharePopup(false);
  };

  return (
    <div className="product-fav-share">
      <Link to="#!" className="favourite" onClick={toggleFavorite}>
        {isFavorite ? (
          <>
            <FavoriteIcon
              style={{
                color: "#9E3DCC",
                fontSize: "2.6rem",
                marginRight: "9px",
              }}
            />
            Added
          </>
        ) : (
          <>
            <FavoriteBorderOutlinedIcon
              style={{
                color: "#9E3DCC",
                fontSize: "2.6rem",
                marginRight: "9px",
              }}
            />
            Favourite
          </>
        )}
      </Link>
      <Link to="#!" className="share" onClick={toggleSharePopup}>
        <ShortcutOutlinedIcon
          style={{
            color: "#9E3DCC",
            fontSize: "2.6rem",
            marginRight: "9px",
          }}
        />
        Share
      </Link>
      {showSharePopup && <SharePopUp onClose={closeSharePopup} />}
    </div>
  );
}

export default FavShare;

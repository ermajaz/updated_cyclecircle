import React from "react";
import "./Discover.css";

function Discover() {
  return (
    <div className="discover-container">
      <div className="discover-img-grid">
        <iframe
          src="https://www.youtube.com/embed/rgArtK1ag-w?si=ykuGDcHQmxJTcifG"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <img src="https://assets.specialized.com/i/specialized/74922-01_ROAD-4643_05?$hybris-pdp-photo-carousel$"></img>
        <img src="https://www.carbonbikeframe7.com/image/cache/catalog/0000SL7/SpecializedSL7WHITE%20(13)-800x600.jpg"></img>
      </div>
    </div>
  );
}

export default Discover;

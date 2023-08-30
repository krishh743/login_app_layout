import React from "react";
import HeaderIcon from "../../assests/logo2.png";


function HomePage() {
  return (
    <div className="text-with-image-container">
      <div className="text-content">
        <h2>
          Introducing the Next-Gen Handheld Traffic Manage 7-Inch AI Laser Speed
          Device with Camera
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          augue eu risus laoreet, non vestibulum quam feugiat.
        </p>
      </div>
      <div className="text-content">
        <img src={HeaderIcon} />
        <button className="button">Buy</button>
      </div>
    </div>
  );
}

export default HomePage;

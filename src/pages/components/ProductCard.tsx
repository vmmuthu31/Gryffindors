import React, { useState } from "react";

interface Product {
  name: string;
  description: string;
  githublink: string;
  mediumlink: string;
}

const ProductCard = ({ name, description, githublink, mediumlink}: Product) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="profile-card-container">
      <div
        className="profile-card relative"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="profile-card__image">
          {/* <img src={image} alt="Profile" /> */}
   
          <div className="profile-card__footer bg-white p-4">
            <div className="profile-card__name text-lg font-bold">{name}</div>
            <div className="profile-card__email text-sm font-medium">{description}</div>
            <div className="">{githublink}</div>
            <div className="">{mediumlink}</div>
          </div>
          </div>
      </div>
    </div>
  );
};

export default ProductCard;

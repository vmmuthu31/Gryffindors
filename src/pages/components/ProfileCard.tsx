import React, { useState } from "react";

interface Profile {
  name: string;
  email: string;
  image: string;
  Position: string;
  Profession: string;
  Contributor:string;
}

const ProfileCard = ({ name, email, image, Position,Profession ,Contributor}: Profile) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="profile-card-container">
      <div
        className="profile-card"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="profile-card__image">
          <img src={image} alt="Profile" />
        </div>
        {isHovered ? (
          <div className="profile-card__hover-details">
            <div className="profile-card__hover-name">{Position}</div>
            <div className="profile-card__hover-email">{Profession}</div>
            <div className="profile-card__hover-info">{Contributor}</div>
          </div>
        ) : (
          <div className="profile-card__footer">
            <div className="profile-card__name">{name}</div>
            <div className="profile-card__email">{email}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;

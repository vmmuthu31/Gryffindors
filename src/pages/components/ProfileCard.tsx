import React, { useState } from "react";

interface Profile {
  name: string;
  email: string;
  image: string;
  position: string;
  profession: string;
  contributor: string;
}

const ProfileCard = ({ name, email, image, position, profession, contributor }: Profile) => {
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
          <img src={image} alt="Profile" />
        </div>
        {isHovered ? (
          <div className="profile-card__hover-details absolute top-0 left-0 bg-gray-100 text-gray-800 py-4 px-6 w-full h-full flex flex-col justify-center">
            <div className="profile-card__hover-name text-lg font-bold">{position}</div>
            <div className="profile-card__hover-email text-sm font-medium">{profession}</div>
            <div className="profile-card__hover-info text-sm">{contributor}</div>
          </div>
        ) : (
          <div className="profile-card__footer bg-white p-4">
            <div className="profile-card__name text-lg font-bold">{name}</div>
            <div className="profile-card__email text-sm font-medium">{email}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;

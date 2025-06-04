import React, { useState } from "react";

const ImageWithPlaceholder = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
        
      {!isLoaded && (
        <img
          src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
          alt="placeholder"
          className="w-full h-full rounded-xl object-cover absolute top-0 left-0"
        />
      )}

      <img
        src={src}
        alt={alt}
        className={`w-full h-full rounded-xl object-cover transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default ImageWithPlaceholder;

import React, { useState } from "react";

const ImageWithLoadingBlur = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoaded = () => setIsLoaded(true);
  const imageStyle = isLoaded ? {} : { filter: "blur(5px)" };

  return (
    <img src={src} alt={alt} style={imageStyle} onLoad={handleImageLoaded} />
  );
};

export default ImageWithLoadingBlur;

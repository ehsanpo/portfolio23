import React, { useRef, useEffect } from "react";
import hoverEffect from "hover-effect";

const LocalImage = () => {
  const container = useRef();
  const ImageEffectArray = [
    "../images/hover/111.jpg",
    "../images/hover/112.jpg",
  ];
  const randomElement =
    ImageEffectArray[Math.floor(Math.random() * ImageEffectArray.length)];
  useEffect(() => {
    var myAnimation = new hoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: "../images/ehsan/112.jpg",
      image2: "../images/ehsan/116.jpg",
      displacementImage: randomElement,
    });
  }, [container, randomElement]);

  return (
    <div
      id="imgContainer"
      ref={container}
      style={{
        width: 512,
        height: 512,
        marginTop: 80,
      }}
    />
  );
};

export default LocalImage;

import React, { useRef, useEffect } from "react";
// @ts-ignore
import hoverEffect from "hover-effect";

const LocalImage = () => {
  const container = useRef();
  const ImageEffectArray = ["../img/111.jpg", "../img/112.jpg"];
  const randomElement =
    ImageEffectArray[Math.floor(Math.random() * ImageEffectArray.length)];
  useEffect(() => {
    var myAnimation = new hoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: "../img/ehsan1.jpg",
      image2: "../img/ehsan2.jpg",
      displacementImage: randomElement,
    });
  }, [container, randomElement]);

  return (
    <div
      id="imgContainer"
      className="clipPath2"
      // @ts-ignore
      ref={container}
      style={{
        width: 512,
        height: 512,
        marginTop: 80,
        maxWidth: "100%",
      }}
    />
  );
};

export default LocalImage;

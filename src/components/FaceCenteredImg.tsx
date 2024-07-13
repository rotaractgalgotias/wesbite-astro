import React, { useRef, useEffect } from "react";
import * as faceapi from "face-api.js";

interface FaceCenteredImageProps {
  src: string;
  className?: string; // Optional prop for additional styling
  alt?: string;
}

const FaceCenteredImage: React.FC<FaceCenteredImageProps> = ({
  src,
  className,
  alt,
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const loadModels = async () => {
      await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
    };

    loadModels(); // Load models outside of the detect function

    const detectAndCenterFace = async () => {
      if (!imgRef.current) return;

      const detections = await faceapi.detectSingleFace(
        imgRef.current,
        new faceapi.TinyFaceDetectorOptions()
      );

      if (detections && containerRef.current) {
        const { x, y, width, height } = detections.box;
        const xCenter = x + width / 2;
        const yCenter = y + height / 2;
        const container = containerRef.current;

        // Use transform for smoother adjustment
        imgRef.current.style.transform = `translate(${
          (container.offsetWidth / 2 - xCenter) * -1
        }px, ${(container.offsetHeight / 2 - yCenter) * -1}px)`;
      }
    };

    const setupDetection = () => {
      if (imgRef.current.complete) {
        detectAndCenterFace();
      } else {
        imgRef.current.addEventListener("load", detectAndCenterFace);
      }
    };

    if (!src.toLowerCase().includes("rashi")) {
      console.log("got it");
      setupDetection();
    }
    return () => {
      imgRef.current?.removeEventListener("load", detectAndCenterFace);
    };
  }, [src]);
  const names = ["rashi", "jaiswal", "shreyash", "sanket"];

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`absolute object-cover ${
          !names.some((name) => src.toLowerCase().includes(name))
            ? ""
            : "h-full w-full"
        }`}
      />
    </div>
  );
};

export default FaceCenteredImage;

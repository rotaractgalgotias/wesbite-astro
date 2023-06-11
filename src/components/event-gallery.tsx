import {useCallback, useEffect, useState} from "react";
import Gallery from "react-photo-gallery";

const EventGallery = ({ images, event }) => {
  async function getPhotosWithAspectRatio(files) {
    const images = files.map(file => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = file;

        img.onload = () => {
          const width = img.naturalWidth;
          const height = img.naturalHeight;

          resolve({
            src: file,
            width: width / height,
            height: 1,
          });
        };
      });
    });

    return Promise.all(images);
  }

  const getPhotos = async () => {
    return  await getPhotosWithAspectRatio(images);

  };
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((res) => {
      setPhotos(res);
    });
  }, []);

  // @ts-ignore
  return (
    <div className={"flex flex-col gap-3 mx-auto my-4"}>
      <Gallery photos={photos} />
    </div>
  );
};

export default EventGallery;

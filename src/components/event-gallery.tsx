import { useEffect, useState } from "react";
import Gallery from "react-photo-gallery";

const EventGallery = ({ images, event }) => {
  async function getPhotosWithAspectRatio(files: any[]) {
    const images = files.map((file) => {
      return new Promise((resolve) => {
        resolve({
          src: file.src,
          width: file.width / file.height,
          height: 1,
        });
      });
    });

    return Promise.all(images);
  }

  const getPhotos = async () => {
    return await getPhotosWithAspectRatio(images);
  };

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    getPhotos().then((res) => {
      setPhotos(res);
    });
  }, []);

  // @ts-ignore
  return (
    <div className={"mx-auto my-4 flex flex-col gap-3"}>
      <Gallery photos={photos} />
    </div>
  );
};

export default EventGallery;

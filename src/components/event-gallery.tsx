import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
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

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <PhotoView src={photo.src} key={key}>
        <img
          {...photo}
          alt={event}
          className={"h-full rounded-lg object-contain cursor-pointer m-1 h-full"}
        />
      </PhotoView>
    ),[]
  );

  // @ts-ignore
  return (
    <div className={"flex flex-col gap-3 mx-auto my-4"}>
      {/*<PhotoProvider>*/}
      {/*  {photos.map((image, index) => (*/}
      {/*    <PhotoView src={image.src} key={index}>*/}
      {/*      <img*/}
      {/*        src={image.src}*/}
      {/*        alt={event}*/}
      {/*        className={"h-full rounded-lg object-contain cursor-pointer"}*/}
      {/*      />*/}
      {/*    </PhotoView>*/}
      {/*  ))}*/}
      {/*</PhotoProvider>*/}
      <PhotoProvider>
          {/* @ts-ignore */}
          <Gallery photos={photos} />
      </PhotoProvider>
    </div>
  );
};

export default EventGallery;

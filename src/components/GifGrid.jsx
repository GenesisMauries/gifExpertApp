import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then((newImg) => setImages(newImg));
    // getGifs(category);
  }, []);
  return (
    <>
      {images.map(({ id, title, url }) => {
        return (
          <article key={id}>
            <h4>{title}</h4>
            <img src={url} alt={title} />
          </article>
        );
      })}
    </>
  );
};

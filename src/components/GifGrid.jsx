import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getGifs(category).then((newImg) => setImages(newImg));
    // getGifs(category);
  }, []);
  return (
    <>
      <h3>{category}</h3>
      <article className='card-grid'>
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />; // mandamos el objeto por expansion
        })}
      </article>
    </>
  );
};

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
export const useFectGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getGifs(category).then((newImg) => {
      setImages(newImg);
      setIsLoading(false);
    });
    // getGifs(category);
  }, []);
  return {
    images,
    isLoading,
  };
};
// Hook es una funcion que regresa algo

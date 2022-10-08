import { GifItem } from './GifItem';
import { useFectGifs } from '../hooks/useFectGifs';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFectGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {!isLoading ? null : <h3>Cargando...</h3>}

      <article className='card-grid'>
        {images.map((image) => {
          return <GifItem key={image.id} {...image} />; // mandamos el objeto por expansion
        })}
      </article>
    </>
  );
};

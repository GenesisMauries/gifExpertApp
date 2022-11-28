import { GifItem } from './GifItem';
import { useFectGifs } from '../hooks/useFectGifs';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFectGifs(category);

  return (
    <>
      <h2>{category}</h2>
      {/* And logico && */}
      {isLoading && <h3>Cargando...</h3>}

      <article className='card-grid'>
        {images.length > 0 &&
          images.map((image) => {
            return <GifItem key={image.id} {...image} />; // mandamos el objeto por expansion
          })}
      </article>
    </>
  );
};

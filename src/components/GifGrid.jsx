import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
  // Con esta invocacion se dispara la funcion cada que se renderiza el componente y se deberia llamar una sola vez
  getGifs(category);
  return (
    //
    <>
      <h3>{category}</h3>
    </>
  );
};

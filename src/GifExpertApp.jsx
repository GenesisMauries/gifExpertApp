import { useState } from 'react';

function GifExpertApp() {
  // mantener el estado de los elementos buscados
  const [categories, setCategories] = useState(['Melendi', 'Miranda']);
  // console.log(categories);
  const onAddCategory = () => {
    // Copia el estado y suma un nuevo elemento
    setCategories([...categories, 'Dua Lipa ']);
    //Usando callback de useState
    // setCategories((cat) => [...cat, 'Dua Lipa']);
  };
  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert APP</h1>

      {/* Input / barra de busqueda */}
      {/* Output / resultados */}
      <button onClick={onAddCategory}>Agregar</button>
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
}

export default GifExpertApp;

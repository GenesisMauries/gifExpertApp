import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

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
      <AddCategory setCategories={setCategories} />
      {/* Output / resultados */}
      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
}

export default GifExpertApp;

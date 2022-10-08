import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
function GifExpertApp() {
  // mantener el estado de los elementos buscados
  const [categories, setCategories] = useState([]);
  // console.log(categories);
  const onAddCategory = (value) => {
    // console.log(value);
    if (!categories.includes(value)) {
      // Copia el estado y suma un nuevo elemento
      setCategories([value, ...categories]);
    }
    //Usando callback de useState
    // setCategories((cat) => [...cat, 'Dua Lipa']);
  };
  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert APP</h1>

      {/* Input / barra de busqueda */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />

      {/* Output / resultados */}

      {categories.map((category) => {
        return <GifGrid key={category} category={category} />;
      })}
    </>
  );
}

export default GifExpertApp;

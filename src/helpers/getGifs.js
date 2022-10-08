export const getGifs = async (category) => {
  const api_key = 'dCUj0zANniXUXF0JxtuxomLPEzqIiV4m';
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=25`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    };
  });
  console.log(gifs); // se ejecuta dos veces por el stric mode de index.js
  return gifs; // retorna el nuevo arreglo de gifs
};

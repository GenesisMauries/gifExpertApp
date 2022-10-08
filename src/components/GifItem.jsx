export const GifItem = ({ title, url }) => {
  console.log(title, url);
  return (
    <article className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </article>
  );
};

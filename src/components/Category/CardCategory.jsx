export const CardCategory = ({ category }) => {
  return (
    <>
      <img src={category.url} alt={category.categoryName} />
      <p>{category.description}</p>
    </>
  );
};

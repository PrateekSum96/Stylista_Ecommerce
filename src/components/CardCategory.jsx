export const Card_Category = ({ category }) => {
  return (
    <>
      <img src={category.url} alt={category.categoryName} />
      <p>{category.description}</p>
    </>
  );
};

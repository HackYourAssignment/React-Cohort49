import Category from './Category';

const Categories = ({ categories, currentCategory, changeCurrentCategory }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <Category
          key={category}
          name={category}
          isCurrent={category === currentCategory}
          changeCurrentCategory={changeCurrentCategory}
        />
      ))}
    </div>
  );
};

export default Categories;

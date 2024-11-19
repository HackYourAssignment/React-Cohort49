import React from 'react';

const Category = ({ name, isCurrent, changeCurrentCategory }) => {
  const handleClick = () => changeCurrentCategory(name);

  const active = isCurrent ? 'active' : '';

  return (
    <button onClick={handleClick} className={`category ${active}`}>
      {name}
    </button>
  );
};

export default Category;

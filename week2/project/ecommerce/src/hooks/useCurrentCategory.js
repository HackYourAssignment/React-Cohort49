import { useState } from 'react';

const useCurrentCategory = () => {
  const [currentCategory, setCurrentCategory] = useState('');

  const changeCurrentCategory = (newCategory) => {
    setCurrentCategory((prevCategory) =>
      prevCategory === newCategory ? '' : newCategory,
    );
  };

  return { currentCategory, changeCurrentCategory };
};

export default useCurrentCategory;

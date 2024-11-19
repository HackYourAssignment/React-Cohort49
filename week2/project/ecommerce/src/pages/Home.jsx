import Categories from '../components/home/Categories';
import Products from '../components/home/Products';
import useCurrentCategory from '../hooks/useCurrentCategory';
import useLoader from '../hooks/useLoader';
import { CircularProgress } from '@mui/material';

const Home = () => {
  const { currentCategory, changeCurrentCategory } = useCurrentCategory();

  const [categoriesError, categories] = useLoader('categories');
  const [productsError, products] = useLoader(
    currentCategory ? `category/${currentCategory}` : '',
  );

  if (categoriesError) throw categoriesError;
  if (productsError) throw productsError;
  if (!categories || !products) return <CircularProgress />;

  return (
    <div className="container">
      <Categories
        categories={categories}
        currentCategory={currentCategory}
        changeCurrentCategory={changeCurrentCategory}
      />
      <Products products={products} />
    </div>
  );
};

export default Home;

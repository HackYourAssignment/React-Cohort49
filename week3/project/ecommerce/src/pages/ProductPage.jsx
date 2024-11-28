import { useParams } from "react-router-dom";
import heartRegular from "../assets/heart-regular.svg";
import heartSolid from "../assets/heart-solid.svg";
import { useFavorite } from "../context/FavoriteContext";
import Header from "../components/Header";
import useFetch from "../hooks/useFetch";

const ProductPage = () => {
  const { id } = useParams();

  const { favorites, toggleFavorite } = useFavorite();

  const {
    data: product,
    error,
    loading,
  } = useFetch(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <>
      <div className="product_details">
        <Header title={product.title} />

        <div className="product_details__information">
          <div className="product_details__image">
            <div className="product_image__container">
              <img
                className="product__image"
                src={product.image}
                alt={product.title}
              />
              <div className="product_image__favourite_container">
                <img
                  className="product_image__favourite"
                  src={
                    favorites.includes(product.id) ? heartSolid : heartRegular
                  }
                  onClick={(e) => toggleFavorite(e, product.id)}
                />
              </div>
            </div>
          </div>
          <p className="product_details__description">{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;

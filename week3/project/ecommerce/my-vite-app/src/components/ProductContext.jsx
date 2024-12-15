import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ProductContext = createContext();

const ProductProvider = (props) => {
  const [favorites, setFavorites] = useState([]);
  return (
    <ProductContext.Provider value={[favorites, setFavorites]}>
      {props.children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ProductProvider, ProductContext };
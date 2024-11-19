const BASE_URL = "https://fakestoreapi.com/products";

const fetchHandler = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchCategories = () => {
  try {
    const url = `${BASE_URL}/categories`;
    return fetchHandler(url);
  } catch (error) {
    console.log("Error fetching categories:", error);
    return "error";
  }
};

const fetchProducts = (category) => {
  try {
    if (category) {
      const url = `${BASE_URL}/category/${category}`;
      return fetchHandler(url);
    } else {
      return fetchHandler(BASE_URL);
    }
  } catch (error) {
    console.log("Error fetching products:", error);
    return "error";
  }
};

const fetchProductById = (id) => {
  try {
    const url = `${BASE_URL}/${id}`;
    return fetchHandler(url);
  } catch (error) {
    console.log("Error fetching product by id:", error);
    return "error";
  }
};

export { fetchCategories, fetchProducts, fetchProductById };

import Categories from "./components/Categories.jsx";
import ProductsList from "./components/ProductsList";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory((prevCategory) =>
      prevCategory === category ? null : category
    );
  };

  return (
    <div className="App">
      <Navbar title={"Products"} />
      <Categories handleSelectCategory={handleSelectCategory} />
      <ProductsList category={selectedCategory} />
    </div>
  );
}

export default App;
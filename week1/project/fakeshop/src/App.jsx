import React from 'react';
import CategoryList from './components/CategoryList';
import ProductList from './components/ProductList';
import "./App.css"
function App() {
  return (
    <div className='App'>
      <CategoryList />
      <ProductList />
    </div>
  );
}

export default App;

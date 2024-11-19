import './App.css';
import Home from './pages/Home';
import Layout from './pages/Layout';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Layout />}
      errorElement={<h1>Something went wrong, try again later!</h1>}
    >
      <Route index element={<Home />} />
      <Route path="product/:id" element={<ProductDetails />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

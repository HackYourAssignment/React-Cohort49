import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="app">
      <h1 className="app-title">Products</h1>
      <Outlet />
    </div>
  );
};

export default Layout;

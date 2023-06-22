import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/StoreHooks';

const PublicRoutes = () => {
  const isAuthenticated = Boolean(
    useAppSelector((state) => state.isAuthenticated)
  );
  return isAuthenticated ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoutes;

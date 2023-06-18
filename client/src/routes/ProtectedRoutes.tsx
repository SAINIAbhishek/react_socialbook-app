import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../app/StoreHooks';

const ProtectedRoutes = () => {
  const isAuthenticated = Boolean(
    useAppSelector((state) => state.isAuthenticated)
  );
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

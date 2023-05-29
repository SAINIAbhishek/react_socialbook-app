import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppStateType } from '../types/app-state.type';

const PublicRoutes = () => {
  const isAuth = Boolean(useSelector((state: AppStateType) => state.token));
  return isAuth ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoutes;

import { useSelector } from 'react-redux';
import { AppStateType } from '../types/AppStateType';
import { Navigate, Outlet } from 'react-router-dom';

const PublicRoutes = () => {
  const isAuth = Boolean(useSelector((state: AppStateType) => state.token));
  return isAuth ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoutes;

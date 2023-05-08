import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { AppStateType } from '../types/AppStateType';

const ProtectedRoutes = () => {
  const isAuth = Boolean(useSelector((state: AppStateType) => state.token));
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

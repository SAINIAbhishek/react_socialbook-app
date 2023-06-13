import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { StateType } from '../state/StateType';

const ProtectedRoutes = () => {
  const isAuth = Boolean(useSelector((state: StateType) => state.token));
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;

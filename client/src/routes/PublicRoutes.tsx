import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { StateType } from '../state/StateType';

const PublicRoutes = () => {
  const isAuth = Boolean(useSelector((state: StateType) => state.token));
  return isAuth ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoutes;

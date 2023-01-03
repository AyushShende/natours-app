import { Navigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();

  if (userLoading) return <p>Loading</p>;

  if (!user) {
    return <Navigate to="/register" />;
  }

  return children;
};
export default ProtectedRoute;

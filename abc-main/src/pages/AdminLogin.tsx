import { Navigate } from 'react-router-dom';
import Auth from '@/auth/Auth';

const AdminLogin = () => {
  return <Navigate to="/auth" replace />;
};

export default AdminLogin;
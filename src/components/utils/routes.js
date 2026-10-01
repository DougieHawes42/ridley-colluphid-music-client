import "./style.scss";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const AuthRoute = ({ children, title }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated)
    return <Navigate to={`${process.env.REACT_APP_PRIVATE_ROUTE}/dashboard`} />;

  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export const PrivateRoute = ({ children, title }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated)
    return <Navigate to={`${process.env.REACT_APP_PUBLIC_ROUTE}/signin`} />;

  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export const PublicRoute = ({ children, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

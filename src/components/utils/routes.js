import "./style.scss";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

export const AuthRoute = ({ children, title }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated)
    return <Navigate to={`${process.env.REACT_APP_PRIVATE_ROUTE}/dashboard`} />;

  return (
    <div className="route">
      <motion.h2
        className="route-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        {title}
      </motion.h2>
      {children}
    </div>
  );
};

export const PrivateRoute = ({ children, title }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated)
    return <Navigate to={`${process.env.REACT_APP_PUBLIC_ROUTE}/signin`} />;

  return (
    <div className="route">
      <motion.h2
        className="route-title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        {title}
      </motion.h2>
      {children}
    </div>
  );
};

export const PublicRoute = ({ children }) => {
  return (
    <motion.div
      className="route"
      initial={{
        opacity: 0,
        y: 45,
        scale: 0.96,
        filter: "blur(8px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 14,
        mass: 1,
      }}>
      {children}
    </motion.div>
  );
};

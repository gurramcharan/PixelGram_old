import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export default function RequiresAuth({ children }) {
  let location = useLocation();
  const { CheckLogin } = useContext(AuthContext);
  return CheckLogin() ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

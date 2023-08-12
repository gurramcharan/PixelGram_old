import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuhtContext } from "../Contexts/AuthContext";

export default function RequirsAuth({ children }) {
  let location = useLocation();
  const { CheckLogin } = useContext(AuhtContext);
  return CheckLogin() ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

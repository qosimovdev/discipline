import { useAuthInit } from "../hooks/auth/useAuthHint";

export function AuthProvider({ children }) {
  useAuthInit();
  return children;
}

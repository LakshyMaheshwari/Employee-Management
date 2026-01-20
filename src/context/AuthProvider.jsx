import { createContext, useEffect, useState, memo } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    
    const storedEmployees = localStorage.getItem("employees");
    const storedAdmin = localStorage.getItem("admin");

    if (!storedEmployees || !storedAdmin) {
      setLocalStorage(); 
    }

    const { employees, admin } = getLocalStorage();
    setEmployees(employees);
    setAdmin(admin);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        employees,
        setEmployees, 
        admin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default memo(AuthProvider);

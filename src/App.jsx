import React, { useState, useContext, useEffect } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const data = useContext(AuthContext);

 useEffect(() => {
  const storedUser = localStorage.getItem("loggedInUser");

  if (!storedUser) return;

  try {
    const userData = JSON.parse(storedUser);

    if (!userData?.role) return;

    setUser({ role: userData.role });
    setLoggedInUser(userData.data || null);
  } catch (error) {
    console.error("Invalid localStorage data");
    localStorage.removeItem("loggedInUser");
  }
}, []);


  const handleLogin = (email, password) => {

    if (email === "employer@example.com" && password === "123") {
      const adminData = {
        role: "admin",
        data: { email }
      };

      setUser({ email, role: "admin" });
      localStorage.setItem("loggedInUser", JSON.stringify(adminData));
      return;
    }


    if (data) {
      const employee = data.employees.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        const employeeData = {
          role: "employee",
          data: employee
        };

        setUser({ email, role: "employee" });
        setLoggedInUser(employee);
        localStorage.setItem("loggedInUser", JSON.stringify(employeeData));
        return;
      }
    }

    alert("Invalid credentials");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user?.role === "admin" && <AdminDashboard />}

      {user?.role === "employee" && (
        <EmployeeDashboard data={loggedInUser} />
      )}
    </>
  );
};

export default App;

import { memo, useContext } from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";
import Stats from "../Other/Stats";
import { AuthContext } from "../../context/AuthProvider";
import NewEmployee from "../Other/NewEmployee";

const AdminDashboard = () => {

  const data = useContext(AuthContext);

  return (
    <div className="h-full w-full p-10 bg-[#0f172a] text-white">
      <Header />
      <CreateTask />
      <AllTask />
      <Stats data={data} />
      <NewEmployee />
      
    </div>
  );
};

export default memo(AdminDashboard);

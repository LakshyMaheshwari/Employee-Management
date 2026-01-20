import { memo } from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/AllTask";

const AdminDashboard = () => {
  return (
    <div className="h-full w-full p-10 bg-[#0f172a] text-white">
      <Header />
      <CreateTask />
      <AllTask />
      
    </div>
  );
};

export default memo(AdminDashboard);

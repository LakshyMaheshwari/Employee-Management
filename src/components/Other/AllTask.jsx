import { memo, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const getStatusBg = (task) => {
  if (task.completed) return "bg-green-500";
  if (task.failed) return "bg-red-500";
  if (task.active) return "bg-blue-500";
  return "bg-yellow-400"; 
};

const AllTask = () => {
  const { employees } = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-4 mt-6 rounded h-60 overflow-y-auto no-scrollbar">
      {employees.map((employee) =>
        employee.tasks.map((task) => (
          <div
            key={`${employee.id}-${task.id}`}
            className={`${getStatusBg(task)} mb-2 py-2 px-4 flex justify-between rounded text-black`}
          >
            <h2 className="w-1/4 font-semibold">{employee.firstName}</h2>
            <h3 className="w-2/4">{task.title}</h3>
            <h5 className="w-1/4 text-right font-medium">
              {task.completed
                ? "Completed"
                : task.failed
                ? "Failed"
                : task.active
                ? "Active"
                : "Pending"}
            </h5>
          </div>
        ))
      )}
    </div>
  );
};

export default memo(AllTask);

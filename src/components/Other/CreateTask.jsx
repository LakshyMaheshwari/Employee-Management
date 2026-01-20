import { memo, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const { employees, setEmployees } = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAssignTo, setTaskAssignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      date: taskDate,
      description: taskDescription,
      category: taskCategory,
      active: true,
      newTask: true,
      completed: false,
      failed: false,
    };

    let found = false;

    const updatedEmployees = employees.map((emp) => {
      if (emp.firstName.toLowerCase() === taskAssignTo.toLowerCase()) {
        found = true;
        return {
          ...emp,
          tasks: [...emp.tasks, newTask],
          taskStats: {
            ...emp.taskStats,
            total: emp.taskStats.total + 1,
            active: emp.taskStats.active + 1,
            newTask: emp.taskStats.newTask + 1,
          },
        };
      }
      return emp;
    });

    if (!found) {
      alert("Employee not found");
      return;
    }


    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));

    
    setTaskTitle("");
    setTaskDate("");
    setTaskAssignTo("");
    setTaskCategory("");
    setTaskDescription("");
  };

  return (
    <div className="mt-10">
      <form
        onSubmit={handleSubmit}
        className="flex w-full bg-[#020617] p-10 rounded-2xl justify-between"
      >
        <div className="w-1/2 pr-10 space-y-6">
          <Input label="Task Title" value={taskTitle} setValue={setTaskTitle} />
          <Input label="Date" type="date" value={taskDate} setValue={setTaskDate} />
          <Input
            label="Assign To"
            value={taskAssignTo}
            setValue={setTaskAssignTo}
            placeholder="Employee First Name"
          />
          <Input
            label="Category"
            value={taskCategory}
            setValue={setTaskCategory}
          />

          <button className="mt-6 w-[60%] bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Create Task
          </button>
        </div>

        <div className="w-1/2 pl-10">
          <h3 className="text-sm font-medium text-gray-400 mb-2">
            Description
          </h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-[320px] bg-[#020617] border border-gray-700 rounded-lg px-4 py-3 outline-none resize-none"
          />
        </div>
      </form>
    </div>
  );
};

const Input = ({ label, value, setValue, type = "text", placeholder }) => (
  <div>
    <h3 className="text-sm font-medium text-gray-400 mb-2">{label}</h3>
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
      className="w-full bg-[#020617] border border-gray-700 rounded-lg px-4 py-2 outline-none"
    />
  </div>
);

export default memo(CreateTask);

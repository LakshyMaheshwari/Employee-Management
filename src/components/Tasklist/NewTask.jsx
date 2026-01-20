import { memo } from "react";

const NewTask = ({ task }) => {
  return (
    <div className="flex-shrink-0 h-full p-5 w-[300px] bg-green-400 rounded-xl">
      <div className="flex justify-between items-center mb-5">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {task.category}
        </h3>
        <h4 className="text-base">{task.date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{task.title}</h2>
      <p className="text-sm mt-2">{task.description}</p>
      <div className="flex justify-between mt-4">
        <button className="bg-green-600 py-1 px-2 text-sm rounded-b-md active:scale-95 hover:bg-green-700">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default memo(NewTask);

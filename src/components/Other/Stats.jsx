import { memo } from 'react';
import { getLocalStorage } from '../../utils/localStorage'; 

const Stats = () => {
  const { employees } = getLocalStorage();

  return (
    <div className="flex gap-4  flex-wrap">
      {employees.map((employee) => {
        const { id, firstName, taskStats } = employee;

        return (
          <div
            key={id}
            className="mt-10 w-[30%] rounded-2xl bg-gray-700 p-6 border border-gray-800 shadow-md"
          >
            
            <h2 className="text-lg font-semibold text-white">
              {firstName}
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              Task Overview
            </p>

            <div className="my-4 h-px bg-gray-800" />

            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-300">
                <span>Total Tasks</span>
                <span className="font-medium text-white">
                  {taskStats.total}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-300">Completed</span>
                <span className="font-medium text-green-400">
                  {taskStats.completed}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-300">Pending</span>
                <span className="font-medium text-yellow-400">
                  {taskStats.active}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Stats);

import { memo } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

const TaskList = ({ data }) => {
  return (
    <div
      id="taskList"
      className="h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap"
    >
      {data.tasks.map((task) => {
        if (task.newTask) {
          return <NewTask key={task.id} task={task} />;
        }
        if (task.active) {
          return <AcceptTask key={task.id} task={task} />;
        }
        if (task.completed) {
          return <CompleteTask key={task.id} task={task} />;
        }
        if (task.failed) {
          return <FailedTask key={task.id} task={task} />;
        }
        return null;
      })}
    </div>
  );
};


export default memo(TaskList);
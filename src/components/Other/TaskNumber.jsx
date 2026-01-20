import { memo } from 'react';

const TaskNumber = ({data}) => {
  return (
    <div className='mt-10 flex justify-between w-full gap-5'>
      <div className='rounded-xl w-[22%] py-6 px-9 bg-yellow-400'>
        <h2 className='text-3xl font-semibold'>{data.taskStats.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>

      <div className='rounded-xl w-[22%] py-6 px-9 bg-blue-400'>
        <h2 className='text-3xl font-semibold'>{data.taskStats.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div>

      <div className='rounded-xl w-[22%] py-6 px-9 bg-emerald-400'>
        <h2 className='text-3xl font-semibold '>{data.taskStats.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div>

      <div className='rounded-xl w-[22%] py-6 px-9 bg-red-400'>
        <h2 className='text-3xl font-semibold'>{data.taskStats.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  );
};

export default memo(TaskNumber);

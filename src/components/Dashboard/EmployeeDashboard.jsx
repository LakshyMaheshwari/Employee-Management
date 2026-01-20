import { memo } from 'react';
import Header from '../Other/Header';
import TaskNumber from '../Other/TaskNumber';
import TaskList from '../Tasklist/TaskList';

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen '>
      {/* <h1>{data.id}</h1> */}
      <Header data = {data} />
      <TaskNumber data = {data}/>
      <TaskList data = {data}/>
    </div>
  );
};

export default memo(EmployeeDashboard);
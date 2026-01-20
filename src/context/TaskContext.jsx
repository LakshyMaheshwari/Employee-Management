import { memo } from 'react';

const TaskContext = ({children}) => {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
};

export default memo(TaskContext);
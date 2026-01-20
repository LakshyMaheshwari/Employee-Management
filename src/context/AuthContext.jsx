import { memo } from 'react';

const AuthContext = ({children}) => {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
};

export default memo(AuthContext);
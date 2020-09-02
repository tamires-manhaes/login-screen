import React from 'react';
import './styles.scss';

const Wrapper: React.FC<Wrapper> = ({ children }) => {
  return(
    <div className="wrapper">
      {children}
    </div>
  );
}

export default Wrapper;
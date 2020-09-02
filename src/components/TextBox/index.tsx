import React from 'react';
import './styles.scss';

const TextBox: React.FC = ({ children }) => {
  return(
    <div className="text-box">
      {children}
    </div>
  )
}

export default TextBox;
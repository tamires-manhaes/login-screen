import React from 'react';
import './styles.scss';

const FormWrap: React.FC = () => {
  return(
    <div className="form-container">
      <div className="description">
        <strong>Try it free 7 days</strong>
        <span>then $20/mo. thereafter</span>
      </div>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name"/>
        <input type="text" placeholder="Email Address"/>
        <input type="text" placeholder="Password" />
        <button>Subscribe</button>

        <span>Claim your free trial By clicking the button, you are agreeing to our Terms and Services</span>
      </form>
    </div>
  );
}

export default FormWrap;
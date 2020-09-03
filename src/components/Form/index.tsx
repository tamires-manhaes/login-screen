import React from 'react';
import './styles.scss';

const FormWrap: React.FC = () => {
  return(
    <div className="form-container">
      <div className="description">
        <strong>Try it free 7 days</strong>{' '}<span>then $20/mo. thereafter</span>
      </div>
      <form>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name"/>
        <input type="text" placeholder="Email Address"/>
        <input type="text" placeholder="Password" />
        <button>Claim your free trial</button>

        <span>By clicking the button, you are agreeing to our <a href="google.com" target="_blank">Terms and Services</a></span>
      </form>
    </div>
  );
}

export default FormWrap;
import React from 'react';

import Wrapper from './components/Wrapper';
import TextBox from './components/TextBox';
import Form from './components/Form';

import Footer from './components/Footer';

const App: React.FC = () => {
  return(
    <>
      <Wrapper>
        <TextBox>
          <strong>Learn to code by watching others</strong>
          <div className="span-box">
            <span>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </span>
          </div>
        </TextBox>
        <Form />
      </Wrapper>

      <Footer />
    </>
  )
}

export default App;

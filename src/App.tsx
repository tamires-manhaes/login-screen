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
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus vero laboriosam dicta. Eum ea mollitia corporis magni dicta eius error quidem amet distinctio. </p>
        </TextBox>
        <Form />
      </Wrapper>

      <Footer />
    </>
  )
}

export default App;

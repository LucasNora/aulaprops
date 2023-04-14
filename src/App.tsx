import React from 'react';
import MyName from './components/MyName';
import MyAge from './components/MyAge';


function App() {
  return (
    <div>
      <MyName nome="Lucas" />
      <MyAge age={28} />
      
    </div>
  );
}

export default App;

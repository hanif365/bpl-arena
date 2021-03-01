import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import userEvent from '@testing-library/user-event';


function App() {
  return (
    <div>

      <Header></Header>
      <Players></Players>
      {/* <Test></Test> */}
      

    </div>
  );
}

export default App;

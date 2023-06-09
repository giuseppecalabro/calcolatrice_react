import React from 'react';

import './App.css';
import Display from './Components/Display/Display';
import Calcolatrice from './Components/Calcolatrice/Calcolatrice';

function App() {
  return (
    <div className='bg-neutral-700 mx-auto md:py-[11.27rem] py-[5rem]'>
      <div className="flex flex-wrap">
        <div className='w-full'>
          <Calcolatrice/>
        </div>

      </div>

    </div>
  );
}

export default App;

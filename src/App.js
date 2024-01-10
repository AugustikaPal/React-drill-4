import React from 'react';
import Testimonials from './components/Testimonials';
import reviews from './data';



function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center bg-gray-200">
     <div className='text-center'>
      <h1 className='text-4xl font-bold'>Let's Food</h1>
     <div className='bg-violet-400 h-[4px] w-1/9 mx-auto  mt-1'>

     </div>
     <Testimonials reviews={reviews}/>

     </div>
    </div>
  );
}

export default App;

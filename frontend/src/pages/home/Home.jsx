import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      {/* Background Image */}
      <div className="absolute inset-0 z-[-1] bg-[url('/brickbg.jpg')] bg-cover bg-center"></div>
      
      {/* Main content */}
      <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding 
  backdrop-filter backdrop-blur-lg bg-opacity-0'>
      <Sidebar/>
      <MessageContainer/>
    </div>
    </div>
  );
};

export default Home;

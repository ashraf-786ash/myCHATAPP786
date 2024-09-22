import React from 'react';
import { BsSend } from 'react-icons/bs';

const MessageInput = () => {
  return (
    <form className='px-4 my-3'>
      <div className='flex items-center border text-sm rounded-lg bg-gray-700 border-gray-600 text-white'>
        {/* Text Input */}
        <input
          type="text"
          className='flex-1 p-2.5 bg-gray-700 text-white outline-none'
          placeholder='Send a message'
        />
        {/* Send Button */}
        <button type='submit' className='px-3 text-white'>
          <BsSend size={20} />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;



{/* 

************STARTER CODE*************

import React from 'react'
import {BsSend} from "react-icons/bs";

const MessageInput = () => {
  return (
    <form>
        <div className='w-full'>
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white'
            placeholder='send a message'
            />
            <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                <BsSend/>

            </button>
        </div>
    </form>
  )
}

export default MessageInput
*/}
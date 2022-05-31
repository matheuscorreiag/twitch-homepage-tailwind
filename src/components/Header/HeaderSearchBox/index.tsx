import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';

const HeaderSearchBox: React.FC = () => {
  return (
    <div className='h-full flex items-center justify-center w-full'>
      <input className='rounded-tl-md rounded-bl-md w-[80%] max-w-xs h-9 bg-zinc-700 hover:ring-1 hover:ring-gray-500 duration-200 ease-linear transition-colors px-2 leading-loose placeholder:text-gray-300 placeholder:font-medium outline-none focus:ring-primary-purple focus:ring-1
      focus:bg-black text-white 
      ' placeholder='Buscar' />
      <div className='h-9 w-8 bg-zinc-800 hover:bg-zinc-600 rounded-tr-md rounded-br-md hover:bg-opacity-40 flex p-1'>
        <MagnifyingGlass size={20} className='text-white h-full cursor-pointer' />
      </div>
    </div>
  );
}

export default HeaderSearchBox;

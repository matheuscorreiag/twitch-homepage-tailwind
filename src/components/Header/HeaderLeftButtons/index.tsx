import React from 'react';
import { Cards, DotsThreeVertical, TwitchLogo } from 'phosphor-react'


const HeaderLeftButtons = () => {
  return (
    <div className='flex flex-row text-white bold gap-8 h-full items-center md:gap-4 '>
      <button className='w-8  cursor-pointer hover:text-secoundary-purple'>
        <TwitchLogo weight='bold' size={30} />
      </button>

      <button className='text-lg cursor-pointer hover:text-secoundary-purple my-auto font-bold md:hidden transition-all'>
        <p> Procurar </p>
      </button>

      <button className='hidden md:block hover:text-secoundary-purple cursor-pointer'>
        <Cards size={22} />
      </button>

      <button className='w-7 h-7 cursor-pointer flex align-middle justify-center hover:bg-zinc-700 hover:bg-opacity-40  rounded-md'>
        <DotsThreeVertical weight='bold' size={28} />
      </button>
    </div>
  );
}

export default HeaderLeftButtons;

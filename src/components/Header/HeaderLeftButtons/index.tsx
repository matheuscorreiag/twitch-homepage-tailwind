import React from 'react';
import { Cards, DotsThreeVertical, TwitchLogo } from 'phosphor-react'


const HeaderLeftButtons: React.FC = () => {
  return (
    <div className='flex flex-row text-white bold gap-8 h-full items-center '>
      <TwitchLogo weight='bold' size={30} className='w-8  cursor-pointer hover:text-secoundary-purple ' />
      <p className='text-lg cursor-pointer hover:text-secoundary-purple my-auto font-bold md:hidden transition-all'> Procurar </p>
      <Cards size={22} className='hidden md:block' />
      <DotsThreeVertical weight='bold' size={22} className='w-6 cursor-pointer hover:bg-white hover:bg-opacity-20 rounded-sm' />
    </div>
  );
}

export default HeaderLeftButtons;

import { Crown, MagnifyingGlass, User } from 'phosphor-react';
import React, { useState } from 'react';
import { PopupSearch } from '../PopupSearch';

const HeaderRightButtons = () => {

  return (
    <div className='flex flex-row text-white gap-5 md:gap-2 text-center items-center md:w-fit mx-4'>
      <PopupSearch />

      <button className=' rounded-md hover:bg-zinc-700  hover:bg-opacity-40  w-8 items-center align-middle justify-center flex h-8'>
        <Crown className=' hover:rounded-md' size={22} />

      </button>
      <button className=' bg-zinc-800 hover:bg-zinc-700 hover:bg-opacity-40  h-8 w-16  p-1 rounded-md font-bold text-sm'> Entrar </button>
      <button className='bg-primary-purple w-24 h-8 min-w-fit text-center rounded-md hover:bg-[#711bf2] font-bold p-1 text-xs' > Cadastrar-se </button>

      <button className=' rounded-md hover:bg-zinc-700 hover:bg-opacity-40  w-8 items-center flex justify-center h-8'>
        <User className=' rounded-md w-6 text-center' size={18} weight='bold' />
      </button>

    </div>
  );
}

export default HeaderRightButtons;

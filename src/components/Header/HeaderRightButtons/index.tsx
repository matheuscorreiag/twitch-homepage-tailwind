import { Crown, MagnifyingGlass, User } from 'phosphor-react';
import React from 'react';

const HeaderRightButtons: React.FC = () => {
  return (
    <div className='flex flex-row text-white gap-5 text-center items-center w-[300px] md:w-full '>
      <MagnifyingGlass size={20} className='text-white h-full cursor-pointer hidden md:block' />
      <Crown className='cursor-pointer hover:bg-primary-grey rounded-sm' size={22} />
      <p className='cursor-pointer bg-primary-grey hover:bg-secoundary-grey w-16 p-1 text-center rounded-md font-bold '> Entrar </p>
      <p className='cursor-pointer bg-secoundary-purple w-28 text-center rounded-md hover:bg-primary-purple font-bold p-1' > Cadastrar-se </p>
      <User className='cursor-pointer hover:bg-primary-grey rounded-sm w-6 text-center' size={22} weight='bold' />

    </div>
  );
}

export default HeaderRightButtons;

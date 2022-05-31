import React from 'react';

const ChannelCards = () => {
  return (

    <div className='w-72 h-40 p-2'>
      <div className='w-full h-full bg-zinc-700 cursor-pointer hover:translate-x-2 hover:-translate-y-2 ease-in transition-all hover:border-b-4 hover:border-l-4 border-red-600'>
        <div className='relative top-2 left-2 bg-red-600 w-16 h-5 text-center rounded-md text-xs font-semibold flex justify-center items-center text-white'>
          <span >AO VIVO</span>
        </div>

        <div className='relative bg-zinc-900 top-24 left-2 w-fit p-1 bg-opacity-30 text-center rounded-md text-white text-xs font-semibold'>
          <span >55 mil espectadores </span>
        </div>


      </div>

      <div className='grid grid-flow-col grid-cols-[35px] mt-2 '>
        <div className='w-[35px] h-[35px]  bg-zinc-500 rounded-full gap-8 cursor-pointer'>

        </div>

        <div className='flex flex-col ml-4 text-white '>
          <span className='font-medium text-sm cursor-pointer'>RPZIN DO AMOR</span>
          <span className='font-thin text-zinc-400 text-xs cursor-pointer'>defantediogo</span>
          <span className='font-thin text-zinc-400 text-xs mt-1 cursor-pointer'>Grand Theft Auto V</span>
          <span className='font-semibold text-zinc-300 text-xs mt-1 bg-zinc-700 w-fit p-1 px-3 py-1 rounded-full cursor-pointer'>Português</span>
        </div>

      </div>
    </div>
  );
}

export default ChannelCards;

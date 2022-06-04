import React from 'react';
import gau from '../../assets/images/gau.jpg';


interface ChannelCardsProps {
  imageUrl: string
  views: string
  title: string
  channelName: string
  game: string
}

const ChannelCards = ({ imageUrl, views, channelName, game, title }: ChannelCardsProps) => {

  return (

    <div className='w-[300px] h-40 p-2 image md:w-[200px] md:h-28' >
      <div className='bg-zinc-700 cursor-pointer hover:translate-x-2 hover:-translate-y-2 ease-in transition-all hover:border-b-4 hover:border-l-4 border-red-600 bg-cover bg-no-repeat' style={{ background: `url(${imageUrl})`, width: '100%', height: '100%' }}>
        <div className='relative top-2 left-2 bg-red-600 w-16 h-5 text-center rounded-md text-xs font-semibold flex justify-center items-center text-white md:top-1 md:left-1'>
          <span >AO VIVO</span>
        </div>

        <div className='relative bg-zinc-900 top-24 left-2 w-fit p-1 bg-opacity-30 text-center rounded-md text-white text-xs font-semibold md:top-10'>
          <span >{views} espectadores </span>
        </div>


      </div>

      <div className='grid grid-flow-col grid-cols-[35px] mt-2 '>
        <div className='w-[35px] h-[35px]  bg-zinc-500 rounded-full gap-8 cursor-pointer'>

        </div>

        <div className='flex-col ml-4 text-white  w-[230px] flex md:w-[100px] '>
          <div className='block w-full whitespace-nowrap overflow-hidden text-ellipsis'>
            <span className='font-medium text-sm cursor-pointer'>{title}</span>
          </div>
          <span className='font-thin text-zinc-400 text-xs cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis block'>{channelName}</span>
          <span className='font-thin text-zinc-400 text-xs mt-1 cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis block'>{game}</span>
          <span className='font-semibold text-zinc-300 text-xs mt-1 bg-zinc-700 w-fit p-1 px-3 py-1 rounded-full cursor-pointer'>Português</span>
        </div>

      </div>
    </div>
  );
}

export default ChannelCards;

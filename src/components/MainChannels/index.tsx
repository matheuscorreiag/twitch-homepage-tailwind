import React from 'react';
import ChannelCards from '../ChannelCards';


interface MainChannelsProps {
  isCollapsed: boolean
}


const MainChannels = ({ isCollapsed }: MainChannelsProps) => {
  return (
    <div className='max-w-100% h-full'>
      <p className='m-4 text-white font-semibold text-lg l'>Canais ao vivo que achamos que vai gostar</p>
      <div className='grid grid-cols-cards gap-y-[80px] mt-4 '>
        <ChannelCards /><ChannelCards /><ChannelCards /><ChannelCards /><ChannelCards /><ChannelCards />
      </div>
      {/* <div className='grid grid-flow-col h-64 mt-4 grid-cols-liveChannelsCards'><ChannelCards /><ChannelCards /><ChannelCards /><ChannelCards /><ChannelCards /><ChannelCards /></div> */}


    </div>
  );
}

export default MainChannels;

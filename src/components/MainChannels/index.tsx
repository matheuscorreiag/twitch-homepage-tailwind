import React from 'react';
import ChannelCards from '../ChannelCards';

import gau from '../../assets/images/gau.jpg';
import ratoel from '../../assets/images/ratoel.jpg';
import black from '../../assets/images/black.jpg';
import vamp from '../../assets/images/vamp.jpg';
import sothis from '../../assets/images/sothis.jpg';

const channels = [
  {
    imageUrl: gau,
    views: '1.2 mil',
    title: 'Rerun IEM Dallas Meio Dia MIBR vs LIQUID - Siga @gaules nas redes sociais',
    channelName: 'Gaules',
    game: 'Counter-Strike: Global Offensive'
  },
  {
    imageUrl: ratoel,
    views: '5.3 mil',
    title: 'CONTRA TDS OS DIAMANTES RUINS HOJE',
    channelName: 'ratoel_',
    game: 'Valorant'
  },
  {
    imageUrl: black,
    views: '154',
    title: 'RERUN: WATCHPARTY FNCS GRAND FINALS | 100 SUBS = SORTEIO l !LOJA (2X SUBS) !PODCAST I CODE BLACKOUTZ #AD',
    channelName: 'blxckoutz',
    game: 'Fortnite'
  },
  {
    imageUrl: vamp,
    views: '101',
    title: 'Lobby com amigos RR - !LISTA !SORTEIO !VENCEDORES !BLEIK !PP',
    channelName: 'VelhoVamp1',
    game: 'Counter-Strike: Global Offensive'
  },
  {
    imageUrl: sothis,
    views: '12',
    title: 'ESO e papo aleatório! DK Healer NA :) !pix !donation !tradução !dorgas',
    channelName: 'Sothisss',
    game: 'The Elder Scrolls Online'
  },
]

const MainChannels = () => {
  return (
    <div className='flex flex-col h-full pt-20'>
      <p className='m-4 text-white font-semibold text-lg md:text-base whitespace-nowrap'>Canais ao vivo que achamos que vai gostar</p>
      <div className='grid grid-cols-cards gap-4 mt-4 gap-y-24 md:grid-cols-2 md:gap-y-28'>
        {channels.map(({ channelName, game, imageUrl, title, views }) => (
          <ChannelCards key={channelName} imageUrl={imageUrl} views={views} channelName={channelName} game={game} title={title} />
        ))}
      </div>
      {/* <div className='grid grid-cols-cards gap-4 mt-4 gap-y-24 pt-24'>
        <ChannelCards imageUrl={gau} /><ChannelCards imageUrl={ratoel} /><ChannelCards imageUrl={black} /><ChannelCards imageUrl={vamp} /><ChannelCards imageUrl={sothis} />
      </div> */}

      {/* <div className='grid grid-flow-col h-64 mt-4 grid-cols-liveChannelsCards'><ChannelCards /><ChannelCards /><ChannelCards /><ChannelCards /><ChannelCards /><ChannelCards /></div> */}


    </div>
  );
}

export default MainChannels;

import { ArrowsHorizontal } from 'phosphor-react'
import React, { useState } from 'react'
import { Channel } from './Channel';

interface SidebarProps {
  isCollapsed: boolean
  setIsCollapsed: () => void
}

export const Sidebar = ({ isCollapsed, setIsCollapsed }: SidebarProps) => {






  const channels = [
    {
      name: 'Gaules',
      game: 'Só na conversa',
      views: '1.2k',
    },
    {
      name: 'VALORANT_BR',
      game: 'VALORANT',
      views: '15.2k',
    },
    {
      name: 'bt0tv',
      game: 'CS:GO',
      views: '137'
    }
  ]

  return (
    <div className=
      {` bg-secoundary-grey h-full w-[240px] fixed left-0 top-[50px] overflow-hidden text-white z-50 ${isCollapsed ? 'w-[50px] p-0 ' : 'w-60 md:w-[50px] md:p-0'} `} >

      <header className={`grid grid-flow-col md:hidden  ${isCollapsed ? 'place-items-center' : 'pt-3 pl-3'}`}>
        <span className={`font-semibold text-xs flex items-center ${isCollapsed ? 'hidden' : null}`}>CANAIS RECOMENDADOS</span>

        <button className='cursor-pointer flex items-center justify-center w-7 h-8 justify-self-center mt-1 hover:bg-zinc-700  hover:bg-opacity-40 hover:rounded-md'>
          <ArrowsHorizontal size={22} onClick={setIsCollapsed} />
        </button>
      </header>

      <main
        className={`{${isCollapsed ? 'hidden' : 'grid grid-flow-col grid-cols-1 pt-2 items-center'} `}
      >
        {channels.map((channel) => {
          {
            console.log(channel.game)
          }
          return <Channel isCollapsed={isCollapsed} game={channel.game} name={channel.name} views={channel.views} key={channel.name} />
        })}
        {channels.map((channel) => {
          {
            console.log(channel.game)
          }
          return <Channel isCollapsed={isCollapsed} game={channel.game} name={channel.name} views={channel.views} key={channel.name} />
        })}
        {channels.map((channel) => {
          {
            console.log(channel.game)
          }
          return <Channel isCollapsed={isCollapsed} game={channel.game} name={channel.name} views={channel.views} key={channel.name} />
        })}
      </main>

    </div>
  )
}

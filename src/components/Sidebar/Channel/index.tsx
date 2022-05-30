import React from 'react'
import { UserImage } from '../UserImage'
import UserTitle from '../UserTitle'
import UserViewCount from '../UserViewCount'


interface ChannelProps {
    isCollapsed: boolean;
    name: string;
    game: string;
    views: string;

}

export const Channel = ({ isCollapsed, game, name, views }: ChannelProps) => {
    return (
        <div className={`grid grid-flow-col w-full items-center pb-1 md:grid-cols-1 px-3 md:pb-3 md:hover:bg-transparent ${isCollapsed ? 'grid-cols-1 mt-2 pb-0 hover:bg-transparent ' : null} hover:bg-zinc-600 hover:bg-opacity-40 cursor-pointer`}>
            <div className='flex flex-row items-center gap-2 '>
                <UserImage />
                <UserTitle isCollapsed={isCollapsed} name={name} game={game} />
            </div>
            <div className={`flex justify-end  md:hidden  ${isCollapsed ? 'hidden' : null}`}>
                <UserViewCount views={views} />

            </div>
        </div>
    )
}

import React from 'react';


interface UserTitleProps {
  isCollapsed: boolean;
  name: string,
  game: string,
}

const UserTitle = ({ isCollapsed, name, game }: UserTitleProps) => {
  return (
    <div className={`flex flex-col md:hidden ${isCollapsed ? 'hidden' : null}`}>
      <h2 className='text-sm font-medium '>{name}</h2>
      <h3 className='text-xs text-zinc-400'>{game}</h3>
    </div>
  );
}

export default UserTitle;

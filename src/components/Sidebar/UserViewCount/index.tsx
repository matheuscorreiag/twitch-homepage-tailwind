import React from 'react';



interface UserViewCountProps {
  views: string;
}
const UserViewCount = ({ views }: UserViewCountProps) => {
  return (
    <div className='flex flex-row  items-center gap-x-2'>
      <div className='bg-red-600   rounded-full w-2 h-2 justify-self-center'></div>
      <h1 className='text-sm'>{views}</h1>
    </div>
  );
}

export default UserViewCount;

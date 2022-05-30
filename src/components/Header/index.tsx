import React from 'react'

import HeaderLeftButtons from './HeaderLeftButtons'
import HeaderRightButtons from './HeaderRightButtons'
import HeaderSearchBox from './HeaderSearchBox'

export const Header = () => {
    return (
        <div className='fixed left-0 top-0 w-full h-[50px] grid grid-flow-col bg-primary-grey px-2 align-middle items-center py-2 shadow-lg z-50 md:px-1  '>
            <div className='h-full w-fit '>
                <HeaderLeftButtons />
            </div>
            <div className='h-full w-full md:hidden '>
                <HeaderSearchBox />
            </div>
            <div className='h-full flex justify-end'>
                <HeaderRightButtons />
            </div>
        </div>
    )
}

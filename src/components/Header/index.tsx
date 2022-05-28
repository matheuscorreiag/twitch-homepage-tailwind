import React from 'react'

import HeaderLeftButtons from './HeaderLeftButtons'
import HeaderRightButtons from './HeaderRightButtons'
import HeaderSearchBox from './HeaderSearchBox'

export const Header = () => {
    return (
        <div className='w-full h-[55px] bg-primary-dark grid grid-flow-col align-middle items-center py-2'>
            <div className='h-full pl-2 w-fit'>
                <HeaderLeftButtons />
            </div>
            <div className='h-full w-full '>
                <HeaderSearchBox />
            </div>
            <div className='h-full flex justify-end'>
                <HeaderRightButtons />
            </div>
        </div>
    )
}

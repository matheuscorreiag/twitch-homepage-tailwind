import { ArrowLeft, ArrowRight, CaretLeft, CaretRight } from 'phosphor-react'
import React from 'react'

export const BigLiveChannels = () => {
    return (
        <div className='h-[40vh] p-2'>

            <CaretLeft weight='bold' className=' absolute left-50 top-[25%] cursor-pointer w-6 h-6 text-white' />
            <CaretRight weight='bold' className=' absolute right-[50px] top-[25%] cursor-pointer text-white  w-6 h-6' />

            <div className='w-[400px] h-[200px] '></div>
        </div>
    )
}

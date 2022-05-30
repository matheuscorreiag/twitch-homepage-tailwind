import { Popover } from '@headlessui/react'
import { MagnifyingGlass } from 'phosphor-react';
import HeaderSearchBox from '../HeaderSearchBox';



export const PopupSearch = () => {

    return (
        <Popover className='text-white cursor-pointer hidden md:block hover:bg-zinc-700 hover:bg-opacity-40  h-8 w-8 rounded-md outline-none' >
            <Popover.Button className='h-full items-center justify-center group'>
                <MagnifyingGlass className='h-5 w-5 rounded-md' />
            </Popover.Button>
            <Popover.Panel className='max-w-0 group-hover:max-h-8 fixed top-14 left-1/4'>
                <div
                    className='w-96 h-12 rounded-md'
                >
                    <HeaderSearchBox />
                </div>
            </Popover.Panel>
        </Popover>
    )
}
import React, { useState } from 'react'
import { BigLiveChannels } from '../components/BigLiveChannels'
import ChannelCards from '../components/ChannelCards'
import { Header } from '../components/Header'
import MainChannels from '../components/MainChannels'
import { Sidebar } from '../components/Sidebar'

export const Home = () => {

    const [sideBarIsCollapsed, setSideBarIsCollapsed] = useState(false)

    const toggleSideBarCollapsed = () => {
        setSideBarIsCollapsed(!sideBarIsCollapsed)
    }
    return (
        <>
            <Header />
            <div className='grid grid-flow-col grid-cols-sidebarMain'>
                <div className='w-fit h-full'>
                    <Sidebar isCollapsed={sideBarIsCollapsed} setIsCollapsed={toggleSideBarCollapsed} />
                </div>
                <div className={`my-4 md:mx-20 mr-12 h-full ${sideBarIsCollapsed ? 'mx-[70px]' : 'mx-[270px]'}`}>
                    <BigLiveChannels />
                    <MainChannels />
                </div>
            </div>

        </>
    )
}

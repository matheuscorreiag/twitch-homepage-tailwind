import { CaretLeft, CaretRight } from 'phosphor-react'
import React, { useState } from 'react'

export const BigLiveChannels = () => {

    interface PositionsProps {
        position: number,
        height: string,
        translateX: string,
        zIndex: number
    }

    const initialPositions: PositionsProps[] = [
        {
            position: 1,
            height: '210px',
            translateX: '-500px',
            zIndex: 1,
        },
        {
            position: 2,
            height: '250px',
            translateX: '-300px',
            zIndex: 2,
        },
        {
            position: 3,
            height: '300px',
            translateX: '0px',
            zIndex: 3,
        },
        {
            position: 4,
            height: '250px',
            translateX: '300px',
            zIndex: 2,
        },
        {
            position: 5,
            height: '210px',
            translateX: '500px',
            zIndex: 1,
        }
    ]

    const handleLeftClick = () => {
        const lastPositions = [...currentPositions]



        const newPositions = lastPositions.map((position: PositionsProps, index: number) => {


            if (index === lastPositions.length - 1) {
                return lastPositions[0]
            }
            return lastPositions[index + 1]
        })

        setCurrentPositions(newPositions)


    }
    const handleRightClick = () => {
        const lastPositions = [...currentPositions]



        const newPositions = lastPositions.map((position: PositionsProps, index: number) => {


            if (index === 0) {
                return lastPositions[lastPositions.length - 1]
            }
            return lastPositions[index - 1]
        })

        setCurrentPositions(newPositions)


    }

    const [currentPositions, setCurrentPositions] = useState(initialPositions)


    return (
        <div className='h-[300px] p-2 grid grid-flow-col items-center justify-center pt-[100px] w-full justify-self-center'>

            <div className="absolute justify-self-center w-[500px] bg-red-600 cursor-pointer" style={{ height: currentPositions[0].height, transform: `translateX(${currentPositions[0].translateX})`, zIndex: currentPositions[0].zIndex, transition: 'all 0.5s  ease' }}></div>
            <div className="absolute justify-self-center w-[500px] bg-blue-600 cursor-pointer" style={{ height: currentPositions[1].height, transform: `translateX(${currentPositions[1].translateX})`, zIndex: currentPositions[1].zIndex, transition: 'all 0.5s ease' }}></div>
            <div className="absolute justify-self-center w-[500px] bg-green-600 cursor-pointer" style={{ height: currentPositions[2].height, transform: `translateX(${currentPositions[2].translateX})`, zIndex: currentPositions[2].zIndex, transition: 'all 0.5s ease' }}></div>
            <div className="absolute justify-self-center w-[500px] bg-yellow-600 cursor-pointer" style={{ height: currentPositions[3].height, transform: `translateX(${currentPositions[3].translateX})`, zIndex: currentPositions[3].zIndex, transition: 'all 0.5s ease' }}></div>
            <div className="absolute justify-self-center w-[500px] bg-orange-600 cursor-pointer" style={{ height: currentPositions[4].height, transform: `translateX(${currentPositions[4].translateX})`, zIndex: currentPositions[4].zIndex, transition: 'all 0.5s ease', }}></div>

            <CaretLeft weight='bold' className=' fixed left-50 top-[200px]  cursor-pointer w-6 h-6 text-white z-[5]' onClick={handleLeftClick} />
            <CaretRight weight='bold' className=' fixed right-[50px] top-[200px] cursor-pointer text-white  w-6 h-6 z-[5]' onClick={handleRightClick} />

        </div>
    )
}

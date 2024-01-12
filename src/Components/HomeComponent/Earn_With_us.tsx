import React from 'react'
import Button from '../SharedComponent/Button'

function Earn_With_us() {
    return (
        <div className='bg-blue-500 h-auto my-20  '>
            <div className='h-[1200px] mx-48'>
                <div className='content text-center text-2xl '>
                    <p className='text-7xl text-white pt-40 ' >Earn with your Auto</p>
                    <ul className=" items-center lg:mt-44">

                        <li>
                            <Button label='Start Earning' style='text-blue-500 bg-white hover:bg-amber-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-large px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-20 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-500 lg:text-2xl' />
                        </li>
                    </ul>

                </div>


            </div>



        </div>
    )
}

export default Earn_With_us
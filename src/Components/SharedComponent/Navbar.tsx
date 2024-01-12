import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'


function Navbar() {
    return (


        <nav className=" bg-white-100 border-gray-200 py-4 dark:bg-gray-900  mx-48">
            <div className="flex flex-wrap items-center justify-between max-w-screen-3xl px-4 mx-auto text-2xl">
                <NavLink to="/" className="flex items-center">
                    <img src="logo.jpg" className="lg:h-20 mx-10 sm:h-9" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white lg:text-3xl">Dhoka</span>
                </NavLink>
                <div className="flex items-center lg:order-2 lg:ps-7">


                    <NavLink to="/login" ><Button label='Login' style='text-white bg-blue-500 hover:bg-amber-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-large px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-20 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-500 lg:text-2xl' /> </NavLink>

                </div>
                <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-20 lg:mt-0 lg:text-2xl">
                        <li>
                            <NavLink to="/" className="block py-2 pl-3 pr-4 text-white rounded lg:bg-transparent lg:text-purple-700 lg:p-0 dark:text-white" aria-current="page">Home</NavLink>
                        </li>

                        <li>
                            <NavLink to="/aboutus" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About us </NavLink>
                        </li>
                        <li>
                            <NavLink to="/download" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Download App </NavLink>
                        </li>
                        <li>
                            <NavLink to="/Blog" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Contact" className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-amber-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar
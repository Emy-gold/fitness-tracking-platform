import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../public/assets/logo.png";
import icon from "./public/assets/notifeicon.png";
import profilePic from "../assets/profilepic.png";

function Header() {
    return (
        <>
            <header className='bg-primary border-b border-gray-300/50 sticky w-full h-16 top-0 z-50 px-10'>
                <div className="flex relative justify-between items-center h-full">
                    <Link to="/" className='flex items-center'>
                        <img
                            src={logo}
                            alt="logo"
                            className='hover:opacity-20 transition-opacity duration-300'
                        />
                    </Link>

                    <nav className='flex gap-8 items-center ml-auto'>
                        <Link to="/" className='font-lexend font-medium text-sm text-textColor hover:scale-105 leading-[21px]'>Home</Link>
                        <Link to="/dashboard" className='font-lexend font-medium text-sm text-textColor hover:scale-105 leading-[21px]'>Dashboard</Link>
                        <Link to="/exercises" className='font-lexend font-medium text-sm text-textColor hover:scale-105 leading-[21px]'>Exercises</Link>
                        <Link to="/workouts" className='font-lexend font-medium text-sm text-textColor hover:scale-105 leading-[21px]'>Workouts</Link>
                        <img src={icon} className='hover:scale-105 duration-200' />
                        <img src={profilePic} className='h-10 w-10 hover:scale-105 duration-200' />
                    </nav>

                    <div></div>
                </div>
            </header>
        </>
    )
}

export default Header;
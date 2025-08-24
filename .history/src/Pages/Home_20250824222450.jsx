import React from 'react';
import Header from '../components/Header';
import homepic from "../assets/home.png";

function Home() {
    return (
        <>
            <main className='flex justify-center'>
                <section className='my-8'>
                    <img src={homepic} className="" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white ">
                        <h1 className='text-5xl font-lexend font-bold p-3'>Elevate Your Fitness Journey</h1>
                        <p className=''>Log your workouts, track your progress, and explore new exercises to achieve your fitness aspirations.</p>
                    </div>
                    <button className='absolute '>Get Started</button>
                </section >
                <section></section>
                <section></section>
            </main >
        </>

    )
}

export default Home
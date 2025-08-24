import React from 'react';
import Header from '../components/Header';
import homepic from "../assets/home.png";

function Home() {
    return (
        <>
            <main className='flex justify-center'>
                <section className='my-8 relative'>
                    <img src={homepic} className="" />
                    <div className="absolute inset-0 flex flex-col justify-center text-center text-white">
                        <h1 className='text-5xl font-lexend font-bold mb-3 tracking-tight '>Elevate Your Fitness Journey</h1>
                        <p className=''>Log your workouts, track your progress, and explore new exercises to achieve your fitness aspirations.</p>
                        <button type="submit" className='mt-8 mx-auto bg-blue-500 py-2 px-4 font-lexend font-semibold rounded-xl'>Get Started</button>
                    </div>

                </section >
                <section></section>
                <section></section>
            </main >
        </>

    )
}

export default Home
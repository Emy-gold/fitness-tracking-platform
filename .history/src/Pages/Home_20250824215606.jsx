import React from 'react';
import Header from '../components/Header';
import homepic from "../assets/home.png";

function Home() {
    return (
        <>
            <main className='flex justify-center'>
                <section className='my-8'>
                    <div>
                        <img src={homepic} className="-z-1" />
                        <h1>Elevate Your Fitness JourneyElevate Your Fitness Journey</h1>
                        <p>Log your workouts, track your progress, and explore new exercises to achieve your fitness aspirations.</p>
                        <button>Get Started</button>
                    </div>
                </section>
                <section></section>
                <section></section>
            </main>
        </>

    )
}

export default Home
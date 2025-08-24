import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import cardsData from "../cardsData.json";
import homepic from "../assets/home.png";

function Home() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData)
    })

    return (
        <>
            <main className='flex flex-col justify-center px-40'>

                <section className='my-8 relative flex justify-center'>
                    <img src={homepic} className="" />
                    <div className="absolute inset-0 flex flex-col justify-center text-center text-white">
                        <h1 className='text-5xl font-lexend font-bold mb-3 tracking-tight '>Elevate Your Fitness Journey</h1>
                        <p className=''>Log your workouts, track your progress, and explore new exercises to achieve your fitness aspirations.</p>
                        <button type="submit" className='mt-8 mx-auto bg-blue-500 py-[12px] px-6 font-lexend font-semibold rounded-3xl hover:bg-blue-600 transition duration-300'>Get Started</button>
                    </div>
                </section >

                <section className='flex flex-col items-start px-10'> {/* Changed to items-start for left alignment */}
                    <div className='flex flex-col items-start'> {/* Removed justify-center, added items-start */}
                        <h2 className='text-3xl font-bold mb-4'>Key Features</h2>
                        <p className='text-lg text-gray-600 max-w-2xl'>Explore the powerful features of FitTrack designed to help you stay motivated and reach your fitness aspirations.</p>
                    </div>
                    <div className='flex flex-wrap gap-8 mt-10'> {/* Removed justify-center */}
                        {cards.map(card => (
                            <div key={card.id} className='w-72 bg-white rounded-xl shadow-md p-6'>
                                <img src={card.image} className='mb-4 h-16 w-16 object-contain' />
                                <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
                                <p className='text-gray-600'>{card.summary}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section></section>
            </main >
        </>

    )
}

export default Home
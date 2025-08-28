import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import cardsData from "../cardsData.json";
import homepic from "../assets/home.png";
import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";

function Home() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData)
    })

    return (
        <>
            <main className='flex flex-col justify-center items-center'>

                <section className='my-10 relative flex justify-center'>
                    <img src={homepic} className="mb:w-[980px] lg:w-[1200px]" />
                    <div className="absolute inset-0 flex flex-col justify-center text-center text-white">
                        <h1 className='text-5xl font-lexend font-bold mb-3 tracking-tight '>Elevate Your Fitness Journey</h1>
                        <p className=''>Log your workouts, track your progress, and explore new exercises to achieve your fitness aspirations.</p>
                        <button type="submit" className='mt-8 mx-auto bg-blue-500 py-[12px] px-6 font-lexend font-semibold rounded-3xl hover:bg-blue-600 transition duration-300'>Get Started</button>
                    </div>
                </section >

                <section className='flex flex-col items-start mb-10 mb:w-[980px] lg:w-[1200px]'>
                    <div className='flex flex-col items-start text-left'>
                        <h2 className='text-3xl font-bold mb-4'>Key Features</h2>
                        <p className='text-lg text-gray-600 max-w-2xl'>Explore the powerful features of FitTrack designed to help you stay motivated and reach your fitness aspirations.</p>
                    </div>
                    <div className='flex flex-row gap-4 mt-10 text-left'> {/* Removed justify-center */}
                        {cards.map(card => (
                            <div key={card.id} className='w-[312px] bg-white rounded-xl shadow-md p-2 hover:scale-105 duration-300'>
                                <img src={card.image} className='mb-4 h-10 w-10 object-contain' />
                                <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
                                <p className='text-gray-600'>{card.summary}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className='flex flex-row items-start mb-10 mb:w-[980px] lg:w-[1200px]'>
                    <h2>Benefits</h2>
                    <div>
                        <div>
                            <h2>Personalized Workout Plans</h2>
                            <p>Tailored workout plans designed to meet your specific fitness goals and experience level.</p>
                            <button>Learn more</button>
                            <img />
                        </div>
                    </div>
                </section>
            </main >
        </>

    )
}

export default Home
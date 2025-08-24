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
            <main className='flex justify-center'>

                <section className='my-8 relative'>
                    <img src={homepic} className="" />
                    <div className="absolute inset-0 flex flex-col justify-center text-center text-white">
                        <h1 className='text-5xl font-lexend font-bold mb-3 tracking-tight '>Elevate Your Fitness Journey</h1>
                        <p className=''>Log your workouts, track your progress, and explore new exercises to achieve your fitness aspirations.</p>
                        <button type="submit" className='mt-8 mx-auto bg-blue-500 py-[12px] px-6 font-lexend font-semibold rounded-3xl hover:bg-blue-600 transition duration-300'>Get Started</button>
                    </div>
                </section >

                <section>
                    <div>
                        {cards.map(card => (
                            <div key={card.id}>
                                <img src={card.image} />
                                <h2>{card.title}</h2>
                                <p>{card.summary}</p>
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
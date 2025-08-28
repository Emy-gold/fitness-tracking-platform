import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import cardsData from "../cardsData.json";
import homepic from "../assets/home.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

function Home() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData)
    }, [])

    const benefits = [
        {
            id: 1,
            title: "Personalized Workout Plans",
            description:
                "Tailored workout plans designed to meet your specific fitness goals and experience level.",
            button: "Learn more",
            image: img1,
        },
        {
            id: 2,
            title: "Progress Tracking & Analytics",
            description:
                "Monitor your progress with detailed analytics and visualizations to stay motivated.",
            button: "View Progress",
            image: img2,
        },
        {
            id: 3,
            title: "Extensive Exercise Library",
            description:
                "Access a vast library of exercises with detailed instructions and video demonstrations.",
            button: "Explore Exercises",
            image: img3,
        },
    ];

    return (
        <>
            <main className='flex flex-col justify-center items-center mx-auto font-lexend'>
                {/* Hero Section */}
                <section className='my-10 relative flex justify-center max-w-7xl mx-auto px-4'>
                    <img src={homepic} className="mb:w-[1080px] w-full max-w-full" />
                    <div className="absolute inset-0 flex flex-col justify-center text-center text-white">
                        <h1 className='lg:text-5xl font-bold mb-3 tracking-tight text-base'>Elevate Your Fitness Journey</h1>
                        <p>Log your workouts, track your progress, and explore new exercises to achieve your fitness aspirations.</p>
                        <button type="submit" className='mt-8 mx-auto bg-blue-500 py-[12px] px-6 font-semibold rounded-3xl hover:bg-blue-600 transition duration-300'>Get Started</button>
                    </div>
                </section >

                {/* Key Features Section */}
                <section className='flex flex-col items-start mb-10 max-w-7xl mx-auto px-4'>
                    <div className='flex flex-col items-start text-left'>
                        <h2 className='text-3xl font-bold mb-4 text-slate-900'>Key Features</h2>
                        <p className='text-lg text-gray-600 max-w-2xl'>Explore the powerful features of FitTrack designed to help you stay motivated and reach your fitness aspirations.</p>
                    </div>
                    <div className='flex flex-row gap-4 mt-10 text-left flex-wrap'>
                        {cards.map(card => (
                            <div key={card.id} className='md:w-[312px] lg:w-[400px] bg-white rounded-xl shadow-md p-2 hover:scale-105 duration-300'>
                                <img src={card.image} className='mb-4 h-10 w-10 object-contain' />
                                <h3 className='text-xl font-semibold mb-2'>{card.title}</h3>
                                <p className='text-paragraphColor'>{card.summary}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Benefits Section */}
                <section className='flex flex-col items-start mb-10 gap-5 justify-center max-w-7xl mx-auto px-4'>
                    <h2 className='text-3xl font-bold text-textColor'>Benefits</h2>
                    <div className='flex flex-wrap gap-6'>
                        {benefits.map(benefit => (
                            <div key={benefit.id} className='flex flex-row-reverse justify-between p-5 border rounded-2xl w-full lg:w-full'>
                                <img src={benefit.image} className='lg:w-[400px]' />
                                <div className='flex flex-col items-start text-left'>
                                    <h3 className='text-2xl font-bold mb-4 text-textColor'>{benefit.title}</h3>
                                    <p className='text-lg text-paragraphColor font-medium'>{benefit.description}</p>
                                    <button className='bg-buttonColor px-5 py-2 rounded-3xl mt-5 font-medium hover:bg-gray-300 hover:scale-105 duration-300'>{benefit.button}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;

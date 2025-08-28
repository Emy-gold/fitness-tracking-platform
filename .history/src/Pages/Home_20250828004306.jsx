import React, { useEffect, useState } from "react";
import cardsData from "./cardsData.json";

function HomePage() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardsData);
    }, []);

    // Benefits data
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
        <div className="font-lexend">
            {/* Hero Section */}
            <section className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Welcome to Our Platform
                    </h1>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Discover amazing features and improve your productivity with our
                        tools and services.
                    </p>
                    <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-lg transition">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Cards Section */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-16 h-16 mb-4 mx-auto"
                            />
                            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{card.description}</p>
                            <button className="text-yellow-600 font-medium hover:underline">
                                {card.button}
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Benefits Section (mapped) */}
            <section className="bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
                        >
                            <img
                                src={benefit.image}
                                alt={benefit.title}
                                className="w-16 h-16 mb-4 mx-auto"
                            />
                            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                {benefit.description}
                            </p>
                            <button className="text-yellow-600 font-medium hover:underline">
                                {benefit.button}
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default HomePage;

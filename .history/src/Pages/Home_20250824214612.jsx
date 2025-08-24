import React from 'react';
import Header from '../components/Header';
import homepic from "../assets/home.png";

function Home() {
    return (
        <>
            <main>
                <section>
                    <div>
                        <img src={homepic} />
                    </div>
                </section>
                <section></section>
                <section></section>
            </main>
        </>

    )
}

export default Home
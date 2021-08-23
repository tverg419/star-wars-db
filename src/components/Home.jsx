import React from 'react';

function Home(props) {
    return (
        <div className='home'>
            <h1>Welcome to the Intergalactic Database</h1>
            <div className='video-container'>
            <iframe 
            width="700" 
            height="700" 
            src="https://www.youtube.com/embed/iXDnFYu91vY?start=28" 
            title="Star Wars Opening Crawl" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            >
            </iframe>
            </div>
        </div>
    );
}

export default Home;
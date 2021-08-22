import React from 'react';

function Home(props) {
    return (
        <div>
            <div className='video-container'>
            <iframe 
            width="760" 
            height="315" 
            src="https://www.youtube.com/embed/iXDnFYu91vY?start=28" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Home;
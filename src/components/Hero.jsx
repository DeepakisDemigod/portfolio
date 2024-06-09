import React, { useEffect } from 'react';
import '../App.css';

const Hero = () => {
  useEffect(() => {
    document.title = 'Portfolio(Deepak Thapa) Home';
  }, []);
  return (
    <div id='body'>
      <div id='background-wrap'>
        <div className='bubble x1'></div>
        <div className='bubble x2'></div>
        <div className='bubble x3'></div>
        <div className='bubble x4'></div>
        <div className='bubble x5'></div>
        <div className='bubble x6'></div>
        <div className='bubble x7'></div>
        <div className='bubble x8'></div>
        <div className='bubble x9'></div>
        <div className='bubble x10'></div>
      </div>
      <div className='bg-custom-gradient prose flex flex-col items-center justify-center h-screen gap-10  p-4'>
        <h1
          id='phrase'
          className='mt-[-85px] text-6xl font-extrabold text-left xs:text-6xl text-left sm:text-6xl text-left md:text-8xl text-center lg:text-8xl 2xl:text-9xl text-white'
        >
          <span>
            Designer And <br />
            Frontend Developer
          </span>
        </h1>

        <div className='text-white font-bold text-center'>
          <b className='mb-4'>"DEEPAK THAPA"</b>

          <h2 id='phrase'>Student from University of Delhi, India</h2>
        </div>

        <div className='flex gap-4 text-[15px] xs:text-xs sm:text-sm md:text-sm lg:text-md xl:text-lg 2xl:text-lg text-center'>
          <a
            id='high'
            href='/about'
          >
            <button className='bg-zinc-950  hover:bg-zinc-900 text-white font-normal py-2 px-4 rounded shadow'>
              Know About Me
            </button>
          </a>
          <a
            id='high'
            href='/contact'
          >
            <button className='bg-zinc-950 text-white font-normal py-2 px-4 rounded shadow'>
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

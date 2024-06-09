import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'Portfolio | Know About Me';
  }, []);
  return (
    <div className='bg-custom-gradient h-screen p-6'>
      <h3
        id='phrase'
        className='text-3xl text-center text-white mb-10 mt-10'
      >
        About Me
      </h3>
      <div className='flex items-center justify-center h-[34vh]'>
        <div className='flex flex-col items-start justify-center  backdrop-blur-xl rounded-lg max-w-md '>
          <div className='flex gap-4 p-6 pb-2'>
            <img
              className='bg-[#ddd] rounded-lg border border-2 border-[#009578] w-14'
              src='/avatar_no-bg.png'
            />
            <div className='text-white'>
              <h3 className='font-bold'>Deepak Thapa</h3>
              <span className='rounded-lg text-[10px] font-bold bg-[#009578] p-[2.5px] px-2'>
                available
              </span>
            </div>
          </div>
          <div className='text-xs font-medium text-white px-6'>
            <span>
              <b className='text-md py-0'>
                <span>Deepak</span> •<span> Designer</span>
              </b>
              <br />
              <span className='opacity-[0.8]'>
                #designer
                <br /> #frontend #developer <br /> based in delhi am designer
                and software developer, primarily frontend developer i design
                responsive and appealing user experiences.
              </span>
            </span>
          </div>

          <div className='mt-4 mb-6 flex w-full gap-2 justify-center items-center'>
            <button className='rounded bg-[#009578] text-xs text-white font-bold px-5 py-[2px]'>
              Follow
            </button>
            <a
              href='/contact'
              title='Send a Message'
            >
              <button className='rounded border border-1 border-white opacity-[0.8] text-white text-xs font-bold px-5 py-1'>
                Message
              </button>
            </a>
            <a
              href='mailto:deepakthapa1423@gmail.com'
              title='Send a Mail'
            >
              <button className='rounded border border-1 border-white opacity-[0.8] text-white text-xs font-bold px-5 py-1'>
                Email
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

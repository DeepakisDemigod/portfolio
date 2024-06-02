import React from 'react';

const Navbar = () => {
  return (
    <div className=' w-full prose bg-zinc-950 text-white flex p-4 justify-between items-center font-normal'>
      <a href='/'>
        <h2>PORTFOLIO</h2>
      </a>
      <ul className='text-normal flex justify-between gap-4 font-medium'>
        {/*<a title="Know About Me" href='/about'>
          <li>About</li>
        </a>*/}
        <a
          title='Get In Touch'
          href='/contact'
        >
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;

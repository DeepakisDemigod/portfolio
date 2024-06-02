import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Confetti from './Confetti.jsx';

const Contact = () => {
  const [state, handleSubmit] = useForm('meqybged');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      setEmail('');
      setMsg('');
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }
  }, [state.succeeded]);

  return (
    <div className='w-full text-white bg-custom-gradient'>
      {showSuccess && <Confetti />}
      <div className='flex flex-col items-center justify-center h-[100vh]'>
        <h3
          id='phrase'
          className='text-3xl'
        >
          Get In Touch
        </h3>
        <p></p>
        <form
          onSubmit={handleSubmit}
          className='flex flex-col w-[100vw] py-6 px-4 max-w-lg'
        >
          <label
            className='text-white block text-gray-700 text-md font-bold mb-2'
            htmlFor='email'
          >
            Email Address
          </label>
          <input
            className='border-none outline-none bg-zinc-900  text-white font-normal shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            type='email'
            name='email'
            onChange={e => setEmail(e.target.value)}
            placeholder='johnhenkin@gmail.com'
          />
          <ValidationError
            prefix='Email'
            field='email'
            errors={state.errors}
            className='font-mono text-red-400 text-sm '
          />
          <label
            className='mt-2 block text-white text-md font-bold mb-2'
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            className='border-none outline-none bg-zinc-900 text-white font-normal shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            id='message'
            rows='5'
            name='message'
            onChange={e => setMsg(e.target.value)}
            placeholder='your message for me..'
          />
          <ValidationError
            prefix='Message'
            field='message'
            errors={state.errors}
          />
          <button
            className='bg-emerald-500 hover:bg-emerald-600 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            type='submit'
            disabled={state.submitting}
          >
            Submit
          </button>
          <br />
          <span className='text-sm b-0'>
            after submitting wait for few secs, mail may take a while to sent
          </span>
        </form>
        {showSuccess && (
          <div className='h-screen flex items-center justify-center'>
            <div
              className='bg-teal-100 border-t-4 border-teal-500 rounded text-teal-900 px-4 py-3 shadow-md'
              role='alert'
            >
              <div className='flex'>
                <div className='py-1'>
                  <div className='rounded-full border border-teal-500 border-2 p-1 mr-2'>
                    <svg
                      className='fill-current h-5 w-6 text-teal-500'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 448 512'
                    >
                      <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className='font-bold'>Thank you for reaching out.</p>
                  <p className='text-sm'>Message Sent Successfully!</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;

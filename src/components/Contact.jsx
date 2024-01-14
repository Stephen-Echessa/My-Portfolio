import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1 className='text-lg md:text-2xl font-bold w-full flex justify-center items-center py-5 text-center text-[#001b5e]'>
        Contact
      </h1>
      <div id='contact' className='max-w-[800px] m-auto md:pl-10 p-2 py-8 flex flex-col md:flex-row'>
        {/* Left side with the form */}
        <div className='md:w-1/2 mt-4 pr-4'>
          <form action='https://getform.io/f/0b5685ae-bff0-46dd-84a4-cce48c736cc8' method='POST' encType='multpart/form-data' className='w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full py-2'>
              <div className='flex flex-col'>
                <label className='uppercase text-xs py-1' htmlFor=''>
                  Name
                </label>
                <input className='border-2 rounded-lg p-1 flex border-gray-300' type='text' name='name' />
              </div>
              <div className='flex flex-col'>
                <label className='uppercase text-xs py-1' htmlFor=''>
                  Phone
                </label>
                <input className='border-2 rounded-lg p-1 flex border-gray-300' type='text' name='phone' />
              </div>
            </div>
            <div className='flex flex-col py-1'>
              <label className='uppercase text-xs py-1' htmlFor=''>
                Email
              </label>
              <input className='border-2 rounded-lg p-1 flex border-gray-300' type='email' name='email' />
            </div>
            <div className='flex flex-col py-1'>
              <label className='uppercase text-xs py-1' htmlFor=''>
                Subject
              </label>
              <input className='border-2 rounded-lg p-1 flex border-gray-300' type='text' name='subject' />
            </div>
            <div className='flex flex-col py-1'>
              <label className='uppercase text-xs py-1' htmlFor=''>
                Message
              </label>
              <textarea className='border-2 rounded-lg p-1 border-gray-300' rows='4' name='message'></textarea>
            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-1 w-full p-1 rounded-lg'>Send Message</button>
          </form>
        </div>

        {/* Right side with the smaller image */}
        <div className='md:w-1/2 mt-4 md:mt-0'>
          <img
            src='https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            alt='Contact Image'
            className='w-full h-auto rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
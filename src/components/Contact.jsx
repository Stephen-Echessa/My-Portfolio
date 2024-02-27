import React from 'react'
import Email from '../assets/email.svg'
import Call from '../assets/call.svg'

const Contact = () => {
  return (
    <section class="relative max-w-[1130px] m-auto md:pl-20 p-4 py-4">
        <div class="relative container px-4 mx-auto">
            <div class="max-w-7xl mx-auto">
            <div class="max-w-2xl mb-24">
                <span class="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">CONTACT ME</span>
                <h1 class="max-w-md font-heading text-5xl xs:text-6xl font-bold text-gray-900 mb-4">
                <span>Don&rsquo;t hesitate</span>
                <span class="font-serif italic"> to talk with me</span>
                </h1>
                <p class="text-xl text-gray-500 font-semibold">Committed to your satisfaction, anytime.</p>
            </div>
            <div class="flex flex-wrap -mx-4 items-center">
                <div class="w-full lg:w-1/2 px-4 mb-20 lg:mb-0">
                <div class="flex mb-16 items-center">
                    <div class="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-yellow-200">
                    <img src={Email} alt="email" className='w-7'/>
                    </div>
                    <div>
                    <span class="sm:text-lg text-gray-500">Email</span>
                    <span class="block text-lg sm:text-2xl font-semibold text-gray-900">albanusmm20@gmail.com</span>
                    </div>
                </div>
                <div class="flex items-center">
                    <div class="flex flex-shrink-0 mr-5 sm:mr-8 items-center justify-center p-1 w-16 sm:w-20 h-16 sm:h-20 rounded-full bg-purple-500">
                    <img src={Call} alt="call" className='w-10'/>
                    </div>
                    <div>
                    <span class="sm:text-lg text-gray-500">Phone</span>
                    <span class="block text-lg sm:text-2xl font-semibold text-gray-900">+254 7041 97625</span>
                    </div>
                </div>
                </div>
                <div class="w-full lg:w-1/2 px-4 mb-10">
                <div class="max-w-lg lg:max-w-xl lg:ml-auto">
                    <h4 class="text-2xl font-bold text-gray-900 mb-8">Drop me a line</h4>
                    <form action='https://getform.io/f/0b5685ae-bff0-46dd-84a4-cce48c736cc8' method='POST' encType='multpart/form-data'>
                    <div class="flex flex-wrap -mx-4 mb-6">
                        <div class="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
                        <div>
                            <label class="block mb-1.5 text-sm font-semibold" for="">
                            <span>Full Name</span>
                            <span class="text-red-600">*</span>
                            </label>
                            <input class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="text" placeholder="Jovanca Azalea" name='name' required/>
                        </div>
                        </div>
                        <div class="w-full lg:w-1/2 px-4">
                        <div>
                            <label class="block mb-1.5 text-sm font-semibold" for="">
                            <span>Email</span>
                            <span class="text-red-600">*</span>
                            </label>
                            <input class="w-full py-3 px-4 text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="text" placeholder="Type your email"required name='email'/>
                        </div>
                        </div>
                    </div>
                    <div class="mb-9">
                        <label class="block mb-1.5 text-sm font-semibold" for="">
                        <span>Message</span>
                        <span class="text-red-600">*</span>
                        </label>
                        <textarea class="w-full h-12 py-3 px-4 resize-none text-sm text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-purple-500 focus:outline-purple rounded-lg" type="text" placeholder="Type your message" required name='message'></textarea>
                    </div>
                    <button class="relative group inline-block flex-shrink-0 w-full sm:w-auto py-3 px-5 text-sm font-semibold text-orange-50 bg-orange-600 rounded-md overflow-hidden" type="submit">
                        <div class="absolute top-0 right-full w-full h-full bg-gray-900 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                        <span class="relative">Submit</span>
                    </button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
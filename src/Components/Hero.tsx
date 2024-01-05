import profile from '../assets/andri3.png'
// import { useState, useEffect } from 'react';
import ReactTyped from "react-typed";

function Hero() {




    return (
        <div>
            <div className="min-h-[550px] sm:min-h-[550px] bg-gray-100 dark:bg-gray-950 flex justify-center items-center duration-200">
                <div className="container pb-8 sm:pb-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div
                            data-aos="zoom-out"
                            data-aos-duration="400"
                            data-aos-once="true"
                            className="flex flex-col justify-center pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 gap-8"
                        >
                            {/* Text Page Hero  */}
                            <a className=" text-black dark:text-white text-3xl ">Hy, My Name Is ...🙌 <span className=" text-7xl block font-bold my-5">Andri Irwan Zahri</span> I'm <span className="text-secondary text-2xl"><ReactTyped
                                strings={["Web Developer", "Mobile Developper", "Designer"]}
                                typeSpeed={100}
                                loop
                                backSpeed={20}
                                cursorChar="|"
                                showCursor={true}
                            /></span></a>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque enim sed voluptates, repellat velit repellendus labore quasi at corrupti molestias.</p>

                            {/* buttom   */}

                            <div>
                                <button className='bg-gradient-to-r from-primary to-secondary duration-200 text-white py-2 px-4 rounded-xl '>Download CV</button>
                            </div>
                        </div>
                        {/* image Sections */}
                        <div className='sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>

                            <div className="bg-primary sm:min-h-[450px] flex justify-center relative items-center rounded-full transition ease-in-out duration-300">
                                <img
                                    data-aos="zoom-in"
                                    data-aos-duration="300"
                                    data-aos-once="true"
                                    src={profile} alt="Logo" className=" w-[300px] lg:w-[350px] sm:w-[450px] sm:scale-100   mx-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
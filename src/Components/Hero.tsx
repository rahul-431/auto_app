import React from 'react';
import Button from './Button';
function Hero() {
    return (
        <>
            <div className="pb-[110px] pt-[20px] dark:bg-dark lg:pt-[50px] lg:bg-[url('../Images/bground.jpg')] bg-cover bg-no-repeat bg-center h-[900px]">
                <div className="container" >
                    <div className=" items-center ">
                        <div className="lg:w-5/12 lg:ml-10 lg:mt-96">
                            <div className="hero-content">
                                <h1 className="mb-5 text-6xl font-bold leading-[1.208] text-white dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                                    #1 Platform For All Auto Services
                                </h1>

                                <ul className="flex flex-wrap items-center lg:mt-44">
                                    <li>
                                        <Button label='Earn with auto' />
                                    </li>
                                    <li>
                                        <Button label='Download App' />
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;

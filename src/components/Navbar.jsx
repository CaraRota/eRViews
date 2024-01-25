import React from "react";
import bgImage from "../assets/bg-homepage.jpg";
import erLogo from "../assets/er-logo.png";
import CoinIcon from "./ui/CoinIcon";

const Header = () => {
    const citizenID = 6872100;
    return (
        <>
            <div className='pb-5 border-b'>
                <div>
                    <img
                        className='h-32 w-full object-cover lg:h-48'
                        src={bgImage}
                        alt='Header image'
                    />
                </div>
                <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
                    <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
                        <div className='flex'>
                            <img
                                className='h-24 w-24 rounded-full ring-4 ring-slate-700 sm:h-32 sm:w-32'
                                src={erLogo}
                                alt='eRepublik Logo'
                            />
                        </div>
                        <div className='mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
                            <div className='mt-6 min-w-0 flex-1 md:block'>
                                <h1 className='truncate text-slate-700 text-4xl font-bold'>
                                    eR Views
                                </h1>
                            </div>
                            <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0'>
                                <a
                                    href={`https://www.erepublik.com/en/main/messages-compose/${citizenID}`}
                                    target='_blank'
                                    rel='noreferrer'>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                                        <svg
                                            className='-ml-0.5 mr-1.5 h-5 w-5 text-gray-400'
                                            viewBox='0 0 20 20'
                                            fill='currentColor'
                                            aria-hidden='true'>
                                            <path d='M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z' />
                                            <path d='M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z' />
                                        </svg>
                                        <span>Message</span>
                                    </button>
                                </a>
                                <a
                                    href={`https://www.erepublik.com/en/economy/donate-money/${citizenID}`}
                                    target='_blank'
                                    rel='noreferrer'>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                                        <CoinIcon />
                                        <span>Donate</span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

import React from "react";
import bgImage from "../assets/bg-homepage.jpg";
import erLogo from "../assets/er-logo.png";
import CoinIcon from "./ui/CoinIcon";
import CalculatorIcon from "./ui/CalculatorIcon";
import EnvelopeIcon from "./ui/EnvelopeIcon";

//RRD
import { Link } from "react-router-dom";

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
                        <Link to='/'>
                            <div className='flex'>
                                <img
                                    className='size-24 rounded-full ring-2 ring-offset-2 ring-slate-700 sm:h-32 sm:w-32'
                                    src={erLogo}
                                    alt='eRepublik Logo'
                                />
                            </div>
                        </Link>
                        <div className='mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
                            <div className='mt-6 min-w-0 flex-1 md:block'>
                                <h1 className='truncate text-slate-700 text-4xl font-bold'>
                                    eR Views
                                </h1>
                            </div>
                            <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0'>
                                <Link to='/calculator'>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                                        <CalculatorIcon />
                                        <span>Calculator</span>
                                    </button>
                                </Link>
                                <a
                                    href={`https://www.erepublik.com/en/main/messages-compose/${citizenID}`}
                                    target='_blank'
                                    rel='noreferrer'>
                                    <button
                                        type='button'
                                        className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                                        <EnvelopeIcon />
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

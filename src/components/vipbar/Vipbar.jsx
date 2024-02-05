import React, { useState } from "react";

import { useApi } from "../../context/apiContext";

const Vipbar = ({ image, alt, text, data, amount, gold = null }) => {
    const { loading } = useApi();

    return (
        !loading &&
        data &&
        (gold ? (
            <div className='border-t-purple-400 bg-purple-50 hover:bg-purple-100 border border-t-2 shadow-sm mt-5 px-2 rounded-lg w-36 h-16 flex flex-col justify-center items-center'>
                <div className='flex flex-row gap-2'>
                    <img src={image} alt={alt} className='mx-auto size-6' />
                    <p className='text-gray-800 text-sm'>{text}</p>
                </div>
                <div>Cost: ${(amount * data.price).toFixed(2)}</div>
            </div>
        ) : (
            <div className='border-t-purple-400 bg-purple-50 hover:bg-purple-100 border border-t-2 shadow-sm mt-5 px-2 rounded-lg w-36 h-16 flex flex-col justify-center items-center'>
                <div className='flex flex-row gap-2'>
                    <img src={image} alt={alt} className='mx-auto size-6' />
                    <p className='text-gray-800 text-sm'>{text}</p>
                </div>
                <div>Cost: ${(amount * data.offers[0].gross).toFixed(2)}</div>
            </div>
        ))
    );
};

export default Vipbar;

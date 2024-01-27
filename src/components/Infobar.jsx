import React from "react";

const Infobar = ({ gold }) => {
    return (
        <>
            <h1 className='rounded-md text-3xl font-semibold text-gray-800 text-center'>
                Gold Price
            </h1>
            <div className='flex gap-2'>
                <p className='text-gray-800 text-xl'>{gold.price.toFixed(2)}</p>
                <img
                    src='https://www.erepublik.net/images/modules/_icons/gold_24.png'
                    alt='gold'
                    className='mx-auto'
                />
            </div>
            <p className='text-gray-800'>{gold.amount} available</p>
            {/* <p className='text-gray-800'>{gold.citizen_name}</p> */}
        </>
    );
};

export default Infobar;

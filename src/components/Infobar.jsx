import React from "react";
import LinkOutlinedIcon from "@mui/icons-material/LinkOutlined";

const Infobar = ({ title, price, image, amount, link }) => {
    return (
        <>
            <h1 className='rounded-md text-3xl font-semibold text-gray-800 text-center'>{title}</h1>
            <div className='flex gap-2'>
                <p className='text-gray-800 text-xl'>{price}</p>
                <img src={image} alt='gold' className='mx-auto' />
            </div>
            <p className='text-gray-800'>{amount}</p>
            <p className='text-cyan-500 hover:text-cyan-600'>
                <a href={link} target='_blank'>
                    <LinkOutlinedIcon />
                    Link
                </a>
            </p>
        </>
    );
};

export default Infobar;

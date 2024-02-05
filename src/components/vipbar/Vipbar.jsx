import React from "react";

import Tooltip from "@mui/material/Tooltip";
import { useApi } from "../../context/apiContext";

const Vipbar = ({ image, alt, text, data, amount, gold = null, cc = null }) => {
    const { loading } = useApi();

    return (
        !loading &&
        data && (
            <div className='border-t-purple-400 bg-purple-50 hover:bg-purple-100 border border-t-2 shadow-sm mt-5 px-2 rounded-lg w-36 h-20 flex flex-col justify-center items-center'>
                <div className='flex flex-row gap-2 items-center justify-center text-center'>
                    <Tooltip title={text} arrow placement='top'>
                        <img src={image} alt={alt} className='mx-auto size-12' />
                    </Tooltip>
                </div>

                <div className='text-gray-800 text-xl'>
                    {cc
                        ? `$${cc.toFixed(2)}`
                        : `$${(amount * (gold ? data.price : data.offers[0].gross)).toFixed(2)}`}
                </div>
            </div>
        )
    );
};

export default Vipbar;

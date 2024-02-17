import React from "react";

import Tooltip from "@mui/material/Tooltip";
import { useApi } from "../../context/apiContext";

const VipbarDetail = ({ image, alt, text, data, amount, gold = null, cc = null }) => {
    const { loading } = useApi();

    return (
        !loading &&
        data && (
            <Tooltip title={text} arrow placement='top'>
                <div className='border-t-purple-400 bg-purple-50 hover:bg-purple-100 border border-t-2 shadow-sm mt-5 px-2 rounded-lg w-28 h-10 flex flex-col justify-center items-center cursor-pointer'>
                    <div className='flex flex-row gap-2 items-center justify-center text-center'>
                        <img src={image} alt={alt} className='mx-auto size-8' />
                        <div className='text-gray-800 text-md'>
                            {cc
                                ? `$${cc.toFixed(2)}`
                                : `$${parseInt(
                                      amount * (gold ? data.price : data.offers[0].gross)
                                  )}`}
                        </div>
                    </div>
                </div>
            </Tooltip>
        )
    );
};

export default VipbarDetail;

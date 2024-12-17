import React, { useMemo } from "react";
import { useApi } from "../../context/apiContext";
import Tooltip from "@mui/material/Tooltip";

const VipbarDetail = ({ image, alt, text, data, amount, gold = null, cc = null }) => {
    const { loading, pricesData, gold: goldPrice } = useApi();

    const mergedData = useMemo(() => {
        if (!data) return null;
        if (cc) return true;
        if (gold) return goldPrice;
        else {
            return pricesData.find((item) => item.industry === data);
        }
    }, [pricesData, data]);

    return (
        !loading &&
        mergedData && (
            <Tooltip
                title={`${text} = ${amount ?? cc} ${
                    mergedData === true
                        ? "CC"
                        : mergedData.industry
                        ? mergedData.industry.toUpperCase()
                        : "gold"
                } * $${cc ? cc : gold ? mergedData.price : mergedData.offers[0].gross}`}
                arrow
                placement='top'>
                <div className='border-t-zinc-400 bg-zinc-50 hover:bg-zinc-100 border border-t-2 shadow-sm mt-5 px-2 rounded-lg w-28 h-10 flex flex-col justify-center items-center cursor-pointer'>
                    <div className='flex flex-row gap-2 items-center justify-center text-center'>
                        <img src={image} alt={alt} className='mx-auto size-8' />
                        <div className='text-gray-800 text-md'>
                            {cc
                                ? `$${cc}`
                                : `$${parseInt(
                                      amount *
                                          (gold ? mergedData.price : mergedData.offers[0].gross)
                                  )}`}
                        </div>
                    </div>
                </div>
            </Tooltip>
        )
    );
};

export default VipbarDetail;

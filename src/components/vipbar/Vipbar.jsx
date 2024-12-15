import React from "react";

import VipbarDetail from "./VipbarDetail";
import { VIPBAR } from "../../constants";

const Vipbar = ({ gold, frm, wrm, hrm, arm }) => {
    const getData = (data) => {
        if (!data) return null;
        switch (data) {
            case "gold":
                return gold;
            case "frm":
                return frm;
            case "wrm":
                return wrm;
            case "hrm":
                return hrm;
            case "arm":
                return arm;
            default:
                return true;
        }
    };
    return (
        <>
            <div className='flex flex-col mx-auto w-11/12 lg:max-w-screen-lg gap-2 py-5 bg-gradient-to-b from-purple-100 to-purple-200 border-purple-300 mt-5 rounded-md border '>
                <div className='text-center truncate text-purple-400 text-2xl font-bold'>
                    Vip Shop Prices
                </div>
                <div className='flex flex-row flex-wrap gap-2 justify-center items-center'>
                    {VIPBAR.map((vip, index) => {
                        return (
                            <VipbarDetail
                                key={index}
                                image={vip.image}
                                alt={vip.alt}
                                text={vip.text}
                                data={getData(vip.data)}
                                amount={vip.amount}
                                gold={vip.gold}
                                cc={vip.cc}
                            />
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Vipbar;

import React from "react";
import VipbarDetail from "./VipbarDetail";
import { VIPBAR } from "../../constants";

const Vipbar = () => {
    return (
        <>
            <div className='flex flex-col mx-auto w-11/12 lg:max-w-screen-md gap-2 py-5 bg-gradient-to-b from-zinc-100 to-zinc-200 border-zinc-300 mt-5 rounded-md border '>
                <div className='text-center truncate text-zinc-400 text-2xl font-bold'>
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
                                data={vip.data}
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

import React from "react";
import Card from "./Card";
import Infobar from "./Infobar";
import Vipbar from "./vipbar/Vipbar";
import Spinner from "./ui/Spinner";

import workIcon from "../assets/work-icon.png";

import { useApi } from "../context/apiContext";

const Homepage = () => {
    const { loading, gold, jobs, frm, wrm, hrm, arm, weaponQ7, foodQ5 } = useApi();

    return (
        <>
            <div className='flex flex-col sm:flex-row sm:flex-wrap mx-auto max-w-screen-lg gap-2'>
                {gold ? (
                    <div className='border-t-yellow-300 bg-yellow-50 hover:bg-yellow-100 border border-t-2 shadow-sm mt-5 py-10 px-7 rounded-lg w-52 h-32 mx-auto flex justify-center items-center flex-col'>
                        <Infobar
                            title={"Gold Price"}
                            image={"https://www.erepublik.net/images/modules/_icons/gold_24.png"}
                            price={gold.price.toFixed(2)}
                            amount={`${gold.amount} available`}
                            link={`https://www.erepublik.com/en/economy/exchange-market/${gold.id}`}
                        />
                    </div>
                ) : (
                    <Spinner />
                )}
                {jobs ? (
                    <div className='border-t-pink-400 bg-pink-50 hover:bg-pink-100 border border-t-2 shadow-sm mt-5 py-10 px-7 rounded-lg w-52 h-32 mx-auto flex justify-center items-center flex-col'>
                        <Infobar
                            title={"Best Job"}
                            image={workIcon}
                            price={`$${jobs.net}`}
                            amount={`Limit of $${jobs.salary_limit}`}
                            link={`https://www.erepublik.com/en/economy/job-market/${jobs.country_id}`}
                        />
                    </div>
                ) : (
                    <Spinner />
                )}
            </div>
            {
                <div className='flex flex-wrap justify-center items-center gap-5'>
                    <Vipbar
                        image={"https://www.erepublik.com/images/icons/boosters/128px/speed.png"}
                        alt={"Speed Accelerator Icon"}
                        text={"2x Damage"}
                        data={gold}
                        amount={0.7}
                        gold={true}
                    />
                    <Vipbar
                        image={"https://www.erepublik.com/images/icons/boosters/128px/damage.png"}
                        alt={"Ground Damage Icon"}
                        text={"+50% Ground Damage"}
                        data={frm}
                        amount={77}
                    />
                    <Vipbar
                        image={"https://www.erepublik.com/images/icons/rewards/128px/storage.png"}
                        alt={"Storage Icon"}
                        text={"+1000 Storage"}
                        data={frm}
                        amount={227}
                    />
                    <Vipbar
                        image={"https://www.erepublik.com/images/icons/industry/1/q10_128x128.png"}
                        alt={"Energy Bar Icon"}
                        text={"Energy Bar"}
                        data={gold}
                        amount={1.4}
                        gold={true}
                    />
                    <Vipbar
                        image={"https://www.erepublik.com/images/icons/boosters/128px/catchup.png"}
                        alt={"Ghost Booster Icon"}
                        text={"Ghost Booster"}
                        data={wrm}
                        amount={56}
                    />
                    <Vipbar
                        image={"https://www.erepublik.com/images/icons/industry/1/q11_128x128.png"}
                        alt={"Double Energy Bars Icon"}
                        text={"Double Energy Bars"}
                        data={gold}
                        gold={true}
                        amount={3}
                    />
                    <Vipbar
                        image={
                            "https://www.erepublik.com/images/icons/rewards/128px/factory_reset_token.png"
                        }
                        alt={"Factory Reset Token Icon"}
                        text={"Factory Reset Token"}
                        data={hrm}
                        amount={5}
                    />
                    <Vipbar
                        image={
                            "https://www.erepublik.com/images/icons/boosters/128px/deploy_size.png"
                        }
                        alt={"+100% Deploy Size Icon"}
                        text={"+100% Deploy Size"}
                        data={frm}
                        amount={129}
                    />
                    <Vipbar
                        image={
                            "https://www.erepublik.com/images/icons/boosters/128px/deploy_rank_ground.png"
                        }
                        alt={"+10% Ground Rank Points Icon"}
                        text={"+10% Ground Rank Points"}
                        data={wrm}
                        amount={142}
                    />
                    <Vipbar
                        image={"https://www.erepublik.com/images/icons/rewards/128px/storage.png"}
                        alt={"+9000 Storage Icon"}
                        text={"+9000 Storage"}
                        data={wrm}
                        amount={262}
                    />
                </div>
            }
            <div className='flex flex-wrap mx-auto max-w-screen-lg gap-2'>
                <Card data={frm} loading={loading} />
                <Card data={wrm} loading={loading} />
                <Card data={hrm} loading={loading} />
                <Card data={arm} loading={loading} />
                <Card data={weaponQ7} quality={7} loading={loading} />
                <Card data={foodQ5} quality={5} loading={loading} />
            </div>
        </>
    );
};

export default Homepage;

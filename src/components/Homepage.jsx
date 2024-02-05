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

            {/* VIP Bar Section */}
            {<Vipbar gold={gold} frm={frm} wrm={wrm} hrm={hrm} arm={arm} />}

            {/* Cards Section */}
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

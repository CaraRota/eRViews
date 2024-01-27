import React, { useState, useEffect } from "react";
import Infobar from "./Infobar";
import Card from "./Card";

import workIcon from "../assets/work-icon.png";
import Spinner from "./ui/Spinner";

import axios from "axios";

const Homepage = () => {
    const [gold, setGold] = useState(null);
    const [jobs, setJobs] = useState(null);

    const baseUrl = "https://api.allorigins.win/raw?url=";
    const goldApi = "https://service.erepublik.tools/api/v1/market/gold";
    const jobsApi = "https://service.erepublik.tools/api/v1/market/job/0";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const goldResponse = await axios.get(`${baseUrl + goldApi}`);
                const jobsResponse = await axios.get(`${baseUrl + jobsApi}`);
                setGold(goldResponse.data.offers[0]);
                setJobs(jobsResponse.data.offers[0]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='flex flex-col sm:flex-row sm:flex-wrap mx-auto max-w-screen-lg gap-2'>
                {gold ? (
                    <div className='border-t-amber-300 bg-amber-50 border border-t-2 shadow-sm mt-5 py-10 px-7 rounded-lg w-52 h-32 mx-auto flex justify-center items-center flex-col'>
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
                    <div className='border-t-pink-700 bg-pink-50 border border-t-2 shadow-sm mt-5 py-10 px-7 rounded-lg w-52 h-32 mx-auto flex justify-center items-center flex-col'>
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
            <div className='flex flex-wrap mx-auto max-w-screen-lg gap-2'>
                <Card
                    apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/7/1"}
                    gold={gold}
                />
                <Card
                    apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/12/1"}
                    gold={gold}
                />
                <Card
                    apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/17/1"}
                    gold={gold}
                />
                <Card
                    apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/24/1"}
                    gold={gold}
                />

                <Card
                    apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/2/7"}
                    gold={gold}
                    quality={7}
                />
                <Card
                    apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/1/5"}
                    gold={gold}
                    quality={5}
                />
            </div>
        </>
    );
};

export default Homepage;

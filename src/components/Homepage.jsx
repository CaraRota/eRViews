import React, { useState, useEffect } from "react";
import Card from "./Card";

import axios from "axios";
import Spinner from "./ui/Spinner";

const Homepage = () => {
    const [goldLoading, setGoldLoading] = useState(true);
    const [gold, setGold] = useState(null);

    const baseUrl = "https://api.allorigins.win/raw?url=";
    const goldApi = "https://service.erepublik.tools/api/v1/market/gold";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const goldResponse = await axios.get(`${baseUrl + goldApi}`);
                setGold(goldResponse.data.offers[0]);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setGoldLoading(false);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            {gold ? (
                <div className='border-t-amber-300 border-2 mt-5 py-10 px-7 rounded-md shadow-md w-52 h-28 mx-auto flex justify-center items-center flex-col'>
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
                </div>
            ) : (
                <Spinner />
            )}
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

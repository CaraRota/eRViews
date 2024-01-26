import React, { useState, useEffect } from "react";
import CardDetail from "./CardDetail";

import { mapIndustry } from "../utils/dataMapping.js";

import axios from "axios";
import Spinner from "./ui/Spinner";

const Card = ({ apiUrl, quality = null }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const serverlessProxy = "https://serverless-proxy-cywlp49zd.vercel.app/";
    // const baseUrl = "https://thingproxy.freeboard.io/fetch/";
    const slice = 3;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${serverlessProxy + apiUrl}`);
                const slicedData = response.data.offers.slice(0, slice);
                const industry = response.data.info.industry.name;
                const id = response.data.info.industry.id;
                const dataWithIndustry = {
                    id,
                    industry,
                    offers: slicedData,
                };

                setData(dataWithIndustry);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                <>
                    <div className='bg-white shadow-md rounded-md overflow-hidden min-w-96 max-w-sm mx-auto mt-8'>
                        {data && (
                            <div className='bg-gray-100 py-2 px-4 flex flex-row gap-4 items-center'>
                                <img
                                    src={`https://www.erepublik.net/images/icons/industry/${data.id}/default.png`}
                                    alt='industry'
                                    className='size-12 inline-block'
                                />
                                <div>
                                    <h2>Top {slice}</h2>
                                    <h3 className='text-xl font-semibold text-gray-800'>
                                        {mapIndustry[data.industry]}{" "}
                                        {quality ? `Q${quality}` : null} prices
                                    </h3>
                                </div>
                            </div>
                        )}
                        {data &&
                            data.offers.map((item, index) => (
                                <div key={index}>
                                    <CardDetail item={item} index={index} />
                                </div>
                            ))}
                    </div>
                </>
            )}
        </>
    );
};

export default Card;

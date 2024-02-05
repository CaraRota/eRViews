import React from "react";
import CardDetail from "./CardDetail";

import { mapIndustry } from "../utils/dataMapping.js";
import Spinner from "./ui/Spinner";

import { useApi } from "../context/apiContext";

const Card = ({ data, quality = null }) => {
    const { gold, loading, slice } = useApi();

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
                                    <CardDetail item={item} index={index} gold={gold} />
                                </div>
                            ))}
                    </div>
                </>
            )}
        </>
    );
};

export default Card;

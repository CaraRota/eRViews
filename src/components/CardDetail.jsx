import React from "react";
import CountryFlag from "./CountryFlag";
import WarningIcon from "./ui/WarningIcon";
import OkIcon from "./ui/OkIcon";

const CardDetail = ({ item, index }) => {
    return (
        <ul>
            <li className='flex items-center py-4 px-6 border-b'>
                <span className='text-gray-700 text-lg font-medium mr-4'>{index + 1}</span>
                <CountryFlag
                    src={`https://static.erepublik.tools/assets/img/erepublik/country/${item.country_id}.gif`}
                    alt='User avatar'
                />

                <div className='flex-1'>
                    <h3 className='text-lg font-medium text-gray-800'>
                        Price: ${item.gross.toFixed(2)}
                    </h3>
                    {item.amount < 10 ? (
                        <p className='text-red-500 text-base'>
                            Quantity: {item.amount}
                            <WarningIcon />
                        </p>
                    ) : (
                        <p className='text-gray-600 text-base'>
                            Quantity: {item.amount}
                            <OkIcon />
                        </p>
                    )}
                </div>
                <div className='flex items-center'>
                    <a
                        href={`https://www.erepublik.com/en/economy/marketplace/offer/${item.id}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-emerald-700 hover:bg-emerald-500 text-zinc-50 font-bold py-2 px-4 rounded-md'>
                        Buy now!
                    </a>
                </div>
            </li>
        </ul>
    );
};

export default CardDetail;

import React from "react";
import CountryFlag from "./CountryFlag";
import WarningIcon from "./ui/WarningIcon";
import OkIcon from "./ui/OkIcon";
import CalculatorIcon from "./ui/CalculatorIcon";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { Tooltip, Typography } from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

import { Link } from "react-router-dom";

const CardDetail = ({ item, index, gold }) => {
    const goldPrice = gold ? gold.price : null;

    return (
        <ul>
            <li className='flex items-center py-4 px-6 border-b'>
                <span className='text-gray-700 text-lg font-medium mr-4'>{index + 1}</span>
                <CountryFlag
                    src={`https://static.erepublik.tools/assets/img/erepublik/country/${item.country_id}.gif`}
                    alt='User avatar'
                />

                <div className='flex-1'>
                    <h3 className='text-lg font-medium text-gray-800 flex flex-row items-center gap-3'>
                        Price: ${item.gross.toFixed(2)}
                        {/* <Link
                            to={"/calculate"}
                            state={item.gross}
                            className='text-gray-500 hover:text-gray-700'>
                            <CalculatorIcon />
                        </Link> */}
                    </h3>
                    {item.amount < 10 ? (
                        <p className='text-pink-700 text-base'>
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
                <div className='flex items-center flex-col gap-2'>
                    <Tooltip
                        className='-ml-0.5 mr-1.5 text-emerald-500 hover:text-emerald-600 text-center'
                        title={
                            <>
                                <Typography color='inherit'>Buyout cost</Typography>
                                <Typography color='inherit'>
                                    ${(item.amount * item.gross).toFixed(2)}
                                </Typography>
                                <Typography color='inherit'>
                                    {((item.amount * item.gross) / goldPrice).toFixed(2)} Gold
                                </Typography>
                            </>
                        }>
                        <CurrencyExchangeIcon />
                    </Tooltip>
                    <a
                        href={`https://www.erepublik.com/en/economy/marketplace/offer/${item.id}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-emerald-800 hover:bg-emerald-700 text-zinc-50 font-bold py-2 px-4 rounded-md'>
                        Buy now!
                    </a>
                </div>
            </li>
        </ul>
    );
};

export default CardDetail;

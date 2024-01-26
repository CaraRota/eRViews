import React, { useEffect, useState } from "react";

import { Skeleton } from "@mui/material";

const Calculator = () => {
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");

    useEffect(() => {
        const countdown = () => {
            const countDate = new Date("March 25, 2024 00:00:00").getTime();
            const now = new Date().getTime();
            const gap = countDate - now;

            // How the time works
            const second = 1000;
            const minute = second * 60;
            const hour = minute * 60;
            const day = hour * 24;

            // Calculate
            const textDay = Math.floor(gap / day);
            const textHour = Math.floor((gap % day) / hour);
            const textMinute = Math.floor((gap % hour) / minute);
            const textSecond = Math.floor((gap % minute) / second);

            setDays(textDay);
            setHours(textHour);
            setMinutes(textMinute);
            setSeconds(textSecond);
        };

        setInterval(countdown, 1000);
    }, []);

    return (
        <div className='mt-12 flex justify-center items-center px-2'>
            <div className='max-w-lg mx-auto bg-white shadow-xl rounded-lg overflow-hidden'>
                <div className='py-4 px-6'>
                    <h2 className='text-4xl font-bold text-slate-700'>Coming Soon</h2>
                    <p className='mt-2 text-lg text-gray-800'>
                        We are working hard to bring you an amazing calculator. Stay tuned!
                    </p>
                </div>

                <div className='py-4 px-6'>
                    <div className='flex flex-wrap gap-4 justify-center items-center'>
                        <div className='border rounded-lg px-4 py-2 flex justify-center items-center flex-col text-slate-700'>
                            Days
                            <div
                                id='days'
                                className='font-bold font-mono text-2xl text-slate-700 w-16 flex items-center justify-center'>
                                {days ? (
                                    days
                                ) : (
                                    <Skeleton
                                        variant='rounded'
                                        animation='wave'
                                        width={60}
                                        height={30}
                                    />
                                )}
                            </div>
                        </div>
                        <div className='border rounded-lg px-4 py-2 flex justify-center items-center flex-col text-slate-700'>
                            Hours
                            <div
                                id='hours'
                                className='font-bold font-mono text-2xl text-slate-700 w-16 flex items-center justify-center'>
                                {hours ? (
                                    hours
                                ) : (
                                    <Skeleton
                                        variant='rounded'
                                        animation='wave'
                                        width={60}
                                        height={30}
                                    />
                                )}
                            </div>
                        </div>
                        <div className='border rounded-lg px-4 py-2 flex justify-center items-center flex-col text-slate-700'>
                            Minutes
                            <div
                                id='minutes'
                                className='font-bold font-mono text-2xl text-slate-700 w-16 flex items-center justify-center'>
                                {minutes ? (
                                    minutes
                                ) : (
                                    <Skeleton
                                        variant='rounded'
                                        animation='wave'
                                        width={60}
                                        height={30}
                                    />
                                )}
                            </div>
                        </div>
                        <div className='border rounded-lg px-4 py-2 flex justify-center items-center flex-col text-slate-700'>
                            Seconds
                            <div
                                id='seconds'
                                className='font-bold font-mono text-2xl text-slate-700 w-16 flex items-center justify-center'>
                                {seconds ? (
                                    seconds
                                ) : (
                                    <Skeleton
                                        variant='rounded'
                                        animation='wave'
                                        width={60}
                                        height={30}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;

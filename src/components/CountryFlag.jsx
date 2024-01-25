import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";

const CountryFlag = ({ src, alt }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const image = new Image();
        image.src = src;

        image.onload = () => {
            setLoading(false);
        };

        return () => {
            // Cleanup if component unmounts before image is loaded
            image.onload = null;
        };
    }, [src]);

    return (
        <div style={{ position: "relative" }}>
            {loading ? (
                <Skeleton
                    className='rounded-sm object-cover mr-4'
                    width={46}
                    height={33}
                    variant='rectangular'
                    animation={loading ? "wave" : false}
                    style={{ borderRadius: "4px", display: loading ? "block" : "none" }}
                />
            ) : (
                <img
                    className='rounded-sm object-cover mr-4'
                    src={src}
                    alt={alt}
                    style={{ display: loading ? "none" : "block" }}
                />
            )}
        </div>
    );
};

export default CountryFlag;

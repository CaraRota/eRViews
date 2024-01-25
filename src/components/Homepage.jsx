import React from "react";
import Card from "./Card";

const Homepage = () => {
    return (
        <>
            <div className='flex flex-wrap mx-auto max-w-screen-lg gap-2'>
                <Card apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/7/1"} />
                <Card apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/12/1"} />
                <Card apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/17/1"} />
                <Card apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/24/1"} />

                <Card
                    apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/2/7"}
                    quality={7}
                />
                <Card
                    apiUrl={"https://service.erepublik.tools/api/v1/market/item/0/1/5"}
                    quality={5}
                />
            </div>
        </>
    );
};

export default Homepage;

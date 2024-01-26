import React from "react";
import { useLocation } from "react-router-dom";

const Calculate = () => {
    const location = useLocation();
    const item = location.state;

    return (
        <div>
            <div>Calculate Component </div>
            <div>{item}</div>
        </div>
    );
};

export default Calculate;

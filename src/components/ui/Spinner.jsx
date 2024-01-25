import React from "react";
import "./Spinner.css";

const Spinner = () => {
    return (
        <>
            <div className='loaderContainer'>
                <span className='loader'></span>
                Loading awesomeness...
            </div>
        </>
    );
};

export default Spinner;

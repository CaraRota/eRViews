import React from "react";
import { Link } from "react-router-dom";

const NavbarButton = ({ link, text, children, target }) => {
    return (
        <>
            <Link to={link} target={target ? "_blank" : null}>
                <button
                    type='button'
                    className='inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
                    {children}
                    <span>{text}</span>
                </button>
            </Link>
        </>
    );
};

export default NavbarButton;

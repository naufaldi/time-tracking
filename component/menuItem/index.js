import React from "react";

export const MenuItem = ({ children, animationDelay, color }) => {
    const style = { animationDelay: animationDelay, color: color };

    return (
        <li
            className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2 animation-fadeIn-bottom"
            style={style}
        >
            {children}
        </li>
    );
};

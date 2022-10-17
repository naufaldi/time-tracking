import React from "react";

export const Container = ({ children }) => {
    return (
        <section className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-4 mt-12 md:mt-20  justify-evenly md:justify-items-center   max-w-screen-xl mx-auto px-4 lg:items-center pb-24 md:pb-0">
            {children}
        </section>
    );
};

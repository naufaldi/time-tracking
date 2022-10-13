import React, { useEffect, useState } from "react";
import Head from "next/head";
import Button from "../component/Button/Button";
import Input from "../component/Input/Input";
import ImageIllustrationDarkMode from "../component/Image/DarkImage/ImageIllustration";
import ImageIllustrationLightMode from "../component/Image/LightImage/ImageIllustration";
import { Navbar } from "../component/navbar";
import { Container } from "../component/container";

export default function Home() {
    const [darkMode, setDarkMode] = useState(false);
    const [checked, setChecked] = useState(false);
    const _handleCheckbox = () => {
        setDarkMode(!darkMode);
        setChecked(!checked);
    };
    useEffect(() => {
        if (darkMode) {
            document.querySelector("html").classList.add("dark");
        } else {
            document.querySelector("html").classList.remove("dark");
        }
        console.log("Dark Mdoe", darkMode);
    }, [darkMode]);
    return (
        <>
            <Head>
                <title>Time Tracker</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header id="hero" className="lg:h-screen w-full bg-gray-500 dark:bg-gray-800">
                <Navbar darkMode={darkMode} checked={checked} _handleCheckbox={_handleCheckbox} />

                <Container>
                    <div className="w-6/12 md:w-10/12  lg:w-full mx-auto flex flex-col justify-start items-start text-dark-500 dark:text-gray-300 mt-12 lg:mt-0 px-4 lg:px-0 ">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl leading-relaxed  animation-fadeIn-bottom ">
                            Simple time tracking.
                            <br /> Powerful reporting.
                        </h1>
                        <p className="my-6 text-base md:text-xl lg:text-2xl animation-fadeIn-top ">
                            Turn your team on to productivity with Gravity the time tracker.
                        </p>
                        <label
                            htmlFor="email"
                            className="flex flex-col md:flex-row w-full items-start md:items-center"
                        >
                            <Input
                                type="text"
                                id="email"
                                className="w-full md:w-7/12 lg:w-5/12 md:text-lg animation-fadeIn-top  delay-anim-100 "
                            />
                            <Button className="md:text-lg font-bold dark:border-gray-200 shadow dark:shadow-cool-gray py-3 px-4 bg-acapulco-900 text-white dark:text-gray-100 mt-4 md:mt-0 md:mx-4 hover:bg-acapulco-600 hover:border-acapulco-500 animation-fadeIn-top delay-anim-200">
                                Request early access
                            </Button>
                        </label>
                    </div>

                    <div className="flex items-center  justify-start sm:justify-center row-start-1 w-6/12 lg:w-auto lg:col-start-2 mx-auto">
                        <div className="w-full md:w-9/12 lg:w-10/12 animation-fadeIn-big flex justify-start">
                            {darkMode ? (
                                <ImageIllustrationDarkMode />
                            ) : (
                                <ImageIllustrationLightMode />
                            )}
                        </div>
                    </div>
                </Container>
            </header>
        </>
    );
}

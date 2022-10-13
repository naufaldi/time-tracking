import React from "react";
import Button from "../Button/Button";
import ImageLogoDarkMode from "../Image/DarkImage/ImageLogo";
import ImageLogoLightMode from "../Image/LightImage/ImageLogo";

export const Navbar = ({ darkMode, checked, _handleCheckbox }) => {
    return (
        <nav className="max-w-screen-xl mx-auto px-4 grid grid-cols-6 md:grid-cols-12 gap-2 sm:gap-4 pt-10 items-center">
            <div className="col-span-2 ">
                <div className="mx-4 animation-fadeIn-big w-full relative">
                    {darkMode ? <ImageLogoDarkMode /> : <ImageLogoLightMode />}
                </div>
            </div>
            <ul className=" md:col-start-4 lg:col-start-6 xl:col-start-7 col-span-4 sm:col-span-3  md:col-span-9 lg:col-span-7 xl:col-span-6 flex justify-end text-xl text-dark-200 dark:text-gray-200 font-medium">
                <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2 animation-fadeIn-bottom delay-anim-75 ">
                    Feature
                </li>
                <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2 animation-fadeIn-bottom delay-anim-100 ">
                    Pricing
                </li>
                <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2 animation-fadeIn-bottom delay-anim-150">
                    Why Gravity
                </li>
                <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2 text-acapulco-900 animation-fadeIn-bottom delay-anim-200">
                    Sign In
                </li>
                <li className="flex justify-center items-center cursor-pointer hover:underline transition-all mx-4 px-2 text-acapulco-500 animation-fadeIn-bottom delay-anim-200">
                    <label htmlFor="toogleA" className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input
                                id="toogleA"
                                type="checkbox"
                                className="hidden"
                                checked={checked}
                                onChange={_handleCheckbox}
                            />

                            <div className="toggle__line w-10 h-4 bg-gray-400 border border-gray-400 rounded-full"></div>

                            <div className="toggle__dot absolute w-6 h-6 bg-white border border-gray-400 rounded-full  bottom-0 left-0"></div>
                        </div>
                    </label>
                </li>
                <li className="block md:hidden w-full">
                    <Button className="flex items-center text-xs">
                        <svg
                            className="mr-4 fill-current text-black dark:text-gray-400"
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M11.2674 1.77074C11.2674 2.74869 10.4711 3.54147 9.48879 3.54147C8.5065 3.54147 7.71021 2.74869 7.71021 1.77074C7.71021 0.792786 8.5065 -2.14208e-08 9.48879 -4.78447e-08C10.4711 -7.42686e-08 11.2674 0.792786 11.2674 1.77074Z"
                                fill="currentColor"
                            />
                            <path
                                d="M11.2712 9.45238C11.2712 10.4303 10.4749 11.2231 9.49257 11.2231C8.51029 11.2231 7.71399 10.4303 7.71399 9.45238C7.71399 8.47443 8.51029 7.68164 9.49257 7.68164C10.4749 7.68164 11.2712 8.47443 11.2712 9.45238Z"
                                fill="currentColor"
                            />
                            <path
                                d="M3.55717 1.77074C3.55717 2.74869 2.76087 3.54147 1.77858 3.54147C0.796299 3.54147 7.39408e-08 2.74869 4.76336e-08 1.77074C2.13263e-08 0.792786 0.796299 -2.14208e-08 1.77858 -4.78447e-08C2.76087 -7.42686e-08 3.55717 0.792786 3.55717 1.77074Z"
                                fill="currentColor"
                            />
                            <path
                                d="M3.56169 9.44505C3.56169 10.423 2.76539 11.2158 1.7831 11.2158C0.800816 11.2158 0.00451668 10.423 0.00451665 9.44505C0.00451662 8.4671 0.800816 7.67432 1.7831 7.67432C2.76539 7.67432 3.56169 8.4671 3.56169 9.44505Z"
                                fill="currentColor"
                            />
                        </svg>
                        Menu
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

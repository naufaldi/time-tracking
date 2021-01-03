import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Time Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header id="hero" className="lg:h-screen w-full bg-gray-500">
        <nav className="max-w-screen-xl mx-auto px-4 grid grid-cols-6 md:grid-cols-12 gap-4 pt-10 items-center">
          <div className="col-span-2 ">
            <img
              src="/assets/img/Logo.png"
              className="mx-4"
              alt="Logo Time Tracking"
            />
          </div>
          <ul className="col-start-5 md:col-start-5 lg:col-start-7 xl:col-start-8 col-span-2  md:col-span-8 lg:col-span-6 xl:col-span-5 flex justify-end text-xl text-dark-200 font-medium">
            <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2 ">
              Feature
            </li>
            <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2 ">
              Pricing
            </li>
            <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2 ">
              Why Gravity
            </li>
            <li className="hidden md:block cursor-pointer hover:underline transition-all mx-4 px-2 text-acapulco-500">
              Sign In
            </li>
            <li className="block md:hidden w-full">
              <button className="border-2 border-black shadow-sm py-2 px-4 rounded-lg flex items-center tex-xs">
                <svg
                  className="mr-4"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.2674 1.77074C11.2674 2.74869 10.4711 3.54147 9.48879 3.54147C8.5065 3.54147 7.71021 2.74869 7.71021 1.77074C7.71021 0.792786 8.5065 -2.14208e-08 9.48879 -4.78447e-08C10.4711 -7.42686e-08 11.2674 0.792786 11.2674 1.77074Z"
                    fill="#22322F"
                  />
                  <path
                    d="M11.2712 9.45238C11.2712 10.4303 10.4749 11.2231 9.49257 11.2231C8.51029 11.2231 7.71399 10.4303 7.71399 9.45238C7.71399 8.47443 8.51029 7.68164 9.49257 7.68164C10.4749 7.68164 11.2712 8.47443 11.2712 9.45238Z"
                    fill="#22322F"
                  />
                  <path
                    d="M3.55717 1.77074C3.55717 2.74869 2.76087 3.54147 1.77858 3.54147C0.796299 3.54147 7.39408e-08 2.74869 4.76336e-08 1.77074C2.13263e-08 0.792786 0.796299 -2.14208e-08 1.77858 -4.78447e-08C2.76087 -7.42686e-08 3.55717 0.792786 3.55717 1.77074Z"
                    fill="#22322F"
                  />
                  <path
                    d="M3.56169 9.44505C3.56169 10.423 2.76539 11.2158 1.7831 11.2158C0.800816 11.2158 0.00451668 10.423 0.00451665 9.44505C0.00451662 8.4671 0.800816 7.67432 1.7831 7.67432C2.76539 7.67432 3.56169 8.4671 3.56169 9.44505Z"
                    fill="#22322F"
                  />
                </svg>
                Menu
              </button>
            </li>
          </ul>
        </nav>
        <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-4 mt-12 md:mt-20   max-w-screen-xl mx-auto px-4 lg:items-center pb-24 md:pb-0">
          <div className="w-full md:w-10/12  lg:w-full mx-auto flex flex-col justify-start items-start text-dark-500 mt-12 lg:mt-0 px-4 lg:px-0">
            <h1 className="text-2xl md:text-4xl lg:text-5xl leading-relaxed">
              Simple time tracking.
              <br /> Powerful reporting.
            </h1>
            <p className="my-6 text-base md:text-xl lg:text-2xl">
              Turn your team on to productivity with Gravity the time tracker.
            </p>
            <form className="flex flex-col md:flex-row w-full items-start md:items-center">
              <input
                type="text"
                class="text-dark-500 bg-transparent border-2 w-full md:w-7/12 lg:w-5/12 border-black rounded-lg shadow-sm py-3 px-4 md:text-lg"
              />
              <button className="md:text-lg font-bold border-2 border-black rounded-lg shadow py-3 px-4 bg-acapulco-500 text-white mt-4 md:mt-0 md:mx-4 hover:bg-acapulco-600 hover:border-acapulco-500">
                Request early access
              </button>
            </form>
          </div>
          <div className="flex items-center justify-center row-start-1 lg:col-start-2">
            <img
              src="/assets/img/Illustration.png"
              alt="Illustration Time Tracking"
              className="w-full md:w-9/12 lg:w-10/12"
            />
          </div>
        </div>
      </header>
    </>
  );
}

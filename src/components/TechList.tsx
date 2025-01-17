import React from "react";
const listItems = [
  {
    title: `Designers`,
    description: `We create visually stunning, user-friendly designs that enhance brand identity and boost conversions. Our SEO-friendly, mobile-responsive solutions ensure a strong online presence. `,
  },
  {
    title: `Developers`,
    description: `We build fast, scalable, and secure digital solutions tailored to your needs. Our cutting-edge development ensures seamless performance, user engagement, and business success. `,
  },
  {
    title: `Product owners`,
    description: `We define clear product strategies, optimize workflows, and align development with business goals. Our expertise ensures seamless execution, market-fit products, and maximized growth. Let’s turn your vision into a thriving reality!`,
  },
];
const TechList = () => {
  return (
    <section className="lg:py-10 pt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 ">
        <div className="mb-16 text-center">
          <h2 className="text-base dark:text-purple-500 text-indigo-600 font-semibold tracking-wide uppercase">
            Grow your revenue
          </h2>
          <p className="mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight dark:text-purple-500 text-gray-900">
            Transform your business
          </p>
        </div>
        <div className="flex flex-wrap -mx-8 items-center">
          <div className="w-full lg:w-1/2 px-8">
            <ul className="space-y-12">
              {listItems.map((item, index) => (
                <li className="flex -mx-4" key={item.title}>
                  <div className="px-4">
                    <span
                      className="flex w-16 h-16 mx-auto items-center justify-center
                      text-2xl font-bold rounded-full  bg-blue-50  text-blue-500"
                    >
                      {index + 1}
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-gray-500 dark:text-white text-xl font-semibold">
                      {item.title}
                    </h3>
                    <p className=" dark:text-white text-gray-500 leading-loose">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2 px-8">
            <div className="lg:mb-12 lg:mb-0 pb-12 lg:pb-0 mt-16 lg:mt-0 mx-6 lg:mx-0">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 769.411 524.375"
                width="100%"
                height="100%"
              >
                <circle
                  cx="174.757"
                  cy="6.813"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="209.246"
                  cy="6.813"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="243.735"
                  cy="6.813"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="278.224"
                  cy="6.813"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="312.713"
                  cy="6.813"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="174.757"
                  cy="41.735"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="209.246"
                  cy="41.735"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="243.735"
                  cy="41.735"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="278.224"
                  cy="41.735"
                  r="6.813"
                  fill="#6a7aff"
                ></circle>
                <circle
                  cx="312.713"
                  cy="41.735"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="381.691"
                  cy="41.735"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="174.757"
                  cy="76.657"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="209.246"
                  cy="76.657"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="243.735"
                  cy="76.657"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="278.224"
                  cy="76.657"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="312.713"
                  cy="76.657"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="174.757"
                  cy="111.579"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="209.246"
                  cy="111.579"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="243.735"
                  cy="111.579"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="278.224"
                  cy="111.579"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="312.713"
                  cy="111.579"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="347.202"
                  cy="111.579"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="381.691"
                  cy="111.579"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="416.18"
                  cy="111.579"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="450.669"
                  cy="111.579"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="485.158"
                  cy="111.579"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="312.713"
                  cy="146.501"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="347.202"
                  cy="146.501"
                  r="6.813"
                  fill="#6a7aff"
                ></circle>
                <circle
                  cx="381.691"
                  cy="146.501"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="416.18"
                  cy="146.501"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="450.669"
                  cy="146.501"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="485.158"
                  cy="146.501"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="312.713"
                  cy="181.423"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="347.202"
                  cy="181.423"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="381.691"
                  cy="181.423"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="416.18"
                  cy="181.423"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="450.669"
                  cy="181.423"
                  r="6.813"
                  fill="#6a7aff"
                ></circle>
                <circle
                  cx="485.158"
                  cy="181.423"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="312.713"
                  cy="216.345"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="347.202"
                  cy="216.345"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="381.691"
                  cy="216.345"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="416.18"
                  cy="216.345"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="450.669"
                  cy="216.345"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="485.158"
                  cy="216.345"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="174.757"
                  cy="251.267"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="209.246"
                  cy="251.267"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="243.735"
                  cy="251.267"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="278.224"
                  cy="251.267"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="312.713"
                  cy="251.267"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="347.202"
                  cy="251.267"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="381.691"
                  cy="251.267"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="416.18"
                  cy="251.267"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="450.669"
                  cy="251.267"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="485.158"
                  cy="251.267"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="174.753"
                  cy="286.188"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="209.246"
                  cy="286.189"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="174.753"
                  cy="321.11"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="209.246"
                  cy="321.111"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <circle
                  cx="278.224"
                  cy="321.111"
                  r="6.813"
                  fill="#e6e6e6"
                ></circle>
                <path
                  d="M622 80.384H352a5.006 5.006 0 01-5-5V8.408a5.006 5.006 0 015-5h270a5.006 5.006 0 015 5v66.976a5.006 5.006 0 01-5 5zM352 5.408a3.003 3.003 0 00-3 3v66.976a3.003 3.003 0 003 3h270a3.003 3.003 0 003-3V8.408a3.003 3.003 0 00-3-3z"
                  fill="#e6e6e6"
                ></path>
                <circle cx="387" cy="41.896" r="21" fill="#6a7aff"></circle>
                <path
                  d="M435.5 27.896a3.5 3.5 0 100 7h93a3.5 3.5 0 100-7zm0 21a3.5 3.5 0 100 7h165a3.5 3.5 0 100-7zM275 216.384H5a5.006 5.006 0 01-5-5v-66.976a5.006 5.006 0 015-5h270a5.006 5.006 0 015 5v66.976a5.006 5.006 0 01-5 5zM5 141.408a3.003 3.003 0 00-3 3v66.976a3.003 3.003 0 003 3h270a3.003 3.003 0 003-3v-66.976a3.003 3.003 0 00-3-3z"
                  fill="#e6e6e6"
                ></path>
                <circle cx="40" cy="177.896" r="21" fill="#6a7aff"></circle>
                <path
                  d="M88.5 163.896a3.5 3.5 0 000 7h97a3.5 3.5 0 000-7zm0 21a3.5 3.5 0 000 7h165a3.5 3.5 0 000-7z"
                  fill="#e6e6e6"
                ></path>
                <path
                  d="M519 363.384H249a5.006 5.006 0 01-5-5v-66.976a5.006 5.006 0 015-5h270a5.006 5.006 0 015 5v66.976a5.006 5.006 0 01-5 5zm-270-74.976a3.003 3.003 0 00-3 3v66.976a3.003 3.003 0 003 3h270a3.003 3.003 0 003-3v-66.976a3.003 3.003 0 00-3-3z"
                  fill="#3f3d56"
                ></path>
                <circle cx="284" cy="324.896" r="21" fill="#6a7aff"></circle>
                <path
                  d="M332.5 310.896a3.5 3.5 0 000 7h89a3.5 3.5 0 000-7zm0 21a3.5 3.5 0 000 7h165a3.5 3.5 0 000-7zm331.75 14.502c-11.726 35.177-59.695-2.132-59.695-2.132l12.791-133.247c19.188-14.924 39.442-2.132 39.442-2.132z"
                  fill="#e6e6e6"
                ></path>
                <path
                  fill="#ffb8b8"
                  d="M661.731 464.458l16.345.172-4.083 47.115-12.26.001-.002-47.288z"
                ></path>
                <path
                  d="M658.605 507.742h24.144a15.404 15.404 0 0115.387 15.387v.5h-39.53z"
                  fill="#2f2e41"
                ></path>
                <path
                  fill="#ffb8b8"
                  d="M617.421 464.458l-18.094-.001 5.832 47.288 12.26.001.002-47.288z"
                ></path>
                <path
                  d="M581.015 523.629v-.5a15.387 15.387 0 0115.387-15.387l24.144.001v15.888zm79.613-20.045L639.215 378.76l-19.84 123.214-20.1 1.117-5.36-165.086.403-.09c3.324-.745 81.537-17.924 94.359 6.652l.065.124-10.701 159.453z"
                  fill="#2f2e41"
                ></path>
                <circle
                  cx="637.934"
                  cy="170.843"
                  r="24.561"
                  fill="#ffb8b8"
                ></circle>
                <path
                  d="M658.568 356.925c-2.88-.798-4.954-4.104-6.53-10.406-.271-1.086-25.771-109.711-4.206-129.391l4.97-13.808 6.803 4.535c2.407.022 27.02.645 29.124 16.423 2.06 15.443 7.666 118.913 2.03 125.349a1.219 1.219 0 01-.926.469c-5.71 0-7.444-6.336-7.852-8.356-1.357.562-5.402 2.629-12.048 9.275-4.117 4.118-7.345 6.09-10.012 6.09a5.037 5.037 0 01-1.353-.18z"
                  fill="#2f2e41"
                ></path>
                <path
                  d="M605.267 351.015c-6.648-6.648-10.693-8.714-12.049-9.275-.407 2.02-2.14 8.356-7.851 8.356a1.219 1.219 0 01-.927-.47c-5.635-6.435-.029-109.905 2.03-125.348 2.104-15.778 26.718-16.4 29.125-16.423l6.802-4.535 4.971 13.808c21.564 19.678-3.935 128.305-4.207 129.391-1.575 6.302-3.65 9.608-6.529 10.406a5.037 5.037 0 01-1.353.18c-2.667 0-5.895-1.973-10.012-6.09zm52.944-166.143a25.204 25.204 0 00-12.207-45.54c-2.261-.226-4.696-.192-6.571-1.477-1.665-1.14-2.562-3.119-4.093-4.435a8.929 8.929 0 00-6.926-1.746 25.062 25.062 0 00-6.963 2.287c-5.446 2.429-11.235 5.417-13.713 10.84-2.147 4.698-1.2 10.491 1.84 14.668a20.41 20.41 0 0013.016 7.685 32.535 32.535 0 0015.285-1.376c3.241-1.02 6.441-2.41 9.838-2.524a13.37 13.37 0 0110.145 22.564"
                  fill="#2f2e41"
                ></path>
                <path
                  d="M524.341 330.981a10.8 10.8 0 0010.548-11.048l14.323-24.166-11.066-10.146-15.088 23.81a10.801 10.801 0 001.283 21.55zm166.173 26.475a10.8 10.8 0 003.15-14.947l-.549-28.086-14.75-2.798-.29 28.186a10.801 10.801 0 0012.439 17.645z"
                  fill="#ffb8b8"
                ></path>
                <path
                  d="M528.699 292.124l-.167-.266.165-.266c21.484-34.498 66.58-77.593 67.032-78.024l.143-.136 5.57-.057 6.02 15c-1.874 3.606-52.395 74.11-59.066 78.786a4.603 4.603 0 01-3.685.694 9.699 9.699 0 01-3.124-1.33c-6.157-3.814-12.573-13.902-12.888-14.401zm146.859 39.366a4.57 4.57 0 01-2.707-2.484c-3.217-7.505 10.569-102.302 11.157-106.334l.112-.763 4.66 2.954.046.2c.137.606 13.712 60.998 10.033 101.127l-.027.287-.261.12c-.56.26-11.868 5.454-19.404 5.454a10.192 10.192 0 01-3.61-.56z"
                  fill="#2f2e41"
                ></path>
                <path
                  d="M768.411 524.375h-266a1 1 0 010-2h266a1 1 0 010 2z"
                  fill="#3f3d56"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechList;

export default function Docbar() {
    return(
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 p-2 rounded-2xl bg-white/10 dark:bg-gray-900/20 backdrop-blur-md border border-white/20 dark:border-gray-800/20 shadow-lg">
                <a className="relative" href="#services">
                    <div className="relative group cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg border border-white/20 dark:border-gray-700/50 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110">
                            <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 496 512"
                            className="w-7 h-7 text-blue-500"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path d="M131.5 217.5L55.1 100.1c47.6-59.2 119-91.8 192-92.1 42.3-.3 85.5 10.5 124.8 33.2 43.4 25.2 76.4 61.4 97.4 103L264 133.4c-58.1-3.4-113.4 29.3-132.5 84.1zm32.9 38.5c0 46.2 37.4 83.6 83.6 83.6s83.6-37.4 83.6-83.6-37.4-83.6-83.6-83.6-83.6 37.3-83.6 83.6zm314.9-89.2L339.6 174c37.9 44.3 38.5 108.2 6.6 157.2L234.1 503.6c46.5 2.5 94.4-7.7 137.8-32.9 107.4-62 150.9-192 107.4-303.9zM133.7 303.6L40.4 120.1C14.9 159.1 0 205.9 0 256c0 124 90.8 226.7 209.5 244.9l63.7-124.8c-57.6 10.8-113.2-20.8-139.5-72.5z"></path>
                            </svg>
                        </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="px-2 py-1 text-xs text-white bg-gray-900 rounded-md whitespace-nowrap">
                                Services
                            </div>
                        </div>
                    </div>
                </a>

                <a className="relative" href="#resume">
                    <div className="relative group cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg border border-white/20 dark:border-gray-700/50 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-7 h-7 text-blue-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M464 128H272l-64-64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V176c0-26.51-21.49-48-48-48z"></path></svg>
                        </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="px-2 py-1 text-xs text-white bg-gray-900 rounded-md whitespace-nowrap">
                                Resume
                            </div>
                        </div>
                    </div>
                </a>

                <a className="relative" href="#skills">
                    <div className="relative group cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg border border-white/20 dark:border-gray-700/50 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" className="w-7 h-7 text-green-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>     </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="px-2 py-1 text-xs text-white bg-gray-900 rounded-md whitespace-nowrap">
                                Skills
                            </div>
                        </div>
                    </div>
                </a>

                <a className="relative" href="#contact">
                    <div className="relative group cursor-pointer">
                        <div className="w-12 h-12 flex items-center justify-center bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-xl shadow-lg border border-white/20 dark:border-gray-700/50 transition-all duration-300 transform group-hover:-translate-y-2 group-hover:scale-110">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="w-7 h-7 text-purple-500" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>    </div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="px-2 py-1 text-xs text-white bg-gray-900 rounded-md whitespace-nowrap">
                                Articles
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default function Header() {
    return (
        <header className="fixed top-12 md:top-4 left-0 right-0 z-50 max-w-2xl mx-auto">
            <div className="relative">
                <div className="mx-4 h-12 flex items-center justify-between rounded-full bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg shadow-black/5 px-6">
                    <nav>
                        <ul className="flex gap-4 md:gap-6">
                            <li>
                                <button className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    <a href="/">Home</a>
                                </button>
                            </li>
                            <li>
                                <button className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    <a href="#services">Services</a>
                                </button>
                            </li>
                            <li>
                                <button className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    <a href="#resume">Resume</a>
                                </button>
                            </li>
                            <li>
                                <button className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                                    <a href="#contact">Contact</a>
                                </button>
                            </li>
                        </ul>
                    </nav>
                    <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-700/30 mx-2 absolute left-1/2 z-10"></div>
                    <button className="relative w-8 h-8 rounded-full overflow-hidden" aria-label="Switch to light theme" tabIndex={0}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="yellow"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 text-gray-800 dark:text-gray-200"
                            >
                            <path
                                d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
                            />
                            </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
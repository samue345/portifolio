export default function Contact() {
    return (
        <section id="contact" className="max-w-full overflow-hidden min-h-screen py-24 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="relative inline-block">
                        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                            Let's talk
                        </h2>
                        <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">Choose your preferred way to connect</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-12">
                        <div className="space-y-8">
                            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Info</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-5 w-5 md:h-6 md:w-6 text-blue-500 dark:text-blue-400">
                                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Email</p>
                                            <a href="mailto:felipebagesteiro@gmail.com" className="text-gray-900 text-sm md:text-base dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left">samuef339@gmail.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-5 w-5 md:h-6 md:w-6 text-blue-500 dark:text-blue-400">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                            </svg>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                                            <a href="tel:+5511954694681" className="text-gray-900 text-sm md:text-base dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left">+55 11 95469-4681</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-5 w-5 md:h-6 md:w-6 text-blue-500 dark:text-blue-400">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                                <circle cx="12" cy="10" r="3"></circle>
                                            </svg>
                                        </div>
                                    <div className="text-left">
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Location</p>
                                        <p className="text-gray-900 dark:text-white text-left text-sm md:text-base">São Paulo - SP, Brazil</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
                            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl">
                                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">To find more about me</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                            <a href="www.linkedin.com/in/samuel-souza-p-dev" target="_blank" rel="noreferrer">
                                                <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="Linkedin" />
                                            </a>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Linkedin</p>
                                            <a href="www.linkedin.com/in/samuel-souza-p-dev" target="_blank" rel="noreferrer" className="text-gray-900 text-sm md:text-base dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left">Samuel Souza</a>
                                        </div>
                                        <div className="p-2 md:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                            <a href="https://github.com/Strke12i" target="_blank" rel="noreferrer">
                                                <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="Github" />
                                            </a>
                                        </div>
                                        <div className="text-left">
                                            <p className="text-sm text-gray-600 dark:text-gray-400">Github</p>
                                            <a href="https://github.com/samue345" target="_blank" rel="noreferrer" className="text-gray-900 text-sm md:text-base dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-left">Samuel Souza</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
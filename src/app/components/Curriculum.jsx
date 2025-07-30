export default function Curriculum(){
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900" id="resume">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Curriculum</h2>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Education & Work Experience</p>
                </div>
                <div className="relative">
                    <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3">
                                <div className="w-full h-full rounded-full bg-blue-400 dark:bg-blue-500 shadow-lg shadow-blue-500/50 dark:shadow-blue-500/30"></div>
                                <div className="absolute inset-0 rounded-full bg-blue-400 dark:bg-blue-500 blur-sm"></div>
                            </div>
                        </div>
                            <div className="flex-grow order-1 md:order-1 md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right">
                                <div className="relative bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md group">
                                    <div className="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-purple-50/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-lg"></div>
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,150,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(100,150,255,0.05),transparent_50%)]"></div>
                                        <div className="absolute inset-0">
                                            <div className="absolute inset-0 rounded-lg"></div>
                                        </div>
                                    </div>

                                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100%" height="100%" rx="8" ry="8" fill="none" stroke="url(#shinyGradient)" strokeWidth="2" opacity="0.8020000000000209" pathLength="1" strokeDashoffset="0px" strokeDasharray="0.8020000000000209px 1px"></rect><defs><linearGradient id="shinyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4F46E5" stopOpacity="0"></stop><stop offset="50%" stopColor="#4F46E5" stopOpacity="1"></stop><stop offset="100%" stopColor="#4F46E5" stopOpacity="0"></stop></linearGradient></defs></svg>
                                    <div className="relative z-10">
                                        <h3 className="text-lg md:text-xl font-semibold dark:text-white mb-1">Data Engineer</h3>
                                        <a href="https://www.ibm.com" className="inline-flex items-center gap-1 text-blue-500 dark:text-blue-400 mb-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors group" target="_blank" rel="noopener noreferrer">IBM
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                        </a>
                                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3">2025/02 - Present</p>
                                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3">Developed data pipelines for multiple applications to generate reports and train AI models efficiently.</p>
                                        <div className="flex flex-wrap gap-2 md:justify-end">
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Python
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Spark
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                SQL
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                +4 more
                                            </span>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className="order-0 md:order-2 md:w-8 md:mx-auto flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-4 w-4 text-white"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                            </div>
                        
                        <div className="flex-grow order-1 md:order-3 md:w-1/2 pl-12 md:pl-8"></div>
                    </div>

                    <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
                        <div className="flex-grow order-1 md:order-1 md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right"></div>
                        <div className="order-0 md:order-2 md:w-8 md:mx-auto flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-4 w-4 text-white"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                        </div>
                            <div className="flex-grow order-1 md:order-3 md:w-1/2 pl-12 md:pl-8">
                                <div className="relative bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md group">
                                    <div className="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-purple-50/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-lg"></div>
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,150,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(100,150,255,0.05),transparent_50%)]"></div>
                                        <div className="absolute inset-0">
                                            <div className="absolute inset-0 rounded-lg"></div>
                                        </div>
                                    </div>

                                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100%" height="100%" rx="8" ry="8" fill="none" stroke="url(#shinyGradient)" strokeWidth="2" opacity="0.8020000000000209" pathLength="1" strokeDashoffset="0px" strokeDasharray="0.8020000000000209px 1px"></rect><defs><linearGradient id="shinyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4F46E5" stopOpacity="0"></stop><stop offset="50%" stopColor="#4F46E5" stopOpacity="1"></stop><stop offset="100%" stopColor="#4F46E5" stopOpacity="0"></stop></linearGradient></defs></svg>
                                    <div className="relative z-10">
                                        <h3 className="text-lg md:text-xl font-semibold dark:text-white mb-1">Data Scientist Intern</h3>
                                        <a href="https://investidordeverdade.com" className="inline-flex items-center gap-1 text-blue-500 dark:text-blue-400 mb-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors group" target="_blank" rel="noopener noreferrer">Investidor de Verdade
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                        </a>
                                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3">2024/08 - 2025/02</p>
                                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3">Applied advanced analytical techniques such as machine learning models and regression analysis to identify anomalies, predict trends in multivariate time series data, and gain deeper insights into market dynamics.</p>
                                        <div className="flex flex-wrap gap-2 md:justify-end">
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Excel
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Pandas
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Power BI
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Selenium
                                            </span>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                    </div>

                    <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 transform md:-translate-x-1/2 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-blue-200 to-purple-200 dark:from-blue-700 dark:to-purple-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
                            <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3">
                                <div className="w-full h-full rounded-full bg-blue-400 dark:bg-blue-500 shadow-lg shadow-blue-500/50 dark:shadow-blue-500/30"></div>
                                <div className="absolute inset-0 rounded-full bg-blue-400 dark:bg-blue-500 blur-sm"></div>
                            </div>
                        </div>
                            <div className="flex-grow order-1 md:order-1 md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right">
                                <div className="relative bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md group">
                                    <div className="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-purple-50/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-lg"></div>
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,150,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(100,150,255,0.05),transparent_50%)]"></div>
                                        <div className="absolute inset-0">
                                            <div className="absolute inset-0 rounded-lg"></div>
                                        </div>
                                    </div>

                                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100%" height="100%" rx="8" ry="8" fill="none" stroke="url(#shinyGradient)" strokeWidth="2" opacity="0.8020000000000209" pathLength="1" strokeDashoffset="0px" strokeDasharray="0.8020000000000209px 1px"></rect><defs><linearGradient id="shinyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4F46E5" stopOpacity="0"></stop><stop offset="50%" stopColor="#4F46E5" stopOpacity="1"></stop><stop offset="100%" stopColor="#4F46E5" stopOpacity="0"></stop></linearGradient></defs></svg>
                                    <div className="relative z-10">
                                        <h3 className="text-lg md:text-xl font-semibold dark:text-white mb-1">RPA Internet</h3>
                                        <a href="https://www.meerkatcoding.com" className="inline-flex items-center gap-1 text-blue-500 dark:text-blue-400 mb-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors group" target="_blank" rel="noopener noreferrer">Meerkat Coding
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                        </a>
                                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3">2024/04 - 2024/09</p>
                                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3">Worked as an automation developer, integrating a wide range of systems seamlessly.</p>
                                        <div className="flex flex-wrap gap-2 md:justify-end">
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                n8n
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Automation
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Python
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Hubspot
                                            </span>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div className="order-0 md:order-2 md:w-8 md:mx-auto flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-blue-500 border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-4 w-4 text-white"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                                </div>
                            </div>
                        
                        <div className="flex-grow order-1 md:order-3 md:w-1/2 pl-12 md:pl-8"></div>
                    </div>

                    <div className="mb-8 flex flex-col md:flex-row items-start md:items-center">
                        <div className="flex-grow order-1 md:order-1 md:w-1/2 pl-12 md:pl-0 md:pr-8 md:text-right"></div>
                        <div className="order-0 md:order-2 md:w-8 md:mx-auto flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-green-500 border-4 border-white dark:border-gray-900 z-10 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap h-4 w-4 text-white"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>   </div>
                        </div>
                            <div className="flex-grow order-1 md:order-3 md:w-1/2 pl-12 md:pl-8">
                                <div className="relative bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md group">
                                    <div className="absolute inset-0 rounded-lg transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/10 to-purple-50/10 dark:from-blue-500/5 dark:to-purple-500/5 rounded-lg"></div>
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,150,255,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(100,150,255,0.05),transparent_50%)]"></div>
                                        <div className="absolute inset-0">
                                            <div className="absolute inset-0 rounded-lg"></div>
                                        </div>
                                    </div>

                                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100%" height="100%" rx="8" ry="8" fill="none" stroke="url(#shinyGradient)" strokeWidth="2" opacity="0.8020000000000209" pathLength="1" strokeDashoffset="0px" strokeDasharray="0.8020000000000209px 1px"></rect><defs><linearGradient id="shinyGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#4F46E5" stopOpacity="0"></stop><stop offset="50%" stopColor="#4F46E5" stopOpacity="1"></stop><stop offset="100%" stopColor="#4F46E5" stopOpacity="0"></stop></linearGradient></defs></svg>
                                    <div className="relative z-10">
                                        <h3 className="text-lg md:text-xl font-semibold dark:text-white mb-1">Bachelor in Information Systems</h3>
                                        <a href="https://www.ufsm.br" className="inline-flex items-center gap-1 text-blue-500 dark:text-blue-400 mb-2 hover:text-blue-600 dark:hover:text-blue-300 transition-colors group" target="_blank" rel="noopener noreferrer">Universidade Federal de Santa Maria
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link w-4 h-4"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg>
                                        </a>
                                        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3">2021 - 2025</p>
                                        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-3">Operating Systems, Software Engineer, Cybersecurity, Algorithms, AI training/modeling, Parallel Computation, Databases</p>
                                        <div className="flex flex-wrap gap-2 md:justify-end">
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                C/C++
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Java
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Databases
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                Web Development
                                            </span>
                                            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                                                + 11 more
                                            </span>
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
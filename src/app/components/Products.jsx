export default function Products() {

    return (
        <section id="services" className="relative py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100 dark:from-gray-900 dark:via-blue-950 dark:to-blue-900 transition-colors duration-300"></div>

                <div className="absolute inset-0">
                {  /* Criar 30 divs com valores a aleatórios para left, top and opacity*/
                        Array.from({ length: 100 }, (_, i) => (
                            <div key={i} className="absolute w-1 h-1 bg-white rounded-full" style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                opacity: Math.random()
                            }}></div>
                        ))
                    }
                </div>

                <div className="absolute top-20 right-40 origin-center">
                    <div className="rounded-full transition-all duration-500 w-16 h-16 bg-gray-200" style={
                        {
                            boxShadow: 'rgba(255, 255, 255, 0.3) 0px 0px 60px, rgba(255, 255, 255, 0.2) 0px 0px 100px, rgba(255, 255, 255, 0.1) 0px 0px 140px'
                        }
                    }></div>
                </div>
            </div>
            <div className="relative max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Work</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">All Products that you need to make your business grow</p>
                </div>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                        <div className="relative flex items-start gap-6 p-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-4 flex items-center justify-center text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code w-8 h-8"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Chatbots
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400"> Creating chatbots to help your business</p>
                                <div className="h-0.5 mt-4 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative flex items-start gap-6 p-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-4 flex items-center justify-center text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wand2 w-8 h-8"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path><path d="m14 7 3 3"></path><path d="M5 6v4"></path><path d="M19 14v4"></path><path d="M10 2v2"></path><path d="M7 8H3"></path><path d="M21 16h-4"></path><path d="M11 3H9"></path></svg>                
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Automations
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400"> Making the greatest automations to improve your work</p>
                                <div className="h-0.5 mt-4 bg-gradient-to-r from-green-500 to-green-600"></div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative flex items-start gap-6 p-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500 to-yellow-600 p-4 flex items-center justify-center text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette w-8 h-8"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>               
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Data Analysis
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400"> 
                                    Analyzing data to help your business to achieve the best results
                                </p>
                                <div className="h-0.5 mt-4 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative flex items-start gap-6 p-6">
                            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 p-4 flex items-center justify-center text-white shadow-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-laptop w-8 h-8"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg>                            
                            </div>

                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    Web Scraping
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400"> 
                                    Scraping data from the web to help you find the best information for your business
                                </p>
                                <div className="h-0.5 mt-4 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}
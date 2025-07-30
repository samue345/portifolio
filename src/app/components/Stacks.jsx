import Stack from './stack';

export default function Stacks() {
    return(
        <section className="py-20 px-4 relative overflow-hidden" id="skills">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/30 dark:to-purple-950/30"></div>
            <div className="max-w-6xl mx-auto relative z-10" >
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4" >Tools &amp; AI Stack</h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Leveraging cutting-edge tools and AI to supercharge development workflow</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" >
                        <div className="flex items-center gap-3 mb-4 text-gray-900 dark:text-white">
                                <span className="text-xl">
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"></path>
                                    </svg>
                                </span>
                                <h3 className="text-lg font-semibold">Databases</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Stack name="Supabase" text="Open source Firebase alternative" url="https://supabase.com/favicon/apple-icon-57x57.png"/>
                            <Stack url="https://firebase.google.com/favicon.ico" name="Firebase" text="Realtime database and storage"/>
                            <Stack name="Postgres" text="The world's most advanced open source database" url="https://www.postgresql.org/media/img/about/press/elephant.png"/>
                            <Stack name="MongoDB" text="The most popular database for modern apps" url="https://www.mongodb.com/assets/images/global/favicon.ico"/>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" >
                        <div className="flex items-center gap-3 mb-4 text-gray-900 dark:text-white">
                            <span className="text-xl">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"></path>
                                </svg>
                            </span>
                            <h3 className="text-lg font-semibold">Automation</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Stack url="https://n8n.io/favicon.ico" name="n8n" text="Workflow automation tool"/>
                            <Stack url="./images/zapier.png" name="Zapier" text="Connect your apps and automate workflows"/>
                            <Stack name="make" text="Make websites accessible for AI agents" url="//cdn.make.com/img/make/favicon-32x32.png"/>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" >
                        <div className="flex items-center gap-3 mb-4 text-gray-900 dark:text-white">
                            <span className="text-xl">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path>
                                </svg>
                            </span>
                            <h3 className="text-lg font-semibold">AI Tools</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Stack url="https://claude.ai/favicon.ico" name="Claude" text="Anthropic's AI assistant"/>
                            <Stack url="https://www.openai.com/favicon.ico" name="Chat GPT" text="OpenAI's conversational AI"/>
                            <Stack name="DeepSeek" text="Deep learning search engine" url="./images/deepseek.png"/>
                            <Stack name="Mistral" text="AI-powered code completion" url="./images/mistral.png/" />
                        </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" >
                        <div className="flex items-center gap-3 mb-4 text-gray-900 dark:text-white">
                            <span className="text-xl">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"></path>
                                </svg>
                            </span>
                            <h3 className="text-lg font-semibold">Infrastructure</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="group relative" >
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer">
                                    <img loading="lazy" src="https://aws.amazon.com/favicon.ico" width="30" height="30" alt="AWS" className="text-3xl text-yellow-500"/><span className="text-sm font-medium text-gray-900 dark:text-white">AWS</span>
                                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-600 text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 pointer-events-none z-10" >
                                        Cloud computing services
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-600"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative" >
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer">
                                    <img loading="lazy" src="https://vercel.com/favicon.ico" width="30" height="30" alt="Vercel" className="text-3xl text-yellow-500"/><span className="text-sm font-medium text-gray-900 dark:text-white">Vercel</span>
                                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-600 text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 pointer-events-none z-10" >
                                        Serverless platform
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-600"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative" >
                                <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer">
                                    <img loading="lazy" src="https://chat.groq.com/favicon.ico" width="30" height="30" alt="Groq" className="text-3xl text-yellow-500"/><span className="text-sm font-medium text-gray-900 dark:text-white">Groq</span>
                                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-600 text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 pointer-events-none z-10" >
                                        Ultra-fast AI inference
                                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-600"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" >
                        <div className="flex items-center gap-3 mb-4 text-gray-900 dark:text-white">
                            <span className="text-xl">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M336.2 64H47.8C21.4 64 0 85.4 0 111.8v288.4C0 426.6 21.4 448 47.8 448h288.4c26.4 0 47.8-21.4 47.8-47.8V111.8c0-26.4-21.4-47.8-47.8-47.8zm189.4 37.7L416 177.3v157.4l109.6 75.5c21.2 14.6 50.4-.3 50.4-25.8V127.5c0-25.4-29.1-40.4-50.4-25.8z"></path>
                                </svg>
                            </span>
                            <h3 className="text-lg font-semibold">Languages</h3>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <Stack url="https://www.rust-lang.org/static/images/favicon-32x32.png" name="Rust" text="A language empowering everyone to build reliable and efficient software"/>
                            <Stack url="https://www.typescriptlang.org/favicon.ico" name="TypeScript" text="Typed superset of JavaScript"/>
                            <Stack url="https://www.python.org/favicon.ico" name="Python" text="The fastest growing programming language"/>
                            <Stack url="https://www.golang.org/favicon.ico" name="Go" text="Open source programming language that makes it easy to build simple, reliable, and efficient software"/>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    );
}
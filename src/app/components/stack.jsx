export default function Stack(props){
    return(
        <div className="group relative" >
                        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center gap-2 cursor-pointer">
                            <img loading="lazy" src={props.url} width="30" height="30" alt="Browser Use" className="text-3xl text-blue-500"/><span className="text-sm font-medium text-gray-900 dark:text-white">{props.name}</span>
                                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-600 text-white px-3 py-1 rounded text-xs whitespace-nowrap opacity-0 pointer-events-none z-10" >
                                        {props.text}
                                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-600"></div>
                        </div>
                </div>
        </div>
    );
}
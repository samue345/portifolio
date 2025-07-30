"use client";
import React from 'react';

export default function InformationData() {

    // Obter informações de data e hora, bateria e sinal de Wi-Fi
    const [dateTime, setDateTime] = React.useState(new Date());
    const [batteryLevel, setBatteryLevel] = React.useState(null);
    const [wifiSignal, setWifiSignal] = React.useState(null);

    React.useEffect(() => {
        const updateDateTime = () => setDateTime(new Date());
        const intervalId = setInterval(updateDateTime, 1000);

        navigator.getBattery().then(battery => {
            setBatteryLevel(Math.floor(battery.level * 100));
            battery.addEventListener('levelchange', () => {
                setBatteryLevel(Math.floor(battery.level * 100));
            });
        });

        // Simulação de sinal de Wi-Fi
        setWifiSignal('Strong');

        return () => clearInterval(intervalId);
    }, []);


    return(
        <div className="fixed top-2 md:top-16 xl:top-2 left-0 md:left-auto mx-4 right-0 z-40 flex md:flex items-center gap-4 px-4 py-1 m-2 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white/10 dark:bg-gray-900/10 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-full">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-wifi w-4 h-4">
                        <path d="M12 20h.01"></path>
                        <path d="M2 8.82a15 15 0 0 1 20 0"></path>
                        <path d="M5 12.859a10 10 0 0 1 14 0"></path>
                        <path d="M8.5 16.429a5 5 0 0 1 7 0"></path>
                    </svg>
                </div>
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-battery w-4 h-4">
                        <rect width="16" height="10" x="2" y="7" rx="2" ry="2"></rect>
                        <line x1="22" x2="22" y1="11" y2="13"></line>
                    </svg>
                        <span>{batteryLevel}%</span>
                    </div>
            </div>
            <div className="h-3 w-[1px] bg-gray-300 dark:bg-gray-700"></div>
            <div id="initiate-calendly-button" className="flex items-center gap-2 cursor-pointer" tabIndex="0">
                <span>{dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</span>
            </div>
        
        </div>
    );

}
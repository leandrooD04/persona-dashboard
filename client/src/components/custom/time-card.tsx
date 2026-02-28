import {useEffect, useState} from "react";

function TimeCard() {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer: NodeJS.Timeout = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const hours: string = time.getHours().toString().padStart(2, "0");
    const minutes: string = time.getMinutes().toString().padStart(2, "0");

    return (
        <div
            className={`flex flex-col items-end gap-2 p-4 rounded-lg ${hours === '00' ? 'bg-tartarus-800' : 'bg-primary-800'}`}>
            <div className="flex justify-between items-end w-full">
                <span className="font-bold text-2xl">Time</span>
                <span className="text-lg text-neutral-400">AfterSchool</span>
            </div>
            <span
                className={`work-sans font-bold text-5xl ${hours === '00' ? 'text-tartarus-500' : 'text-primary-500'}`}>{hours}:{minutes}</span>
            <div className="w-full h-4 rounded-full time-bar-animated"></div>
        </div>
    );
}

export default TimeCard;

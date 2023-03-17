import { BarsContent } from "./bars-content";
import { useEffect, useState } from "react";
import { currentOption } from "@/lib/options";

export function Bars() : JSX.Element
{
    const [num_bars, setNumberOfBars] = useState(20);

    function handleSliderChange(event: React.ChangeEvent<HTMLInputElement>) {
        const value = parseInt(event.target.value);
        setNumberOfBars(value);
    }

    return (
        <>
            <header className="fixed top-0 left-[289px] w-screen h-[60px] mb-40 shadow shadow-md shadow-slate-500
                                flex justify-center items-center"
            >

                <div className="pr-[400px]">
                    <span className="text-white">Number of Bars: </span>

                    <input
                        type="range"
                        min="3"
                        max="238"
                        value={num_bars}
                        onChange={handleSliderChange}
                        className="w-40 h-4 rounded-full bg-gray-400 appearance-none cursor-pointer focus:outline-none focus:shadow-outline-blue mr-[5px]"
                    />

                    <span className="text-white">{num_bars}</span>
                </div>
            </header>

            
            <BarsContent numberOfBars={num_bars}/>
        </>
    );
}
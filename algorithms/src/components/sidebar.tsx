import { setOption } from "@/lib/options";
import { useState } from "react";

export function Sidebar():JSX.Element{

    return (
        <header
        id='sidebar'
        className='flex w-0 shrink-0 transition-opacity duration-200 xs:w-20 md:w-24
                   lg:max-w-none xl:-mr-4 xl:w-full xl:max-w-xs xl:justify-end'
        >

            <div className="fixed bottom-0 z-10 flex w-full flex-col shadow shadow-md shadow-slate-500 
                                py-0 xs:top-0 xs:h-full xs:w-auto bg-gray-800
                                xs:px-2 xs:py-3 xs:pt-2 md:px-4 xl:w-72 h-screen left-0"
            >
                <button
                 className="bg-sky-300 rounded mb-2 focus:bg-blue-500 active:bg-gray-700"
                 onClick={() => {setOption(0)}}
                >
                    Bubble Sort
                </button>

                <button
                 className="bg-sky-300 rounded mb-2 focus:bg-blue-500 active:bg-gray-70"
                 onClick={() => {setOption(1)}}
                >
                    Merge Sort
                </button>

                <button
                 className="bg-sky-300 rounded mb-2 focus:bg-blue-500 active:bg-gray-70"
                 onClick={() => {setOption(2)}}
                >
                    Quick Sort
                </button>

                <button
                 className="bg-sky-300 rounded mb-2 focus:bg-blue-500 active:bg-gray-70"
                 onClick={() => {setOption(3)}}
                >
                    Heap Sort
                </button>
            </div>
        </header>
    );
}
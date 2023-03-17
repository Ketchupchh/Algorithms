import { useState, useEffect } from "react";
import { currentOption } from "@/lib/options";
import { bubbleSort } from "@/algorithms/bubble-sort";
import { mergeSort } from "@/algorithms/merge-sort";
import { quickSort } from "@/algorithms/quick-sort";
import { heapSort } from "@/algorithms/heap-sort";

type BarsProps = {
    numberOfBars: number
}

export type Bar = {
  id: number;
  height: number;
  color: string;
  sorted: boolean;
  active: boolean;
};


export function BarsContent({
    numberOfBars,
} : BarsProps ):JSX.Element {

    const min_height = 5;
    const max_height = 650;

    const generateBars = (numBars: number): Bar[] => {
      return Array.from({ length: numBars }).map((_, index) => ({
        id: index,
        height: Math.floor(Math.random() * (max_height - min_height + 1)) + min_height,
        color: "bg-white",
        sorted: false,
        active: false,
      }));
    };

    const [bars, setBars] = useState<Bar[]>(generateBars(numberOfBars));

    useEffect(() => {
      setBars(generateBars(numberOfBars));
    }, [numberOfBars]);

    const [sortType, setSortType] = useState("");

    const handleSubmit = () => {
        switch(currentOption)
        {
            case 0:
                bubbleSort(bars, setBars);
                setSortType("Bubble Sort");
                break;
            case 1:
                mergeSort(bars, setBars);
                setSortType("Merge Sort");
                break;
            case 2:
                quickSort(bars, setBars);
                setSortType("Quick Sort");
                break;
            case 3:
                heapSort(bars, setBars);
                setSortType("Heap Sort");
                break;
            default:
                bubbleSort(bars, setBars);
                setSortType("Bubble Sort");
                break;
        }
    }

    return(
        <>
            <div className="bg-gray-700 w-[1000px] h-[700px] rounded-xl drop-shadow-lg flex flex-row justify-center">
                
                {bars.map((bar) => (
                    <div
                    key={bar.id}
                    className={`w-10 ${bar.color} mx-0.5`}
                    style={{ height: `${bar.height}px`, color: `bg-black` }}
                    ></div>
                ))}
            </div>
            
            <div className="fixed bottom-0 my-[-5px] w-40 h-100">
                <div className="flex flex-row items-center justify-center w-[1000px]">

                    <button
                        className="bg-sky-300 rounded my-10 w-40 h-10 font-bold mx-1"
                        onClick={handleSubmit}
                    >
                        Sort
                    </button>

                    <button
                        className="bg-sky-300 rounded my-10 w-40 h-10 font-bold mx-1"
                        onClick={() => {setBars(generateBars(numberOfBars))}}
                    >
                        Randomize Bars
                    </button>
                </div>
            </div>

            
        </>
    );
}
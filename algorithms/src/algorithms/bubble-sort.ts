import { Bar } from "@/components/bars/bars-content";


export const bubbleSort = async (bars: Bar[], setBars: React.Dispatch<React.SetStateAction<Bar[]>>) => {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < bars.length - 1; i++) {
      if (bars[i].height > bars[i + 1].height) {
        const temp = bars[i];
        bars[i] = { ...bars[i + 1], color: "bg-red-500", active: true };
        bars[i + 1] = { ...temp, color: "bg-red-500", active: true };
        setBars([...bars]);
        await new Promise((resolve) => setTimeout(resolve, 10)); // wait for 10 milliseconds
        bars[i] = { ...bars[i], color: "bg-white", active: false };
        bars[i + 1] = { ...bars[i + 1], color: "bg-white", active: false };
        bars[i].sorted = false;
        bars[i + 1].sorted = false;
        setBars([...bars]);
        swapped = true;
      } else {
        bars[i].sorted = true;
      }
    }
    bars[bars.length - 1].sorted = true;
    setBars(
      bars.map((bar, index) => ({
        ...bar,
        color: bar.sorted ? "bg-green-500" : "bg-black",
        sorted: true,
      }))
    );
  }
};
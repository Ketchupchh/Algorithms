import { Bar } from "@/components/bars/bars-content";

const partition = async (bars: Bar[], setBars: React.Dispatch<React.SetStateAction<Bar[]>>, low: number, high: number) => {
  const pivot = bars[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (bars[j].height < pivot.height) {
      i++;
      const temp = bars[i];
      bars[i] = { ...bars[j], color: "bg-red-500", active: true };
      bars[j] = { ...temp, color: "bg-red-500", active: true };
      setBars([...bars]);
      await new Promise((resolve) => setTimeout(resolve, 10)); // wait for 10 milliseconds
      bars[i] = { ...bars[i], color: "bg-white", active: false };
      bars[j] = { ...bars[j], color: "bg-white", active: false };
    }
  }
  const temp = bars[i + 1];
  bars[i + 1] = { ...bars[high], color: "bg-red-500", active: true };
  bars[high] = { ...temp, color: "bg-red-500", active: true };
  setBars([...bars]);
  await new Promise((resolve) => setTimeout(resolve, 10)); // wait for 10 milliseconds
  bars[i + 1] = { ...bars[i + 1], color: "bg-white", active: false };
  bars[high] = { ...bars[high], color: "bg-white", active: false };
  return i + 1;
};

const quickSortUtil = async (bars: Bar[], setBars: React.Dispatch<React.SetStateAction<Bar[]>>, low: number, high: number) => {
  if (low < high) {
    const pivotIndex = await partition(bars, setBars, low, high);
    await quickSortUtil(bars, setBars, low, pivotIndex - 1);
    await quickSortUtil(bars, setBars, pivotIndex + 1, high);
  }
};

export const quickSort = async (bars: Bar[], setBars: React.Dispatch<React.SetStateAction<Bar[]>>) => {
  await quickSortUtil(bars, setBars, 0, bars.length - 1);
  setBars(
    bars.map((bar) => ({
      ...bar,
      color: "bg-green-500",
      sorted: true,
    }))
  );
};
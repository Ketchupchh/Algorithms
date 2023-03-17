import { Bar } from "@/components/bars/bars-content";

const heapify = async (bars: Bar[], n: number, i: number, setBars: React.Dispatch<React.SetStateAction<Bar[]>>) => {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && bars[left].height > bars[largest].height) {
    largest = left;
  }

  if (right < n && bars[right].height > bars[largest].height) {
    largest = right;
  }

  if (largest !== i) {
    const temp = bars[i];
    bars[i] = { ...bars[largest], color: "bg-red-500", active: true };
    bars[largest] = { ...temp, color: "bg-red-500", active: true };
    setBars([...bars]);
    await new Promise((resolve) => setTimeout(resolve, 10)); // wait for 10 milliseconds
    bars[i] = { ...bars[i], color: "bg-white", active: false };
    bars[largest] = { ...bars[largest], color: "bg-white", active: false };
    setBars([...bars]);
    await heapify(bars, n, largest, setBars);
  }
};

export const heapSort = async (bars: Bar[], setBars: React.Dispatch<React.SetStateAction<Bar[]>>) => {
  const n = bars.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(bars, n, i, setBars);
  }

  for (let i = n - 1; i >= 0; i--) {
    const temp = bars[0];
    bars[0] = { ...bars[i], color: "bg-red-500", active: true };
    bars[i] = { ...temp, color: "bg-red-500", active: true };
    setBars([...bars]);
    await new Promise((resolve) => setTimeout(resolve, 10)); // wait for 10 milliseconds
    bars[0] = { ...bars[0], color: "bg-white", active: false };
    bars[i] = { ...bars[i], color: "bg-white", active: false };
    setBars([...bars]);
    await heapify(bars, i, 0, setBars);
  }

  setBars(
    bars.map((bar) => ({
      ...bar,
      color: "bg-green-500",
      sorted: true,
    }))
  );

}
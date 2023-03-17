import { Bar } from "@/components/bars/bars-content";


export const mergeSort = async (bars: Bar[], setBars: React.Dispatch<React.SetStateAction<Bar[]>>) => {
  const merge = async (left: Bar[], right: Bar[]): Promise<Bar[]> => {
    let result: Bar[] = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i].height < right[j].height) {
        result.push({ ...left[i], color: "bg-red-500", active: true });
        i++;
      } else {
        result.push({ ...right[j], color: "bg-red-500", active: true });
        j++;
      }
      setBars([...result, ...left.slice(i), ...right.slice(j)]);
      await new Promise((resolve) => setTimeout(resolve, 10)); // wait for 10 milliseconds
      result[result.length - 1].color = "bg-white";
      result[result.length - 1].active = false;
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
  };

  const divide = async (arr: Bar[]): Promise<Bar[]> => {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = await divide(arr.slice(0, mid));
    const right = await divide(arr.slice(mid));
    return await merge(left, right);
  };

  const sorted = await divide(bars);
  setBars(
    sorted.map((bar) => ({
      ...bar,
      color: "bg-green-500",
      sorted: true,
    }))
  );
};
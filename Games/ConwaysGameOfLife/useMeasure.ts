import { useCallback, useState } from "react";
export type Layout = {
  width: number;
  height: number;
};
type Event = {
  nativeEvent: {
    layout: Layout;
  };
};

export const useMeasure = () => {
  const [dim, setDim] = useState<Layout | null>(null);
  let relevant = false;
  const onLayout = useCallback((e: unknown) => {
    const event = e as Event;
    console.log(event.nativeEvent.layout);

    if (relevant) setDim(event.nativeEvent.layout);
    relevant = !relevant
    // you'll get something like this here:
    // {"target":1105,"layout":{"y":0,"width":256,"x":32,"height":54.5}}
  }, []);
  return { dim, onLayout };
};

"use client";

import { decrement, increment } from "@/redux/slice/counterSlice";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div className="gird place-items-center pt-10">
      <button
        onClick={() => handleIncrement()}
        className="text-3xl font-bold p-4 border rounded-xl"
      >
        Increment
      </button>
      <p className="text-xl py-10">{count}</p>
      <button
        onClick={() => handleDecrement()}
        className="text-3xl font-bold p-4 border rounded-xl"
      >
        Decrement
      </button>
    </div>
  );
}

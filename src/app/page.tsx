import Image from "next/image";

export default function Home() {
  return (
    <div className="gird place-items-center pt-10">
      <button className="text-3xl font-bold p-4 border rounded-xl">
        Increment
      </button>
      <p className="text-xl py-10">0</p>
      <button className="text-3xl font-bold p-4 border rounded-xl">
        Decrement
      </button>
    </div>
  );
}

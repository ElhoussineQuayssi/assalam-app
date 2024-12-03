import { screenData } from "@/Constants";

export function Nmessage() {
  return (
    <div className="w-full h-fit bg-gray-200 transition-all duration-700 ease-out flex flex-col justify-center items-center gap-2 p-4 rounded-lg  shadow-xl shadow-gray-950 font-semibold">
      <p className="p-6 text-lg font-sans">{screenData[0]}</p>
    </div>
  )
}
export function Nvision() {
  return (
    <div className="w-full h-fit bg-gray-200 transition-all duration-700 ease-out flex flex-col justify-center items-center gap-2 p-4 rounded-m rounded-lg  font-semibold shadow-xl shadow-gray-950">
      <p className="p-6 text-lg font-sans">{screenData[1]}</p>
    </div>
  )
}
export function Nbut() {
  return (
    <div className="w-full h-fit bg-gray-200 transition-all duration-700 ease-out flex flex-col justify-center items-center gap-2 p-4 rounded-m rounded-lg shadow-gray-950  shadow-xl">
      <p className="p-6 text-lg font-sans font-semibold">{screenData[2]}</p>
    </div>
  )
}
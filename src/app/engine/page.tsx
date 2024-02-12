import Image from 'next/image'

export default function EnginePage() {
  return (
    <div className="flex flex-col items-center justify-between bg-gray-100">
      <div className="relative w-full h-[700px] bg-gradient-to-l from-neutral-400 via-neutral-300 to-neutral-400 bg-cover ">
        <h1 className="transform text-4xl text-white font-BrutalRegular">
          Engine
        </h1>
      </div>
    </div>
  )
}

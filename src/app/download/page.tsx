import Image from 'next/image'

export default function Download() {
  return (
    <main className="flex flex-col items-center justify-between bg-gray-100">
      <div className="relative w-full h-[700px] bg-gradient-to-l from-neutral-400 via-neutral-300 to-neutral-400 bg-cover ">
        {/* <Image
          src="/voxelexample.png"
          alt="Voxel game example"
          layout='responsive'
          width={16}
          height={9}
        /> */}
        <h1 className="p-20 pt-80 transform text-4xl text-white font-BrutalRegular">
          Download page.
        </h1>
      </div>
    </main>
  )
}

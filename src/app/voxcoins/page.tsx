import Image from 'next/image'
import React from 'react';

type VoxCoinCardProps = {
  amount: number
  price: string
  imageUrl: string
}

function VoxCoinCard({ amount, price, imageUrl }: VoxCoinCardProps) {
  return (
    <div className="bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-700 text-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-110">
      <Image
        src={imageUrl}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: '100%',
          height: 260,
          objectFit: 'cover',
          objectPosition: 'top'  // This ensures the top of the image is aligned with the top of the container
        }}
        alt="Image description"
      />
      <div className='p-4 flex gap-5 justify-between'>
        <div>
          <h2 className="text-xl font-bold">{amount} VoxCoins</h2>
          <p className="text-lg">{price}</p>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy Now
        </button>
      </div>
    </div>
  )
}

export default function VoxCoins() {
  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen flex items-center justify-center px-56">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-44 w-full">
        <VoxCoinCard amount={50} price="5.99 €" imageUrl="/coin.jpg" />
        <VoxCoinCard amount={100} price="10.99 €" imageUrl="/coin.jpg" />
        <VoxCoinCard amount={200} price="19.99 €" imageUrl="/coin.jpg" />
      </div>
    </div>
  )
}
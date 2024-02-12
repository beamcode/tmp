"use client"

import Image from 'next/image'
import React, { useState } from 'react';

type Asset = {
  name: string;
  description: string;
  price: number;
  image: string;
};

interface SearchAndSortBarProps {
  onSort: (sortOrder: string) => void;
  onSearch: (query: string) => void;
}

function SearchAndSortBar({ onSort, onSearch }: SearchAndSortBarProps) {
  return (
    <div className="flex w-full justify-between p-4 bg-white dark:bg-gray-800 rounded">
      <input
        type="text"
        placeholder="Search assets..."
        onChange={e => onSearch(e.target.value)}
        className="input input-bordered"
      />

      <select onChange={e => onSort(e.target.value)} className="select select-bordered">
        <option value="">Sort By</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
        <option value="free">Free Items</option>
      </select>
    </div>
  );
}

interface CategoryFilterProps {
  onSelectCategory: (category: string) => void;
}

function CategoryFilter({ onSelectCategory }: CategoryFilterProps) {
  const categories = ['Buildings', 'Characters', 'Nature', 'Vehicles'];

  return (
    <aside className="px-4 text-white">
      <h3 className="font-bold text-lg mb-3 ">Categories</h3>
      <ul>
        {categories.map(category => (
          <li key={category} onClick={() => onSelectCategory(category)} className="cursor-pointer">
            {category}
          </li>
        ))}
      </ul>
    </aside>
  );
}

function VoxelAssetCard({ asset }: { asset: Asset }) {
  return (
    <div className="max-w-sm overflow-hidden bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

      <Image
        src={asset.image}
        alt={asset.name}
        width={0} // Set a specific width
        height={0} // Set a specific height
        layout="responsive" // This will maintain the aspect ratio
        className="" // Apply rounded corners
      />

      <div className="p-4">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{asset.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{asset.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-md font-bold text-gray-900 dark:text-white">{asset.price} Voxcoins</span>
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AssetStore() {
  const [assets, setAssets] = useState<Asset[]>([
    {
      name: 'Castle Voxel',
      description: 'A detailed castle model in voxel art style.',
      price: 550,
      image: '/castle-image.jpg'
    },
    {
      name: 'Castle Voxel',
      description: 'A detailed castle model in voxel art style.',
      price: 0,
      image: '/castle-image.jpg'
    },
    {
      name: 'Castle Voxel',
      description: 'A detailed castle model in voxel art style.',
      price: 100,
      image: '/castle-image.jpg'
    },
    {
      name: 'Castle Voxel',
      description: 'A detailed castle model in voxel art style.',
      price: 50,
      image: '/castle-image.jpg'
    },
    {
      name: 'Castle Voxel',
      description: 'A detailed castle model in voxel art style.',
      price: 250,
      image: '/castle-image.jpg'
    },
    {
      name: 'Castle Voxel',
      description: 'A detailed castle model in voxel art style.',
      price: 5000,
      image: '/castle-image.jpg'
    }
  ]);

  function handleSort(sortOrder: string) {
    // Implement sorting logic here
  }

  function handleSearch(query: string) {
    // Implement search logic here
  }

  function handleCategorySelect(category: string) {
    // Implement category filter logic here
  }

  return (
    <div className="bg-[#26282B] flex px-44 py-20">

      <div className="flex flex-col w-full items-center gap-5">

        <h1 className="text-4xl font-bold text-left text-gray-900 dark:text-white mb-10">3D/2D Voxel Assets Marketplace</h1>

        <div className='flex gap-10'>
          <div className='space-y-3'>
            <SearchAndSortBar onSort={handleSort} onSearch={handleSearch} />
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {assets.map(asset => (
                <VoxelAssetCard key={asset.name} asset={asset} />
              ))}
            </div>
          </div>

          <CategoryFilter onSelectCategory={handleCategorySelect} />
        </div>

      </div>


    </div>
  );
}

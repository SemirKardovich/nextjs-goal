import React from 'react'
import { Tooltip } from 'flowbite-react';
import { updateRestaurant } from '@api/updateRestaurant';
import { Restaurant } from '@utils/types';
import { useRouter } from 'next/navigation';
export default function Favourite({ restaurant }: { restaurant: Restaurant }) {
    const router = useRouter()
    const handleClick = async () => {
        const updatedData = await updateRestaurant({
            ...restaurant,
            favourite: !restaurant.favourite
        });
        if (updatedData) router.refresh();
    };

    return (
        <Tooltip content={restaurant.favourite ? 'Remove from favourites' : 'Add to favourites'} style="dark" placement="bottom" animation="duration-150" className='tracking-normal p-2 bg-slate-700'>
            <svg onClick={handleClick} className="w-6 h-6 hover:cursor-pointer text-slate-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill={restaurant.favourite ? 'red' : 'none'} viewBox="0 0 21 19">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z" />
            </svg>
        </Tooltip>
    )
}
import { deleteRestaurant } from '@api/deleteRestaurant';
import { Tooltip } from 'flowbite-react'
import { useRouter } from 'next/navigation';
import React from 'react'

function DeleteRestaurant({ restaurantId }: { restaurantId: number }) {
    const router = useRouter()
    const handleDeleteClick = async () => {
        const deleted = await deleteRestaurant(restaurantId);

        if (deleted) router.refresh();
    };
    return (
        <Tooltip content="Delete restaurant" style="dark" placement="bottom" animation="duration-150" className='tracking-normal p-2 bg-slate-700'>
            <svg onClick={handleDeleteClick} className="w-6 h-6 hover:cursor-pointer text-slate-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z" />
            </svg>
        </Tooltip>
    )
}

export default DeleteRestaurant
import { Tooltip } from 'flowbite-react'
import { useRouter } from 'next/navigation'


function ViewRestaurant({ restaurantId }: { restaurantId: number }) {
    const router = useRouter()

    return (
        <Tooltip content="View restaurant" style="dark" placement="bottom" animation="duration-150" className='tracking-normal p-2 bg-slate-700'>
            <svg onClick={() => router.push(`/restaurants/${restaurantId}`,)} className="w-6 h-6 hover:cursor-pointer text-slate-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                </g>
            </svg>
        </Tooltip>
    )
}

export default ViewRestaurant
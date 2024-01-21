'use client'
import { getRestaurant } from '@api/getRestaurant'
import { Restaurant } from '@utils/types'
import { Card } from 'flowbite-react'
import Map, { Marker, MapMouseEvent } from 'react-map-gl'
import Logo from '@public/images/logo.svg'
import Image from 'next/image'
import Rating from '@components/Rating'
async function RestaurantDetails({ params }: { params: { id: number } }) {
    const restaurant: Restaurant | null = await getRestaurant(params.id)


    return (

        <Card className="w-[70%]">
            {restaurant && <Map style={{ width: '100%', height: '30vh', overflow: 'hidden' }} initialViewState={{
                longitude: restaurant.longitude,
                latitude: restaurant.latitude,
                zoom: 13
            }}

                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
                attributionControl={false}
            >
                <Marker longitude={restaurant.longitude} latitude={restaurant.latitude} anchor="bottom">

                    <div className='bg-slate-800 p-1 rounded-md hover:scale-125' style={{ width: 'fit-content' }}>
                        <Image src={Logo} className="" alt='fine dine logo' width={25} height={20} />
                    </div>

                </Marker>
            </Map>}
            <div className='flex flex-col gap-3'>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900">
                    {restaurant?.name}
                </h5>
                <p className="font-normal text-gray-700">
                    {restaurant?.description}
                </p>
                <Rating rated={restaurant?.rating ?? 1} />
            </div>
        </Card>

    )
}

export default RestaurantDetails
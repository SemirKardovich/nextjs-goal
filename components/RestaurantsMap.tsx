'use client'
import { Restaurant } from '@utils/types'
import Image from 'next/image'
import Map, { Marker, MapMouseEvent } from 'react-map-gl'
import Logo from '@public/images/logo.svg'
import { Tooltip } from 'flowbite-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
export default function RestaurantsMap({ restaurants }: { restaurants: Restaurant[] }) {
    const router = useRouter()
    const [coordinates, setCoordinates] = useState<{ longitude: number, latitude: number }>({
        longitude: 21.4304,
        latitude: 41.9979
    })
    const handleMouseMove = (event: MapMouseEvent) => {
        const { lat, lng } = event.lngLat
        setCoordinates({
            longitude: lng,
            latitude: lat
        })
    };

    return (
        <Map style={{ position: 'relative', width: '70vw', height: '50vh', overflow: 'hidden' }} initialViewState={{
            longitude: 21.4304,
            latitude: 41.9979,
            zoom: 13
        }}
            onMouseMove={handleMouseMove}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
            attributionControl={false}
        >
            {restaurants.map(restaurant =>
                <Marker key={restaurant.id} longitude={restaurant.longitude} latitude={restaurant.latitude} anchor="bottom" onClick={() => router.push(`/restaurants/${restaurant.id}`,)}>
                    <Tooltip content={restaurant.name} style="dark" placement="top" animation="duration-150" className='tracking-normal p-1 bg-slate-700'>
                        <div className='bg-slate-800 p-1 rounded-md hover:scale-125 cursor-pointer' style={{ width: 'fit-content' }}>
                            <Image src={Logo} className="" alt='fine dine logo' width={25} height={20} />
                        </div>
                    </Tooltip>
                </Marker>

            )}
            <div className='flex flex-col p-1 absolute bottom-0 left-0'>
                <p>Latitude: {coordinates.latitude}</p>
                <p>Longitude: {coordinates.longitude}</p>
            </div>
        </Map>
    )
}


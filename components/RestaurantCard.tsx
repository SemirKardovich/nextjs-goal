"use client"
import { Restaurant } from '@utils/types';
import { Button, Card } from 'flowbite-react';
import Rating from './Rating';
import Favourite from './Favourite';
import { usePathname, useRouter } from 'next/navigation';
import EditRestaurant from './EditRestaurant';
import ViewRestaurant from './ViewRestaurant';
import DeleteRestaurant from './DeleteRestaurant';
import AddNewRestaurant from './AddNewRestaurant';

export default function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
    const pathname = usePathname()
    const showDescription = pathname !== '/'
    return (
        <Card
            className="w-[250px]"
        >
            <h5 className="text-xl font-semibold tracking-normal text-slate-600 text-center ">
                {restaurant.name}
            </h5>
            {showDescription && <p className="text-lg tracking-normal text-slate-600 text-sm ">
                {restaurant.description}
            </p>}
            <Rating rated={restaurant.rating} />

            <div className="card_cta">
                <Favourite restaurant={restaurant} />
                {showDescription && (
                    <>
                        <AddNewRestaurant restaurant={restaurant} />
                        <DeleteRestaurant restaurantId={restaurant.id} />
                    </>)}
                <ViewRestaurant restaurantId={restaurant.id} />
            </div>
        </Card>
    );
}

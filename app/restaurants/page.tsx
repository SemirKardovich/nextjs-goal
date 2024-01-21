import { getRestaurants } from '@api/getRestaurants'
import RestaurantsMap from '@components/RestaurantsMap'
import RestaurantCard from '@components/RestaurantCard'
import { Restaurant } from '@utils/types'

async function Restaurants() {
    const restaurants: Restaurant[] = (await getRestaurants()).sort((a, b) => {
        if (a.favourite !== b.favourite) {
            return a.favourite ? -1 : 1;
        }
        return b.rating - a.rating;
    })

    return (
        <div className='flex flex-col items-center my-3 gap-5'>
            <RestaurantsMap restaurants={restaurants} />
            <div className='restaurants_container'>
                {restaurants?.map(r => <RestaurantCard key={r.id} restaurant={r} />)}
            </div>
        </div>

    )
}

export default Restaurants
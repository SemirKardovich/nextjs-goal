import { getRestaurants } from "@api/getRestaurants";
import RestaurantCard from "@components/RestaurantCard";

import { Restaurant } from "@utils/types";

async function Home() {
    const favRestaurants: Restaurant[] = (await getRestaurants()).filter(r => r.favourite)

    return (
        <section className="hero">
            <h1>Discover & Share from home
                <br />
                <span >Your favourite restaurants</span>
            </h1>
            {!!favRestaurants.length && <div className="flex gap-3 mt-[5rem] w-full flex-wrap justify-center bg-slate-600 py-5 px-2 ">
                <h3 className="text-3xl w-full mb-6 font-bold text-orange-600">Places you picked</h3>
                {favRestaurants.map(r => <RestaurantCard key={r.id} restaurant={r} />)}
            </div>}
        </section>
    )
}



export default Home
import { Restaurant } from '@utils/types'

export const updateRestaurant = async (
  restaurant: Restaurant
): Promise<boolean> => {
  try {
    const response = await fetch(
      `http://localhost:8000/restaurants/${restaurant.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurant),
      }
    )

    if (!response.ok) {
      console.error(`Failed to update restaurant with name ${restaurant.name}`)
      return false
    }
    return true
  } catch (error) {
    console.error('Error updating restaurant:', error)
    return false
  }
}

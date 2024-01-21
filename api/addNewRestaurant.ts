import { Restaurant } from '@utils/types'

export const addRestaurant = async (
  newRestaurant: Restaurant
): Promise<boolean> => {
  try {
    const response = await fetch('http://localhost:8000/restaurants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRestaurant),
    })

    if (!response.ok) {
      console.error('Failed to add a new restaurant')
      return false
    }

    return true
  } catch (error) {
    console.error('Error adding a new restaurant:', error)
    return false
  }
}

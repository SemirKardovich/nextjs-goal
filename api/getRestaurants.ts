import { Restaurant } from '@utils/types'

export const getRestaurants = async (): Promise<Restaurant[]> => {
  try {
    const response = await fetch('http://localhost:8000/restaurants', {
      cache: 'no-store',
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching restaurants:', error)
    return []
  }
}

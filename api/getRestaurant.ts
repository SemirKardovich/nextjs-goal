import { Restaurant } from '@utils/types'

export const getRestaurant = async (id: number): Promise<Restaurant | null> => {
  try {
    const response = await fetch(`http://localhost:8000/restaurants/${id}`, {
      cache: 'no-store',
    })

    if (!response.ok) {
      throw new Error(`Failed to fetch restaurant with ID ${id}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching restaurant:', error)
    return null
  }
}

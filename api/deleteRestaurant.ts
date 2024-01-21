export const deleteRestaurant = async (
  restaurantId: number
): Promise<boolean> => {
  try {
    const response = await fetch(
      `http://localhost:8000/restaurants/${restaurantId}`,
      {
        method: 'DELETE',
      }
    )

    if (!response.ok) {
      console.error(`Failed to delete restaurant with ID ${restaurantId}`)
      return false
    }

    return true
  } catch (error) {
    console.error('Error deleting restaurant:', error)
    return false
  }
}

import { Movie } from '@/types'
import { getDatabase, ref, get, child } from 'firebase/database'

export const getMoviesFromDatabase = async (id?: string): Promise<Movie | Movie[]> => {
  const db = getDatabase()
  const docRef = ref(db)
  const path = id ? `movies/${id}` : 'movies'

  const snapshot = await get(child(docRef, path))
  const movieObj = (await snapshot.val()) as Movie | Record<string, Movie>

  return id ? (movieObj as Movie) : (Object.values(movieObj) as Movie[])
}

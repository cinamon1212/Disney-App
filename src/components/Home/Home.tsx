import { Movie, MovieState } from '@/types'
import { getDatabase, ref, onValue } from 'firebase/database'
import { useEffect } from 'react'
import { ImgSlider } from '../ImgSlider'
import { Movies } from '../Movies'
import { Viewers } from '../Viewers'
import { Container } from './styles'
import { useAppDispatch, useAppSelector } from '@/app'
import { selectUser, setMovies } from '@/redux'

export const Home = () => {
  const dispatch = useAppDispatch()
  const { name } = useAppSelector(selectUser)

  useEffect(() => {
    const movies: MovieState = {
      recommend: [],
      new: [],
      original: [],
      trending: [],
    }

    const db = getDatabase()
    const starCountRef = ref(db)

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val() as { movies: Movie[] }

      data.movies.forEach((movie) => {
        switch (movie.type) {
          case 'new':
            movies.new = [...movies.new, movie]
            break
          case 'original':
            movies.original = [...movies.original, movie]
            break
          case 'recommend':
            movies.recommend = [...movies.recommend, movie]
            break
          case 'trending':
            movies.trending = [...movies.trending, movie]
            break
        }
      })

      dispatch(setMovies(movies))
    })
  }, [name, dispatch])

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

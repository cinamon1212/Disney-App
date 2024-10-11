import { MovieState } from '@/types'
import { useLayoutEffect } from 'react'
import { ImgSlider } from '../ImgSlider'
import { Movies } from '../Movies'
import { Viewers } from '../Viewers'
import { Container } from './styles'
import { useAppDispatch, useAppSelector } from '@/app'
import { selectUser, setMovies } from '@/redux'
import { getMoviesFromDatabase } from '@/utils'

export const Home = () => {
  const dispatch = useAppDispatch()
  const { name } = useAppSelector(selectUser)

  useLayoutEffect(() => {
    const movies: MovieState = {
      recommend: [],
      new: [],
      original: [],
      trending: [],
    }

    if (name)
      getMoviesFromDatabase()
        .then((dataMovies) => {
          if (Array.isArray(dataMovies)) {
            console.log(dataMovies)
            dataMovies.forEach((movie) => {
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
          }
        })
        .catch((err) => alert(err.message))
  }, [name, dispatch])

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  )
}

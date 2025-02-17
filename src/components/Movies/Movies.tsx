import { useAppSelector } from '@/app'
import {
  MovieItem,
  MovieContent,
  MovieImg,
  MovieLink,
  MovieList,
  MoviesSection,
  MovieListHeading,
} from './styles'
import { Movie, MovieCategory } from '@/types'
import { selectMovie } from '@/redux'
import { Loader } from '../Loader'

export const Movies = () => {
  const movies = useAppSelector(selectMovie)
  const isLoading = !movies.recommend.length

  return (
    <MoviesSection>
      {isLoading ? (
        <Loader />
      ) : (
        Object.values(movies).map((moviesType: Movie[], index) => {
          const currentKey = Object.keys(movies)[index] as keyof typeof MovieCategory
          const category = MovieCategory[currentKey]

          return (
            <MovieContent key={index}>
              <MovieListHeading>{category}</MovieListHeading>
              <MovieList>
                {moviesType.map(({ cardImg, title, id }) => (
                  <MovieItem key={title}>
                    <MovieLink to={`/detail/` + id}>
                      <MovieImg src={cardImg} alt={title} />
                    </MovieLink>
                  </MovieItem>
                ))}
              </MovieList>
            </MovieContent>
          )
        })
      )}
    </MoviesSection>
  )
}

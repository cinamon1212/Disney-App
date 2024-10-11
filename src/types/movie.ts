export type MovieType = 'new' | 'recommend' | 'trending' | 'original'

export type Movie = {
  backgroundImg: string
  cardImg: string
  description: string
  subTitle: string
  title: string
  titleImg: string
  type: MovieType
  id: string
}

export enum MovieCategory {
  recommend = 'Recommended for You',
  new = 'New to Disney+',
  trending = 'Trending',
  original = 'Originals',
}

export type MovieState = Record<MovieType, Movie[]>

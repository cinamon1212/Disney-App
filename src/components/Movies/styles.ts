import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MoviesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 32px;
  min-height: calc(100vh - 250px);
  position: relative;
`

export const MovieList = styled.ul`
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`
export const MovieItem = styled.li`
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 3px solid rgba(249, 249, 249, 0.1);

  &:hover {
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px, rgb(0 0 0/72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`

export const MovieLink = styled(Link)``

export const MovieContent = styled.div`
  padding-bottom: 26px;
  display: flex;
  flex-direction: column;
  gap: 22px;
`

export const MovieImg = styled.img.attrs<{ src: string; alt: string }>(({ src, alt }) => ({
  src,
  alt,
}))`
  inset: 0px;
  display: block;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  position: absolute;
  transition: opacity 500ms ease-in-out 0s;
  width: 100%;
  z-index: 1;
`
export const MovieListHeading = styled.h4``

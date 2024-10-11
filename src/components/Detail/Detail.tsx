import { useParams } from 'react-router-dom'
import {
  AddList,
  AddListItem,
  Background,
  BgImg,
  ContentMeta,
  Controls,
  Description,
  DetailMain,
  GroupButton,
  GroupImg,
  ImgTitle,
  ImgTitleWrapper,
  Player,
  PlayerImg,
  SubTitle,
  Trailer,
  TrailerImg,
} from './styles'
import { useLayoutEffect, useState } from 'react'
import { getMoviesFromDatabase } from '@/utils'
import { Movie } from '@/types'

export const Detail = () => {
  const { id } = useParams()
  const [detailData, setDetailData] = useState<Movie | null>(null)

  console.log(id, detailData)

  useLayoutEffect(() => {
    if (id)
      getMoviesFromDatabase(id)
        .then((movie) => {
          if (!Array.isArray(movie)) setDetailData(movie)
        })
        .catch((err) => alert(err.message))
  }, [id])

  if (detailData) {
    const { backgroundImg, description, subTitle, title, titleImg } = detailData

    return (
      <DetailMain>
        <Background>
          <BgImg alt={title} src={backgroundImg} />
        </Background>

        <ImgTitleWrapper>
          <ImgTitle alt={title} src={titleImg} />
        </ImgTitleWrapper>

        <ContentMeta>
          <Controls>
            <Player>
              <PlayerImg />
              Play
            </Player>
            <Trailer>
              <TrailerImg />
              Trailer
            </Trailer>
            <AddList>
              <AddListItem />
              <AddListItem />
            </AddList>
            <GroupButton>
              <GroupImg />
            </GroupButton>
          </Controls>
          <SubTitle>{subTitle}</SubTitle>
          <Description>{description}</Description>
        </ContentMeta>
      </DetailMain>
    )
  }
}

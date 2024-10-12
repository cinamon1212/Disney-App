import styled from 'styled-components'

export const DetailMain = styled.main`
  position: relative;
  min-height: calc(100vh - 100px);
  overflow-x: auto;
  top: 72px;
  padding: 80px calc(3.5vw + 5px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const Background = styled.div`
  left: 0;
  position: fixed;
  opacity: 0.8;
  z-index: -1;
  top: 0;
`

export const BgImg = styled.img.attrs<{ src: string; alt: string }>(({ src, alt }) => ({
  src,
  alt,
}))`
  width: 100vw;
  height: 100vh;
  object-fit: cover;

  @media (max-width: 768px) {
    width: initial;
  }
`
export const ImgTitleWrapper = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
`

export const ImgTitle = styled.img.attrs<{ src: string; alt: string }>(({ src, alt }) => ({
  src,
  alt,
}))`
  max-width: 600px;
  min-width: 200px;
  width: 35vw;

  @media (max-width: 768px) {
    width: 60%;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`

export const ContentMeta = styled.div`
  max-width: 874px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`
export const Controls = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  min-height: 56px;
  gap: 12px;
`

export const Player = styled.button`
  font-size: 15px;
  padding: 0 24px;
  height: 56px;
  border-radius: 4px;
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  background-color: rgb(249, 249, 249);
  border: none;
  color: black;

  &:hover {
    background-color: rgb(198, 198, 198);
  }

  @media (max-width: 768px) {
    height: 45px;
    padding: 0 22px;
    font-size: 12px;
  }
`

export const PlayerImg = styled.img.attrs(() => ({
  src: '/images/play-icons/play-icon-black.png',
  alt: 'play',
}))`
  width: 32px;

  @media (max-width: 768px) {
    width: 25px;
  }
`
export const Trailer = styled(Player)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`

export const TrailerImg = styled(PlayerImg).attrs(() => ({
  src: '/images/play-icons/play-icon-white.png',
  alt: 'trailer',
}))``

export const AddList = styled.button`
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;

  &:hover {
    background-color: rgb(198, 198, 198, 0.1);
  }
`
export const AddListItem = styled.span`
  background-color: rgb(249, 249, 249);
  display: inline-block;

  &:first-child {
    height: 2px;
    transform: translate(1px, 0px) rotate(0deg);
    width: 16px;
  }

  &:nth-child(2) {
    height: 16px;
    transform: translateX(-8px) rotate(0deg);
    width: 2px;
  }
`
export const GroupButton = styled(AddList)``

export const GroupImg = styled.img.attrs(() => ({
  src: '/images/group-icon.png',
  alt: 'group',
}))``

export const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  line-height: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`

export const Description = styled.p`
  line-height: 1.4em;
  font-size: 20px;
  color: rgb(249, 249, 249);
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 400px;
  }
`
export const ControlsItem = styled.div`
  display: flex;
  gap: 12px;
`

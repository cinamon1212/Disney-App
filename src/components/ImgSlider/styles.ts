import Slider from 'react-slick'
import styled from 'styled-components'

export const Carousel = styled(Slider)`
  margin-top: 20px;

  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 150, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`
export const SliderItem = styled.li`
  border-radius: 4px;
  cursor: pointer;
  position: relative;
`
export const SliderItemLink = styled.a`
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 /73%) 0 16px 10px -10px;
  cursor: pointer;
  position: relative;
  display: block;
  padding: 4px;
  border: 4px solid transparent;
  padding: 0;

  &:hover {
    border-color: rgba(249, 249, 249, 0.8);
    transition: border-color 0.3s ease-in-out;
  }
`
export const SliderItemImg = styled.img.attrs<{ src: string; alt: string }>(({ src, alt }) => ({
  src,
  alt,
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

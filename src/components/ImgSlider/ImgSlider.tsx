import { sliderList, sliderSettings } from '@/constants'
import { Carousel, SliderItem, SliderItemImg, SliderItemLink } from './styles'

export const ImgSlider = () => {
  return (
    <Carousel {...sliderSettings}>
      {sliderList.map(({ src }) => (
        <SliderItem>
          <SliderItemLink>
            <SliderItemImg src={src} alt='slider-img' />
          </SliderItemLink>
        </SliderItem>
      ))}
    </Carousel>
  )
}

import { ImgSlider } from '../ImgSlider'
import { Viewers } from '../Viewers'
import { Container } from './styles'

export const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  )
}

import { viewerList } from '@/constants'
import { Video, ViewerImg, ViewerItem, ViewerSection } from './styles'

export const Viewers = () => {
  return (
    <ViewerSection>
      {viewerList.map(({ imgSrc, videoSrc }) => (
        <ViewerItem>
          <ViewerImg src={imgSrc} alt='viewer' />
          <Video autoPlay loop playsInline>
            <source src={videoSrc} type='video/mp4' />
          </Video>
        </ViewerItem>
      ))}
    </ViewerSection>
  )
}

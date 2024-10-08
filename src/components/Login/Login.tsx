import { loginDescription } from '@/constants'
import { CollaborationLogos, Container, Content, Description, Logos, SignUp } from './styles'

export const Login = () => {
  return (
    <Container>
      <Content>
        <Logos />
        <SignUp>Get all there</SignUp>
        <Description>{loginDescription}</Description>
        <CollaborationLogos />
      </Content>
    </Container>
  )
}

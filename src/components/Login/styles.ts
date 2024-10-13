import styled from 'styled-components'

export const Container = styled.main`
  overflow: hidden;
  display: flex;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-image: url(/images/login-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  width: 100%;
`
export const Content = styled.section`
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
  max-width: 800px;
  gap: 22px;
`

export const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  width: 100%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding: 16.5px 0;
  border-radius: 4px;
  border: 1px solid transparent;
  text-transform: uppercase;

  &:hover {
    background-color: #0483ee;
  }
`

const ctaImgLogosPath = '/images/cta-logos/'

export const Logos = styled.img.attrs({
  src: `${ctaImgLogosPath}cta-logo-one.svg`,
  alt: 'cta-logo',
})`
  min-height: 1px;
  display: block;
  width: 100%;
`
export const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  line-height: 1.5em;
  margin: 0;
  letter-spacing: 1.5px;
`

export const CollaborationLogos = styled.img.attrs({
  src: `${ctaImgLogosPath}cta-logo-two.png`,
})`
  width: 100%;
`

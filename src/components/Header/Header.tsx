import { navLinks } from '@/constants'
import { HeaderContainer, LinkIcon, Logo, Nav, NavList, NavLink, LinkText, Login } from './styles'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Nav>
        <NavList>
          {navLinks.map(({ src, text, to }) => (
            <NavLink to={to}>
              <LinkIcon src={src} alt={text} />
              <LinkText>{text}</LinkText>
            </NavLink>
          ))}
        </NavList>
      </Nav>
      <Login>Login</Login>
    </HeaderContainer>
  )
}

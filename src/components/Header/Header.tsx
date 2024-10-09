import { navLinks } from '@/constants'
import {
  HeaderContainer,
  LinkIcon,
  Logo,
  Nav,
  NavList,
  NavLink,
  LinkText,
  Login,
  AvatarImg,
} from './styles'
import { auth, provider } from '@/firebase'
import { useAppDispatch, useAppSelector } from '@/app'
import { selectUser, setUserLoginDetails } from '@/features'
import { User } from '@firebase/auth-types'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const dispatch = useAppDispatch()
  const { name, photo } = useAppSelector(selectUser)

  const navigate = useNavigate()

  const setUser = (user: User | null) => {
    if (user) {
      const { displayName, email, photoURL } = user
      dispatch(setUserLoginDetails({ name: displayName, email, photo: photoURL }))
    }
  }

  const handleAuth = async () => {
    try {
      const result = await auth.signInWithPopup(provider)
      setUser(result.user)
    } catch (error) {
      let errorMessage = 'Error during authentication'
      if (error instanceof Error) errorMessage = error.message
      alert(errorMessage)
    }
  }

  useLayoutEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
        navigate('/home')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name])

  return (
    <HeaderContainer>
      <Logo />
      {!photo || !name ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <Nav>
            <NavList>
              {navLinks.map(({ src, text, to }) => (
                <NavLink to={to} key={to}>
                  <LinkIcon src={src} alt={text} />
                  <LinkText>{text}</LinkText>
                </NavLink>
              ))}
            </NavList>
          </Nav>
          <AvatarImg src={photo} alt={name} />
        </>
      )}
    </HeaderContainer>
  )
}

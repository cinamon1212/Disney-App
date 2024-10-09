import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  width: 100%;
  z-index: 1;
  box-shadow: 0 0px 10px 2px rgba(0, 0, 0, 0.5);
`

export const Logo = styled.img.attrs({ src: 'images/logo.svg', alt: 'logo' })`
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
`
export const Nav = styled.nav`
  height: 100%;
  margin-right: auto;
  margin-left: 42px;
`
export const NavList = styled.ul`
  align-items: center;
  display: flex;
  height: 100%;
  gap: 42px;
`

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 4px;

  &:hover {
    span:before {
      transform: scaleX(1);
      visibility: visible;
      opacity: 1;
    }
  }
`

export const LinkText = styled.span`
  color: rgb(249, 249, 249);
  font-size: 13px;
  letter-spacing: 1.42px;
  line-height: 1.08em;
  text-transform: uppercase;
  position: relative;
  margin-top: 2px;

  &:before {
    background-color: rgb(249, 249, 249);
    border-radius: 4px;
    bottom: -6px;
    content: '';
    height: 2px;
    opacity: 0;
    left: 0;
    position: absolute;
    right: 0;
    transform-origin: left center;
    transform: scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    visibility: hidden;
  }
`

export const LinkIcon = styled.img.attrs<{ src: string; alt: string }>(({ src, alt }) => ({
  src,
  alt,
}))`
  height: 20px;
  min-width: 20px;
  width: 20px;
`

export const Login = styled.button`
  background-color: rgb(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  color: #f9f9f9;
  transition: all 400ms ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
  }
`
export const AvatarImg = styled.img.attrs<{ src: string; alt: string }>(({ src, alt }) => ({
  src,
  alt,
}))`
  height: 100%;
  border-radius: 50%;
`
export const Dropdown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 115px;
  opacity: 0;
  cursor: pointer;
  margin-top: 10px;
  background-color: rgb(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  color: #f9f9f9;
  transition: all 400ms ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
  }
`
export const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;

  &:hover {
    ${Dropdown} {
      opacity: 1;
    }
  }
`

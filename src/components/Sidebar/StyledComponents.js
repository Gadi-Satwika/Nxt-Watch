import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

export const SidebarContainer = styled.div`
  width: 20vw;
  height: 150vh;
  padding: 10px;
  background-color: ${props =>
    props.theme === 'light' ? '#f9f9f9' : '#181818'};
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Helpful if you add footer later */

  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  width: 100%;
`

export const ListItemName = styled.span`
  margin-left: 20px;
  color: ${props => (props.theme === 'light' ? '#475569' : '#f9f9f9')};

  @media screen and (min-width: 768px) and (max-width: 1000px) {
    font-size: 16px;
    margin-left: 18px;
  }
`

/* We style the NavLink directly to handle the "active" state */
export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  /* The .active class is automatically added by NavLink */
  &.active li {
    background-color: ${props =>
      props.theme === 'light' ? '#ffffff' : '#475569'};
    color: #ff0000; /* Highlight color */
    font-weight: bold;
  }

  &.active svg {
    color: #ff0000;
  }
`

export const EachListContainer = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 10px 20px;
  margin-bottom: 10px;
  color: ${props => (props.theme === 'light' ? '#475569' : '#475569')};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${props =>
      props.theme === 'light' ? '#424242' : '#e2e8f0'};
  }
`

export const Footer = styled.div`
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const Logo = styled.img`
  width: 3vw;
  height: 7vh;
`

export const Contact = styled.h1`
  font-size: 28px;
  color: ${props => (props.theme === 'light' ? '#475569' : '#f9f9f9')};
`

export const Profiles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 12vw;
`

export const Text = styled.p`
  color: ${props => (props.theme === 'light' ? '#475569' : '#f9f9f9')};
  width: 15vw;
`

import styled from 'styled-components'

export const BlueButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  padding: 10px 20px;
  border-width: 0;
  border-radius: 5px;
  font-weight: 400;
  font-size: 18px;
  cursor: pointer;
`
export const Logo = styled.img`
  height: 40px;
  align-self: center;
  margin-bottom: 20px;
`
export const Label = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : '#94a3b8')};
  font-weight: 500;
  margin-top: 10px;
  margin-bottom: 5px;
`

export const CboxLabel = styled.label`
  color: ${props => (props.isDark ? '#94a3b8' : '#000000')};
  margin-left: 5px;
`

export const LoginBox = styled.form`
  border-radius: 10px;
  display: flex;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#ffffff')};
  flex-direction: column;
  justify-content: center;
  padding: 40px 20px;
  width: 420px;
  min-height: 420px;
  box-shadow: ${props =>
    !props.isDark && 'rgba(149, 157, 165, 0.2) 0px 8px 24px'};
  @media (max-width: 576px) {
    width: 90%;
  }
`

export const ErrorMsg = styled.p`
  color: #ff0000;
  margin-top: 0;
`
// Header

export const LogoutButton = styled.button`
  color: ${props => (props.isDark ? '#f4f4f4' : '#4f46e5')};
  border: ${props =>
    props.isDark ? '1px solid #f4f4f4' : '1px solid #4f46e5'};
  background: transparent;
  padding: 5px 15px;
  font-size: 14px;
  margin-left: 10px;
  font-weight: bold;
  cursor: pointer;
`
// SideNav

export const NavItemDark = styled.li`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  background-color: ${props => props.isActive && '#383838'};
  color: ${props => (props.isActive ? '#ffffff' : '#616e7c')};
`

export const NavItemLight = styled.li`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  background-color: ${props => props.isActive && '#f1f5f9'};
  color: ${props => (props.isActive ? '#313131' : '#909090')};
`
export const NavItemText = styled.p`
  padding: 0;
  margin: 0;
  margin-left: 20px;
  font-weight: ${props => (props.isActive ? '600' : '500')};
`
export const SideNavContainer = styled.div`
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 20%;
  position: sticky;
  position: -webkit-sticky;
  left: 0;
  top: 0;
  @media (max-width: 767px) {
    display: none;
  }
`
export const SideFooterText = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#1e293b')};
  font-size: 16px;
  font-weight: 500;
`
// Banner
export const Banner = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 250px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const SearchVideosContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  flex-grow: 1;
  padding: 20px;
  @media (max-width: 576px) {
    padding: 0;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${props => (props.isDark ? '#383838' : '#cbd5e1')};
  width: 40%;
  @media (max-width: 576px) {
    width: 90%;
    margin: 5%;
  }
`

export const SearchButton = styled.button`
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  border-width: 0;
  color: ${props => props.isDark && '#606060'};
  cursor: pointer;
  font-size: 16px;
  background-color: ${props => (props.isDark ? '#212121' : '#d7dfe9')};
`
export const VideoTitle = styled.p`
  color: ${props => (props.isDark ? '#f4f4f4' : '#231f20')};
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
`
export const ChannelName = styled.p`
  color: #606060;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  padding-left: 10px;
  margin-top: 3px;
`

export const FailHeading = styled.h1`
  font-size: 24px;
  color: ${props => (props.isDark ? '#ffffff' : '#212121')};
  text-align: center;
  font-weight: 400;
`
export const FailDescription = styled.p`
  font-size: 18px;
  color: ${props => (props.isDark ? '#64748b' : '#475569')};
  text-align: center;
  font-weight: 500;
  margin-top: 0;
`
export const FailButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  padding: 10px 20px;
  border-width: 0;
  border-radius: 5px;
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
`
export const LogoutPopupBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  align-items: center;
  width: 400px;
  height: 185px;
  border-radius: 10px;
  background-color: ${props => (props.isDark ? '#212121' : '#ffffff')};
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  width: 30%;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border: 1px solid ${props => props.borderColor};
`

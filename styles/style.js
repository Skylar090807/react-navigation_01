import styled from 'styled-components/native'

// Common Style
export const Container = styled.View`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
`
export const TextStyle = styled.Text`
  margin: 20px;
  font-weight: bold;
  font-size: 20px;
`

// src/Routes/slideDrawer.jsx
export const SlideDrawerContainer = styled.View`
  flex: 1;
  padding-top: 80;
`

export const SlideImageWrap = styled.View`
  align-items: center;
  /* padding: 50px; */
`

export const PaddingWrap = styled.View`
  padding-left: 10;
  padding-bottom: 30;
`

export const SlideSectionHeading = styled.Text`
  color: #fff;
  font-weight: bold;
  margin: 20px;
  /* padding-vertical: 10;
  padding-horizaontal: 15; */
`
export const SlideNavSection = styled.View`
  background-color: gray;
`

export const SlideNavItem = styled.Text`
  padding: 10px;
  color: #fff;
`

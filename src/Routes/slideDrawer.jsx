// Drawer Customizing
import React from 'react'
import { View, Text, ScrollView, Image, Linking, Alert } from 'react-native'
import {
  SlideDrawerContainer,
  SlideImageWrap,
  PaddingWrap,
  SlideSectionHeading,
  SlideNavSection,
  SlideNavItem,
} from '../../styles/style'
import home from '../assets/images/home_black_512px.png'
import { CommonActions } from '@react-navigation/native'

const SlideDrawer = ({ navigation }) => {
  /*
    왜 arrow를 두 개 사용할까?

      navigateToScreen 함수는 화면 이동을 위해 route라는 인자를 param으로 받아온다. 
      arrow가 두 개면 return 값이 두 개라고 생각하면 된다(중괄호 안에 값을 리턴하는 함수를 또 리턴 값으로 받는다). 

      navigationToScreen 함수에서 구현한 내용은 state를 update 해주는 내용이다. redux와 흡사하다고 생각하면 된다.
      state update return을 한 번만 하게 되면 update 무한 루프에 걸린다. 그래서 navigationToScreen 함수가 시작될 때
      update behavior를 끊어주기 위한 트리거 장치로 arrow를 두 번 쓴 것이다.
  */
  const navigateToScreen = route => () => {
    navigation.dispatch(
      CommonActions.navigate({
        name: route,
        params: {},
      }),
    )
  }
  return (
    <SlideDrawerContainer>
      <ScrollView>
        <View>
          <SlideImageWrap>
            <Image source={home} style={{ width: 20, height: 20 }} />
          </SlideImageWrap>
          <SlideSectionHeading>Section 01</SlideSectionHeading>
          <SlideNavSection>
            <SlideNavItem onPress={navigateToScreen('Home')}>Home</SlideNavItem>
            <SlideNavItem onPress={navigateToScreen('User')}>User</SlideNavItem>
            <SlideNavItem
              onPress={() => Linking.openURL('https://www.google.com')}
            >
              Google
            </SlideNavItem>
            <SlideNavItem onPress={() => Alert.alert('Information')}>
              Info
            </SlideNavItem>
          </SlideNavSection>
        </View>
      </ScrollView>
      <PaddingWrap>
        <Text>Copyright &#169; Skylar 2022</Text>
      </PaddingWrap>
    </SlideDrawerContainer>
  )
}

export default SlideDrawer

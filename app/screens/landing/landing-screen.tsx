import React, { FunctionComponent as Component, useEffect } from "react"
import { useObserver } from "mobx-react-lite"
import { Image, View, StatusBar, Platform } from "react-native"
import { textPresets, viewPresets } from "./landing.presets"
import { Text, Icon } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { RectButton } from 'react-native-gesture-handler'
import { useStores } from "../../models"

const landingImg = require("../../../assets/images/landing.png")
const studyIcon = require("../../../assets/images/icons/study.png")
const giveClassesIcon = require("../../../assets/images/icons/give-classes.png")

export const LandingScreen: Component = () => {
  const { navigate } = useNavigation()
  const { proffy } = useStores()

  useEffect(() => {
    proffy.totalConnections()
    // eslint-disable-next-line
    }, [])

  const goToGiveClasses = () => navigate('giveClasses')
  const goToStudyTabs = () => navigate('studyTabs')

  return useObserver(() => (
    <View style={viewPresets.container}>
      <StatusBar barStyle="light-content" translucent backgroundColor={'transparent'}/>
      <Image source={landingImg} style={viewPresets.banner}/>
      <Text style={textPresets.title} tx="landing.title"/>
      <Text style={textPresets.titleBold} tx="landing.subtitle"/>

      <View style={viewPresets.buttonContainer}>
        <RectButton onPress={goToStudyTabs} style={[viewPresets.button, viewPresets.buttonPrimary]}>
          <Image source={studyIcon}/>
          <Text style={textPresets.button} tx="landing.button.study"/>
        </RectButton>

        <RectButton onPress={goToGiveClasses} style={[viewPresets.button, viewPresets.buttonSecondary]}>
          <Image source={giveClassesIcon}/>
          <Text style={textPresets.button} tx="landing.button.teach"/>
        </RectButton>
      </View>

      <Text style={textPresets.totalConnections}>
        <Text style={textPresets.totalConnections} text={`Total de ${proffy.connection.total} conexoes ja realizadas `}/>
        {Platform.OS === 'ios' && <Icon icon='heart' style={viewPresets.icon}/>}
      </Text>
      {Platform.OS !== 'ios' && <Icon icon='heart' style={viewPresets.icon}/>}
    </View>
  ))
}

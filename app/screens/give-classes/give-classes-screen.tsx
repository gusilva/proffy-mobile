import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { View, ImageBackground } from "react-native"
import { textPresets, viewPresets } from "./give-classes.presets"
import { Text } from "../../components"
import { RectButton } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

const giveClassesBgImage = require('../../../assets/images/give-classes-background.png')

export const GiveClassesScreen: Component = observer(function GiveClassesScreen() {
  const { goBack } = useNavigation()

  return (
    <View style={viewPresets.container} >
      <ImageBackground resizeMode="contain" source={giveClassesBgImage} style={viewPresets.content}>
        <Text style={textPresets.title} tx="give-classes.title"/>
        <Text style={textPresets.description} tx="give-classes.description"/>

      </ImageBackground>

      <RectButton style={viewPresets.okButton} onPress={goBack}>
        <Text style={textPresets.okButton} tx="give-classes.ok-button"/>
      </RectButton>

    </View>
  )
})

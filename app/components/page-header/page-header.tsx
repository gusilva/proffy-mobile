import React, { FunctionComponent as Component } from "react"
import { View, Image } from "react-native"
import { textPresets, viewPresets } from "./page-header.styles"
import { useObserver } from "mobx-react-lite"
import { BorderlessButton } from "react-native-gesture-handler"
import { Icon, Text } from ".."

const logoImg = require("../../../assets/images/logo.png")

export interface PageHeaderProps {
  title: string
  goBack?: () => void
  children?: React.ReactNode
  headerRight?: React.ReactNode
}

export const PageHeader: Component<PageHeaderProps> = props => {
  const { title, goBack, children, headerRight } = props

  return useObserver(() => (
    <View style={viewPresets.container}>
      <View style={viewPresets.topBar}>
        <BorderlessButton onPress={goBack}>
          <Icon icon='back'/>
        </BorderlessButton>
        <Image source={logoImg} resizeMode='contain'/>
      </View>

      <View style={viewPresets.header}>
        <Text tx={title} style={textPresets.title}/>
        {headerRight}
      </View>
      {children}
    </View>
  ))
}

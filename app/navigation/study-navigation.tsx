import React from "react"

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FavoritesScreen, TeacherListScreen } from "../screens"
import { Platform } from "react-native"
import { palette } from "../theme/palette"
import { Icon } from "../components"
import { translate } from "../i18n"

export type StudyParamList = {
  teacherList: undefined
  favorites: undefined
}

const Tabs = createBottomTabNavigator<StudyParamList>()

export function StudyNavigation() {
  return <Tabs.Navigator tabBarOptions={{
    style: {
      elevation: 0,
      shadowOpacity: 0,
      height: Platform.OS === "ios" ? 84 : 64,
    },
    tabStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingBottom: Platform.OS === "ios" ? 20 : 0,
    },
    iconStyle: {
      flex: 0,
      width: 20,
      height: Platform.OS === "ios" ? 24 : 20,
    },
    safeAreaInsets: {
      bottom: 0,
    },
    labelStyle: {
      fontFamily: "Archivo-Bold",
      fontSize: 13,
      marginLeft: 16,
    },
    inactiveBackgroundColor: palette.colorBoxFooter,
    activeBackgroundColor: palette.activeBgColor,
    inactiveTintColor: palette.inactiveTintColor,
    activeTintColor: palette.colorTextTitle,
  }}>
    <Tabs.Screen
      name="teacherList"
      component={TeacherListScreen}
      options={{
        tabBarLabel: "Proffys",
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ color, size, focused }) =>
          <Icon
            icon='teach'
            style={{ tintColor: focused ? palette.colorPrimary : color, height: size }}/>,
      }}
    />
    <Tabs.Screen
      name="favorites"
      component={FavoritesScreen}
      options={{
        tabBarLabel: translate("tabs.favorite"),
        // eslint-disable-next-line react/display-name
        tabBarIcon: ({ color, size, focused }) =>
          <Icon
            icon='favorite'
            style={{ tintColor: focused ? palette.colorPrimary : color, height: size }}/>,
      }}
    />
  </Tabs.Navigator>
}

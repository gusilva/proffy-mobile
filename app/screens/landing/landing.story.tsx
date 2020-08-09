import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { Story, StoryScreen } from "../../../storybook/views"
import { LandingScreen } from "./landing-screen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "react-native-screens/native-stack"

declare let module

const reactNavigationDecorator = story => {
  const Screen = () => story()
  const Stack = createNativeStackNavigator()
  return <NavigationContainer><Stack.Navigator><Stack.Screen name={'Landing'} component={Screen}/></Stack.Navigator></NavigationContainer>
}

storiesOf("Screens", module)
  .addDecorator(reactNavigationDecorator)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Landing", () => (
    <Story>
      <LandingScreen/>
    </Story>
  ))

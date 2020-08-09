import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { SearchForm } from "./search"
import { View } from "react-native"
import { palette } from "../../theme/palette"

declare let module

storiesOf("Search", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <View style={{ backgroundColor: palette.colorPrimary }}>
          <SearchForm />
        </View>
      </UseCase>
    </Story>
  ))

import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { TeacherItem } from "./teacher-item"

declare let module

storiesOf("TeacherItem", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <TeacherItem
          avatar="https://avatars2.githubusercontent.com/u/7629187?s=400&u=f943b45d76775db4fde403c6ea001f13fabb0bc3&v=4"
          name="Gustavo"
          subject="Programmer"
          bio="Biography"
          price="80"
        />
      </UseCase>
      <UseCase text="Favorite" usage="The primary.">
        <TeacherItem
          avatar="https://avatars2.githubusercontent.com/u/7629187?s=400&u=f943b45d76775db4fde403c6ea001f13fabb0bc3&v=4"
          name="Gustavo"
          subject="Programmer"
          bio="Biography"
          price="80"
          favorite
        />
      </UseCase>
    </Story>
  ))

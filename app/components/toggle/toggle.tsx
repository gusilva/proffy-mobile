import * as React from "react"
import { View } from "react-native"

export interface ToggleProps {
  show?: boolean
  children?: React.ReactNode
}

export function Toggle(props: ToggleProps) {
  const { show = true, children } = props

  return (
    <View>
      {show && children}
    </View>
  )
}

import { ViewStyle, TextStyle } from "react-native"
import { color } from "../../theme"
import { palette } from "../../theme/palette"

const BASE_TEXT: TextStyle = {
  fontFamily: 'Archivo-Bold',
  color: color.text,
  fontSize: 24,
  lineHeight: 32,
}

export const viewPresets = {
  container: {
    backgroundColor: palette.colorPrimary,
    padding: 40,
  } as ViewStyle,
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  } as ViewStyle,
  header: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  } as ViewStyle
}

export const textPresets = {
  title: {
    ...BASE_TEXT,
    maxWidth: 160,
    marginVertical: 40
  } as TextStyle,
}

export type PageHeaderPresetView = keyof typeof viewPresets
export type PageHeaderPresetText = keyof typeof textPresets

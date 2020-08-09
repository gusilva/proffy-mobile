import { ViewStyle, TextStyle, ImageStyle } from "react-native"
import { color } from "../../theme"
import { palette } from "../../theme/palette"

const BASE_TEXT: TextStyle = {
  fontFamily: "Poppins-Regular",
  color: color.text,
  fontSize: 20,
  lineHeight: 30,
}

export const viewPresets = {
  container: {
    flex: 1,
    backgroundColor: palette.colorPrimary,
    justifyContent: "center",
    padding: 40,
  } as ViewStyle,
  content: {
    flex: 1,
    justifyContent: "center"
  } as ImageStyle,
  okButton: {
    marginVertical: 40,
    backgroundColor: palette.colorSecondary,
    height: 58,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  } as ViewStyle
}

export const textPresets = {
  primary: { ...BASE_TEXT, fontSize: 9, color: color.palette.white } as TextStyle,
  title: {
    fontFamily: "Archivo-Bold",
    color: color.text,
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  } as TextStyle,
  description: {
    ...BASE_TEXT,
    marginTop: 24,
    fontSize: 16,
    lineHeight: 26,
    color: palette.colorTextInPrimary,
    maxWidth: 240
  } as TextStyle,
  okButton: {
    fontFamily: "Archivo-Bold",
    color: color.text,
    fontSize: 16
  } as TextStyle
}

export type GiveClassesPresetView = keyof typeof viewPresets
export type GiveClassesPresetText = keyof typeof textPresets

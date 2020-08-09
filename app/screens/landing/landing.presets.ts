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
  banner: {
    width: "100%",
    resizeMode: "contain",
  } as ImageStyle,
  buttonContainer: {
    flexDirection: "row",
    marginTop: 40,
    justifyContent: "space-between",
  } as ViewStyle,
  button: {
    height: 150,
    width: "48%",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between",
  } as ViewStyle,
  buttonPrimary: {
    backgroundColor: palette.colorPrimaryLighter,
  } as ViewStyle,
  buttonSecondary: {
    backgroundColor: palette.colorSecondary,
  } as ViewStyle,
  icon: {
    height: 15
  } as ImageStyle,
}

export const textPresets = {
  primary: { ...BASE_TEXT, fontSize: 9, color: color.palette.white } as TextStyle,
  title: { ...BASE_TEXT, marginTop: 80 } as TextStyle,
  titleBold: { ...BASE_TEXT, fontFamily: "Poppins-SemiBold" } as TextStyle,
  button: {
    ...BASE_TEXT,
    fontFamily: "Archivo-Bold",
    fontSize: 20,
  } as TextStyle,
  totalConnections: {
    ...BASE_TEXT,
    color: palette.colorTextInPrimary,
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  } as TextStyle,
}

export type LandingPresetView = keyof typeof viewPresets
export type LandingPresetText = keyof typeof textPresets

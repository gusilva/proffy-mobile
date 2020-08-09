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
    backgroundColor: palette.colorBackground,
  } as ViewStyle,
  teacherList: {
    marginTop: -40,
    marginBottom: 250
  } as ViewStyle,
  scrollView: {
    paddingHorizontal: 16,
    paddingBottom: 16
  } as ViewStyle,
  icon: {
    height: 20
  } as ImageStyle
}

export const textPresets = {
  primary: { ...BASE_TEXT, fontSize: 9, color: color.palette.white } as TextStyle,
}

export type TeacherListPresetView = keyof typeof viewPresets
export type TeacherListPresetText = keyof typeof textPresets

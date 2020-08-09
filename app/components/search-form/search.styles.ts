import { ViewStyle, TextStyle } from "react-native"
import { color } from "../../theme"
import { palette } from "../../theme/palette"

const BASE_TEXT: TextStyle = {
  fontFamily: 'Poppins-Regular',
  color: color.text,
}

export const viewPresets = {
  searchForm: {
    marginBottom: 16
  } as ViewStyle,
  input: {
    height: 54,
    backgroundColor: color.background,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingBottom: 16,
    marginTop: 4,
    marginBottom: 16
  } as ViewStyle,
  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between"
  } as ViewStyle,
  inputBlock: {
    width: '48%'
  } as ViewStyle,
  submitButton: {
    flexDirection: "row",
    backgroundColor: palette.colorSecondary,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle
}

export const textPresets = {
  label: {
    ...BASE_TEXT,
    color: palette.colorTextInPrimary,
  } as TextStyle,
  submitButton: {
    color: color.text,
    fontFamily: 'Archivo-Bold',
    fontSize: 16,
  } as ViewStyle,
  input: {
    ...BASE_TEXT,
    color: palette.colorTextInPrimary
  } as ViewStyle
}

export type SearchPresetView = keyof typeof viewPresets
export type SearchPresetText = keyof typeof textPresets

import { ViewStyle, TextStyle, ImageStyle } from "react-native"
import { color } from "../../theme"
import { palette } from "../../theme/palette"

const BASE_TEXT: TextStyle = {
  fontFamily: "Poppins-Regular",
  color: palette.colorTextBase,
  fontSize: 20,
  lineHeight: 32,
}

export const viewPresets = {
  container: {
    backgroundColor: color.background,
    borderWidth: 1,
    borderColor: palette.colorLineInWhite,
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden'
  } as ViewStyle,
  profile: {
    flexDirection: "row",
    alignItems: "center",
    padding: 24
  } as ViewStyle,
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: palette.colorLineInWhite
  } as ImageStyle,
  profileInfo: {
    marginLeft: 16
  } as ViewStyle,
  footer: {
    backgroundColor: palette.colorBoxFooter,
    padding: 24,
    marginTop: 24,
    alignItems: "center"
  } as ViewStyle,
  price: {
    flexDirection: "row"
  } as ViewStyle,
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 16
  } as ViewStyle,
  favoriteButton: {
    backgroundColor: palette.colorPrimary,
    width: 56,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8
  } as ViewStyle,
  favorite: {
    backgroundColor: palette.colorFavorite
  } as ViewStyle,
  contactButton: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: palette.colorSecondary,
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8
  } as ViewStyle
}

export const textPresets = {
  name: {
    ...BASE_TEXT,
    fontFamily: 'Archivo-Bold',
    color: palette.colorTextTitle,
  } as TextStyle,
  subject: {
    ...BASE_TEXT,
    fontSize: 12,
    marginTop: 4
  } as TextStyle,
  bio: {
    ...BASE_TEXT,
    marginHorizontal: 24,
    fontSize: 14,
    lineHeight: 24
  } as TextStyle,
  price: {
    ...BASE_TEXT,
    fontSize: 14,
    marginRight: 8
  } as TextStyle,
  priceValue: {
    ...BASE_TEXT,
    color: palette.colorPrimary,
    fontFamily: 'Archivo-Bold',
    fontSize: 16
  } as TextStyle,
  contactButton: {
    ...BASE_TEXT,
    color: color.text,
    fontFamily: 'Archivo-Bold',
    fontSize: 16,
    marginLeft: 16

  } as TextStyle
}

export type TeacherItemPresetView = keyof typeof viewPresets
export type TeacherItemPresetText = keyof typeof textPresets

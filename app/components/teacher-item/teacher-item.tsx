import React, { FunctionComponent as Component, useState } from "react"
import { Image, Linking, View } from "react-native"
import { textPresets, viewPresets } from "./teacher-item.styles"
import { useObserver } from "mobx-react-lite"
import { Icon, Text } from ".."
import { RectButton } from "react-native-gesture-handler"
import { useStores } from "../../models"
import { useFocusEffect } from "@react-navigation/native"

export interface TeacherItemProps {
  id: number,
  avatar: string
  name: string
  subject: string
  bio: string
  price: string
  favorite?: boolean
  phone: string
}

export const TeacherItem: Component<TeacherItemProps> = props => {
  const { id, avatar, name, subject, bio, price, phone, favorite = false } = props
  const { proffy } = useStores()
  const [fav, setFav] = useState(favorite)

  const handleLinkWhatsapp = () => {
    Linking.openURL(`whatsapp://send?phone=${phone}`)
  }

  useFocusEffect(
    React.useCallback(() => {
      setFav(proffy.hasFavorite(id))
    }, [proffy.favorites.length])
  )

  const favoriteHandler = () => {
    if (proffy.hasFavorite(id)) {
      proffy.removeClassFromFavorite(id)
      setFav(false)
    } else {
      proffy.addClassToFavorite(id)
      setFav(true)
    }
  }

  return useObserver(() => (
    <View style={viewPresets.container}>
      <View style={viewPresets.profile}>
        <Image style={viewPresets.avatar} source={{ uri: avatar }}/>

        <View style={viewPresets.profileInfo}>
          <Text style={textPresets.name} text={name}/>
          <Text style={textPresets.subject} text={subject}/>
        </View>
      </View>
      <Text style={textPresets.bio} text={bio}/>
      <View style={viewPresets.footer}>
        <View style={viewPresets.price}>
          <Text style={textPresets.price} tx="teacher-tab.price"/>
          <Text style={textPresets.priceValue} tx="teacher-tab.currency"/>
          <Text style={textPresets.priceValue} text={price}/>
        </View>
        <View style={viewPresets.buttonsContainer}>
          <RectButton style={[viewPresets.favoriteButton, fav && viewPresets.favorite]} onPress={favoriteHandler}>
            <Icon icon={fav ? "unfavorite" : "heartOutline"}/>
          </RectButton>
          <RectButton style={viewPresets.contactButton} onPress={handleLinkWhatsapp}>
            <Icon icon="whatsapp"/>
            <Text tx="teacher-tab.contact" style={textPresets.contactButton}/>
          </RectButton>
        </View>
      </View>
    </View>
  ))
}

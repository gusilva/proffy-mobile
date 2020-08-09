import React, { FunctionComponent as Component, useState } from "react"
import { useObserver } from "mobx-react-lite"
import { ScrollView, View } from "react-native"
import { PageHeader, TeacherItem } from "../../components"
import { viewPresets } from "./favorites.presets"
import { useFocusEffect, useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"

export const FavoritesScreen: Component = () => {
  const { navigate } = useNavigation()
  const { proffy } = useStores()
  const [teachers, setTeacher] = useState(proffy.favorites)

  const goBack = () => navigate("landing")

  useFocusEffect(
    React.useCallback(() => {
      setTeacher(proffy.favorites)
    }, [proffy.favorites.length])
  )

  return useObserver(() => (
    <View style={viewPresets.container}>
      <PageHeader title="favorite-tab.title" goBack={goBack}/>

      <ScrollView
        style={viewPresets.teacherList}
        contentContainerStyle={viewPresets.scrollView}
      >
        {teachers.map((teacher, idx) => {
          return <TeacherItem
            key={idx}
            id={teacher.id}
            avatar={teacher.avatar}
            name={teacher.name}
            subject={teacher.subject}
            bio={teacher.bio}
            price={teacher.cost}
            phone={teacher.whatsapp}
            favorite
          />
        })}
      </ScrollView>
    </View>
  ))
}

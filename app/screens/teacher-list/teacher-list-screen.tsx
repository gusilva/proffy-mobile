import React, { FunctionComponent as Component, useState } from "react"
import { useObserver } from "mobx-react-lite"
import { View, ScrollView } from "react-native"
import { PageHeader, TeacherItem, SearchForm, Icon } from "../../components"
import { useNavigation } from "@react-navigation/native"
import { viewPresets } from "./teacher-list.presets"
import { BorderlessButton } from "react-native-gesture-handler"
import { useStores } from "../../models"

export const TeacherListScreen: Component = () => {
  const { navigate } = useNavigation()
  const [isFilterVisible, setIsFilterVisible] = useState(false)

  const { proffy } = useStores()
  const [teachers] = useState(proffy.classes)

  const goBack = () => navigate("landing")
  const toggleFilters = () => setIsFilterVisible(!isFilterVisible)

  return useObserver(() => (
    <View style={viewPresets.container}>
      <PageHeader title="teacher-tab.title" goBack={goBack} headerRight={(
        <BorderlessButton onPress={toggleFilters}>
          <Icon icon='filter' style={viewPresets.icon}/>
        </BorderlessButton>
      )}>
        <SearchForm show={isFilterVisible} toggle={toggleFilters} />
      </PageHeader>

      <ScrollView
        style={viewPresets.teacherList}
        contentContainerStyle={viewPresets.scrollView}
      >
        {teachers.map((teacher, idx) => {
          return <TeacherItem
            key={idx}
            id={teacher.user_id}
            avatar={teacher.avatar}
            name={teacher.name}
            subject={teacher.subject}
            bio={teacher.bio}
            price={teacher.cost}
            phone={teacher.whatsapp}
            favorite={proffy.hasFavorite(teacher.user_id)}
          />
        })}
      </ScrollView>
    </View>
  ))
}

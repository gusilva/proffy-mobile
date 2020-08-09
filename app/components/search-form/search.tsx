import React, { FunctionComponent as Component, useState } from "react"
import { View } from "react-native"
import { useObserver } from "mobx-react-lite"
import { textPresets, viewPresets } from "./search.styles"
import { Text, TextField, Toggle } from ".."
import { palette } from "../../theme/palette"
import { BorderlessButton } from "react-native-gesture-handler"
import { useStores } from "../../models"

export interface SearchProps {
    show?: boolean
    toggle?: () => void
}

export const SearchForm: Component<SearchProps> = props => {
  const { show, toggle } = props
  const [subject, setSubject] = useState('')
  const [weekDay, setWeekDay] = useState('')
  const [time, setTime] = useState('')

  const { proffy } = useStores()

  const searchTeachers = async () => {
    proffy.getClasses(subject, weekDay, time)
    toggle && toggle()
  }

  return useObserver(() => (
    <Toggle show={show}>
      <View style={viewPresets.searchForm}>
        <Text style={textPresets.label} tx="search-box.subject"/>
        <TextField
          inputStyle={textPresets.input}
          value={subject}
          onChangeText={setSubject}
          style={viewPresets.input}
          placeholderTextColor={palette.inactiveTintColor}
          placeholderTx="search-box.subject-placeholder"
        />
        <View style={viewPresets.inputGroup}>
          <View style={viewPresets.inputBlock}>
            <Text style={textPresets.label} tx="search-box.week-day"/>
            <TextField
              inputStyle={textPresets.input}
              value={weekDay}
              onChangeText={setWeekDay}
              style={viewPresets.input}
              placeholderTextColor={palette.inactiveTintColor}
              placeholderTx="search-box.week-day-placeholder"/>
          </View>

          <View style={viewPresets.inputBlock}>
            <Text style={textPresets.label} tx="search-box.time"/>
            <TextField
              inputStyle={textPresets.input}
              value={time}
              onChangeText={setTime}
              style={viewPresets.input}
              placeholderTextColor={palette.inactiveTintColor}
              placeholderTx="search-box.time-placeholder"/>
          </View>
        </View>
        <BorderlessButton style={viewPresets.submitButton} onPress={searchTeachers}>
          <Text style={textPresets.submitButton} tx="search-box.submit-button"/>
        </BorderlessButton>
      </View>
    </Toggle>
  ))
}

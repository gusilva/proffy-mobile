import { Instance, SnapshotOut, types } from 'mobx-state-tree'

export const ClassModel = types
  .model('Class', {
    avatar: types.string,
    bio: types.string,
    cost: types.string,
    name: types.string,
    subject: types.string,
    // eslint-disable-next-line @typescript-eslint/camelcase
    user_id: types.number,
    whatsapp: types.string,
  })
  .actions((self) => ({
    setAvatar(value: string) {
      self.avatar = value
    },
    setBio(value: string) {
      self.bio = value
    },
    setCost(value: string) {
      self.cost = value
    },
    // setId(value: number) {
    //   self.id = value
    // },
    setName(value: string) {
      self.name = value
    },
    setSubject(value: string) {
      self.subject = value
    },
    setUserId(value: number) {
      // eslint-disable-next-line @typescript-eslint/camelcase
      self.user_id = value
    },
    setWhatsapp(value: string) {
      self.whatsapp = value
    },
  }))

export type ClassModelType = Instance<typeof ClassModel>
export type ClassSnapshot = SnapshotOut<typeof ClassModel>

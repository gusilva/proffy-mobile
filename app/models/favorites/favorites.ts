import { Instance, SnapshotOut, types } from 'mobx-state-tree'

export const FavoriteModel = types
  .model('Favorites', {
    avatar: types.string,
    bio: types.string,
    cost: types.string,
    name: types.string,
    subject: types.string,
    id: types.number,
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
    setId(value: number) {
      self.id = value
    },
    setName(value: string) {
      self.name = value
    },
    setSubject(value: string) {
      self.subject = value
    },
    setWhatsapp(value: string) {
      self.whatsapp = value
    },
  }))

export type FavoriteModelType = Instance<typeof FavoriteModel>
export type FavoriteModelSnapshot = SnapshotOut<typeof FavoriteModel>

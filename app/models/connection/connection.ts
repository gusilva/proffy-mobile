import { types, Instance, SnapshotOut } from 'mobx-state-tree'

export const ConnectionModel = types
  .model('Connection')
  .props({
    total: types.number,
  })
  .actions((self) => ({
    setTotal(value: number) {
      if (self.total) {
        if (value) {
          self.total = value
        } else {
          self.total = 0
        }
      } else {
        self.total = value as number
      }
    },
  }))

export type Connection = Instance<typeof ConnectionModel>
export type ConnectionSnapshot = SnapshotOut<typeof ConnectionModel>

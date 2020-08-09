import { types, Instance } from 'mobx-state-tree'
import { flow } from 'mobx'
import { withStatus, withEnvironment } from '..'
import { ConnectionModel } from "../connection/connection"
// @ts-ignore
import { ClassModel, ClassModelType } from "../classes/classes"
import { FavoriteModel, FavoriteModelType } from "../favorites/favorites"

export const ProffyModel = types
  .model('ProffyStore')
  .props({
    connection: ConnectionModel,
    classes: types.optional(types.array(ClassModel), []),
    favorites: types.optional(types.array(FavoriteModel), [])
  })
  .extend(withStatus)
  .extend(withEnvironment)
  .actions((self) => ({
    setClasses(values: ClassModelType[]) {
      if (self.classes) {
        if (values) {
          self.classes.replace(values as ClassModelType[])
        } else {
          self.classes.clear()
        }
      } else {
        // eslint-disable-next-line
        self.classes = values as any
      }
    },
  }))
  .actions((self) => ({
    totalConnections: flow(function * () {
      self.setStatus('pending')
      try {
        const result = yield self.environment.api.getTotalConnections()
        if (result.kind === 'ok') {
          self.connection.setTotal(result.total)
          self.setStatus('done')
        } else {
          console.log('Error: ', result.kind)
          self.setStatus('error')
        }
      } catch (e) {
        console.log(e)
        self.setStatus('error')
      }
    }),
    getClasses: flow(function * (
      subject: string,
      // eslint-disable-next-line camelcase,@typescript-eslint/camelcase
      week_day: string,
      time: string
    ) {
      self.setStatus('pending')
      try {
        const result = yield self.environment.api.getClasses(
          subject,
          week_day,
          time
        )
        if (result.kind === 'ok') {
          self.setClasses(result.classes)
          self.setStatus('done')
        } else {
          self.setStatus('error')
        }
      } catch (e) {
        console.log(e)
        self.setStatus('error')
      }
    }),
  }))
  .actions((self) => ({
    addClassToFavorite(id: number) {
      const cls = self.classes.find(item => item.user_id === id)
      const fav = self.favorites.filter(item => item.id !== id)
      if (cls) {
        self.favorites.replace([...fav, {
          avatar: cls.avatar,
          bio: cls.bio,
          cost: cls.cost,
          name: cls.name,
          subject: cls.subject,
          id: cls.user_id,
          whatsapp: cls.whatsapp,
        } as FavoriteModelType])
      } else {
        self.favorites.clear()
      }
    },
    removeClassFromFavorite(id: number) {
      if (self.favorites) {
        self.favorites.replace(self.favorites.filter(favorite => favorite.id !== id))
      }
    },
    hasFavorite(id: number) {
      return !!self.favorites.find(favorite => favorite.id === id)
    }
  }))

export type ProffyStore = Instance<typeof ProffyModel>

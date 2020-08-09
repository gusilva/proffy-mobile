import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { ProffyModel } from "../proffy-store/proffy-store"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore")
  .props({
    proffy: types.optional(ProffyModel, { connection: { total: 0 }, classes: [] }),
  })

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {
}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {
}

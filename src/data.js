import Orbit, {Schema} from '@orbit/data'
import Store from '@orbit/store'
import JSONAPISource from '@orbit/jsonapi'
import IndexedDBSource from '@orbit/indexeddb'
import fetch from 'isomorphic-fetch'

Orbit.fetch = fetch

export const schema = new Schema({
  models: {
    note: {
      attributes: {
        text: {type: 'string'},
        slug: {type: 'string'}
      }
    }
  }
})

export const store = new Store({schema})

export const backup = new IndexedDBSource({
  schema,
  name: 'backup',
  namespace: 'notes'
})

export const backend = new JSONAPISource({
  schema,
  name: 'backend',
  host: 'https://jsonapi-notes.herokuapp.com',
  defaultFetchHeaders: {
    'Content-Type': 'application/vnd.api+json'
  }
})

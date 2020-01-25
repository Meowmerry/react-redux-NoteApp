import { uniqueId } from 'lodash'
import moment from 'moment'

export const ADD_NOTE = "ADD_NOTE"
export const REMOVE_NOTE = "REMOVE_NOTE"
export const SHOW_ACTIVE = "SHOW_ACTIVE"
export const SHOW_INACTIVE = "SHOW_INACTIVE"

export const STATUS_ACTIVE = 'STATUS_ACTIVE'
export const STATUS_INACTIVE = 'STATUS_INACTIVE'


export function addNote(title, content, tag, date) {
  return {
    id: uniqueId(),
    type: ADD_NOTE,
    title: title,
    content: content,
    status: STATUS_ACTIVE,
    time: moment(Date.now()).format('DD/MM/YYYY HH:MM:SS'),
    tag: tag,
    date: date
  }
}

export function removeNote(id) {
  return { 
    type: REMOVE_NOTE, 
    id: id 
  }
}

export function showActive() {
  return { type: SHOW_ACTIVE }
}

export function showInactive() {
  return { type: SHOW_INACTIVE }
}
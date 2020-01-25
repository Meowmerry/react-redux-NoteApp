import { ADD_NOTE, REMOVE_NOTE, STATUS_INACTIVE } from "../actions/actions";

function notesReducter(notes = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...notes,
        {
          id: action.id,
          title: action.title,
          content: action.content,
          status: action.status,
          time: action.time,
          tag: action.tag,
          date: action.date
        }
      ]
    case REMOVE_NOTE:
      return notes.map(note => {
        if (note.id === action.id) {
          return { ...note, status: STATUS_INACTIVE };
        } else {
          return note;
        }
      });
    default:
      return notes;
  }
}

export default notesReducter;

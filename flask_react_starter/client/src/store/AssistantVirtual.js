const SET_APPT_TODO = 'SET_APPT_TODO';
const SET_USERS_LI = 'SET_USERS_LI';
const SET_APPT_LI = 'SET_APPT_LI';
const SET_TODO_LI = 'SET_TODO_LI';
const SET_CREATE_MODAL = 'SET_CREATE_MODAL'
const SET_EDIT_MODAL = 'SET_EDIT_MODAL'
const SET_DELETE_MODAL = 'SET_DELETE_MODAL'

export const setApptToDoOV = (bool) => {
    return {
        type: SET_APPT_TODO,
        apptToDoOV: bool
    }
}
export const setUsersLi = (bool) => {
    return {
        type: SET_USERS_LI,
        usersLi: bool
    }
}

export const setApptLi = (bool) => {
    return {
        type: SET_APPT_LI,
        apptLi: bool
    }
}

export const setToDoLi = (bool) => {
    return {
        type: SET_TODO_LI,
        toDoLi: bool
    }
}

export const setShowCreateModal = (bool) => {
  return {
    type: SET_CREATE_MODAL,
    createModal: bool
  }
}

export const setShowEditModal = (bool) => {
  return {
    type: SET_EDIT_MODAL,
    editModal: bool
  }
}

export const setShowDeleteModal = (bool) => {
  return {
    type: SET_DELETE_MODAL,
    deleteModal: bool
  }
}

const initState = {
  apptToDoOV: true,
  usersLi: false,
  apptLi: false,
  toDoLi: false,
  createModal: false,
  editModal: false,
  deleteModal: false,
}

export default function assistVReducer(state=initState, action) {
    switch(action.type) {
      case SET_APPT_TODO:
        state['apptToDoOV'] = action.apptToDoOV;
        return state;
      case SET_USERS_LI:
        state['usersLi'] = action.usersLi;
        return state;
      case SET_APPT_LI:
        state['apptLi'] = action.apptLi;
        return state;
      case SET_TODO_LI:
        state['toDoLi'] = action.toDoLi;
        return state;
      case SET_CREATE_MODAL:
        state['createModal'] = action.createModal;
        return state;
      case SET_EDIT_MODAL:
        state['editModal'] = action.editModal;
        return state;
      case SET_DELETE_MODAL:
        state['deleteModal'] = action.deleteModal;
        return state;
      default:
        return state;
    }
  }

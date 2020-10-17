const SET_APPT_LI = 'SET_APPT_LI';

export const setApptLi = (bool) => {
    return {
        type: SET_APPT_LI,
        bool
    }
}

export const apptLi = (bool) => {
    return async dispatch => {
      const res = await fetch('/api/users/login', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "XSRF-TOKEN": Cookies.get("XSRF-TOKEN")
        },
        body: JSON.stringify({ email, password })

      });
      // console.log(res);
      res.data = await res.json();
      // console.log(res.data)
      if (res.ok) {
        dispatch(setUser(res.data.user))
      }
      return res;
    }
}

export default function AssistVReducer(state={}, action) {
    switch(action.type) {
      case SET_APPT_LI:
        return action.bool;
      default:
        return state;
    }
  }

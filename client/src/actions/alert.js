import { v4 as uuid } from 'uuid';
import * as Types from './types';

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid();

  dispatch({
    type: Types.SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => {
    dispatch({ type: Types.REMOVE_ALERT, payload: id });
  }, 3000);
};

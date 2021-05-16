import { SET_ERRORS, CLEAR_ERRORS } from '../constants';

const initialState = {
  errors: '',
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ERRORS:
      return { ...state, ...action.payload };
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}

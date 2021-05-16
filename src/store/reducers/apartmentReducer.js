import { SELECT_APT_TYPE, COROUSEL_POSITION } from '../constants';

const initialState = {
  selectedAptType: {},
  caraouselPosition: 0,
};

export default function apartmentReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_APT_TYPE:
      return { ...state, ...action.selectedAptType };
    case COROUSEL_POSITION:
      return { ...state, ...action.caraouselPosition };
    default:
      return state;
  }
}

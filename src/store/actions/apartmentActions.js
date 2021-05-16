import { SELECT_APT_TYPE, COROUSEL_POSITION } from '../constants';

// Select apartment type from carousel
export const selectAptType = (selectedAptType) => {
  return {
    type: SELECT_APT_TYPE,
    selectedAptType: selectedAptType,
  };
};

// Select apartment type from dropdown
export const selectSlider = (caraouselPosition) => {
  return {
    type: COROUSEL_POSITION,
    caraouselPosition: caraouselPosition,
  };
};

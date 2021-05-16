import { CLEAR_ERRORS } from '../constants/';

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};

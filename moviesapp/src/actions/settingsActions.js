import { SET_SETTINGS } from '../constants';

export const setSettings = settings => {
  return {
    type: SET_SETTINGS,
    payload: settings
  };
}
export default {
  setSettings(settings) {
    return {
      type: 'SET_SETTINGS',
      payload: settings
    };
  }
}
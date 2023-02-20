export default class Settings {
  constructor() {
    this.theme = ['dark', 'light', 'gray'];
    this.music = ['trance', 'pop', 'rock', 'chillout', 'off'];
    this.difficulty = ['easy', 'normal', 'hard', 'nightmare'];

    this.defaultSettings = new Map();
    this.userSettings = new Map();

    this.defaultSettings.set('theme', this.theme[0]);
    this.defaultSettings.set('music', this.music[0]);
    this.defaultSettings.set('difficulty', this.difficulty[0]);
  }

  set settings(settingsObject) {
    if (Object.prototype.toString.call(settingsObject) !== '[object Object]') {
      throw new Error('Invalid settings value');
    }

    // eslint-disable-next-line guard-for-in
    for (const key in settingsObject) {
      this.userSettings.set(key, settingsObject[key]);
    }
  }

  get settings() {
    const settings = new Map();

    for (const key of this.defaultSettings.keys()) {
      if (this.userSettings.has(key)) {
        settings.set(key, this.userSettings.get(key));
      } else {
        settings.set(key, this.defaultSettings.get(key));
      }
    }
    return settings;
  }
}

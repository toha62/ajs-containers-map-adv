export default class ErrorRepository {
  constructor() {
    this.storage = new Map();
  }

  translate(code) {
    if (this.storage.has(code)) {
      return this.storage.get(code);
    }
    return 'Unknown error';
  }
}

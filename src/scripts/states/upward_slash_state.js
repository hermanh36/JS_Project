import './states.js';

class UpwardSlashState extends States {
  constructor() {
    super();
    this.addState('upward-slash', this);
  }
}
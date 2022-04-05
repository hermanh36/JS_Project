import './states.js';

class OutwardSlashState extends States {
  constructor() {
    super();
    this.addState('outward-slash', this);
  }
}
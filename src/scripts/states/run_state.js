import './states.js';

class RunState extends States {
  constructor() {
    super();
    this.addState('run', this);
  }
}
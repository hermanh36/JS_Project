import './states.js';

class SpinAttackState extends States {
  constructor() {
    super();
    this.addState('spin-attack', this);
  }
}
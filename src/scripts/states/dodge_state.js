import './states.js';

class DodgeState extends States {

  constructor(){
    super();
    this.addState('dodge',this);
  }

}
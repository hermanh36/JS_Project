// import {IdleState} from './idle_state'


export class FiniteStateMachine {
  constructor() {
    this.states = {}; //hash of stateName => childState obj
    this.currentState = null;
    // this.addState('walk', new WalkState());
    // this.addState('run', new RunState());
    // this.addState('outwardSlash', new OutwardSlashState());
    // this.addState('spinAttack', new SpinAttackState());
    // this.addState('upwardSlash', new UpWardSlashState());
    // this.addState('dodge', new DodgeState());
  }


  //each of these should be in child state classes
  // initChildStates() {


  // }

  getState(stateName){
    return this.states[stateName];
  }

  addState(name, state) {
    this.states[name] = state;
  }

  setState(stateName){
    let prevState = this.currentState;
    if (prevState){
      if(prevState.name === stateName){ //if prev state is the same as current state, do nothing
        return;
      } else {
        prevState.exit();
      }
    }
    const next = this.states[stateName];
    this.currentState = next;
    // debugger;
    console.log(next);
    next.enter(prevState);  // prevstate here is used to transition states
  }

  update(input, delta){
    if(this.currentState){
      // debugger;
      this.currentState.update(input, delta);
    }
  }
  
}
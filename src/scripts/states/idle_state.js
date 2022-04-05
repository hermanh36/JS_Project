import {States} from './finite_state_machine.js'

export class IdleState extends States {
  constructor(player,parentState) {
    super();
    this.player = player;
    this.parentState = parentState
  }

  name(){
    return 'idle';
  }

  enter(prevState){
    const action = this.player.animations['idle'].action;
    if (prevState){ //cross fade if prevState exists, otherwise just play
      const prevAction = this.animation[prevState.name].action;
      action.time = 0;
      action.crossFadeFrom(prevAction,0.3, true);
      action.play();
    } else {
      // debugger;
      action.play();
    }
  }

  exit(){
    //empty for some classes, required to avoid errors
  }

  update(input){
    console.log("input is "+input.forward);
    this.currentState = this.parentState.currentState;
    if((input.forward || input.backward || input.right || input.left) && input.shift){
      this.setState('run');
    } else if (input.forward || input.backward || input.right || input.left){
      console.log("walk");
      this.setState('walk');
    } else if (input.hotkey1_out_slash){
      this.setState('outwardSlash');
    } else if (input.hotkey2_up_slash){
      this.setState('upwardSlash');
    } else if (input.hotkey3_spin_atk){
      this.setState('spinAttack');
    } else if (input.hotkeySpace_dodge){
      input.forward = true;
      this.setState('dodge');
      input.forward = false;
    }
    return; 
  }




}
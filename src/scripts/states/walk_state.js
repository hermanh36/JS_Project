import {States} from './finite_state_machine.js';

export class WalkState extends States {
  constructor(player,parentState) {
    super();
    this.player = player; 
    this.currentState = parentState.currentState;
  }

  name(){
    return 'walk';
  }

  enter(prevState){
    let currentAnim = this.player.animations['walk'].action;
    if(prevState){
      prevAnim = this.player.animations[prevState.name].action;
      //maybe check for run
      //
      //
      //
      currentAnim.crossFadeFrom(prevAction, 0.3, true);
      action.play();
    } else {
      action.play();
    }
  }

  exit(){
  }

  update(input, delta){
    if ((input.forward || input.backward || input.right || input.left) && input.shift) {
      this.setState('run');
    } else if (input.hotkey1_out_slash) {
      this.setState('outwardSlash');
    } else if (input.hotkey2_up_slash) {
      this.setState('upwardSlash');
    } else if (input.hotkey3_spin_atk) {
      this.setState('spinAttack');
    } else if (input.hotkeySpace_dodge) {
      input.forward = true;
      this.setState('dodge');
      input.forward = false;
    }
  }
}
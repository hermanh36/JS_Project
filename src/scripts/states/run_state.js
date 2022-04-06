import {States} from './finite_state_machine.js';

export class RunState {
  constructor(player,parent) {
    this.player = player; 
    this.parent = parent;
    this.name = 'run';
  }

  enter(prevState){
    let currentAnim = this.player.animations['run'].action;
    if(prevState){
      let prevAnim = this.player.animations[prevState.name].action;
      currentAnim.enabled = true;
      //maybe check for run
      //
      //
      //
      currentAnim.time = 0.0;
      // currentAnim.setEffectiveTimeScale(1.0);
      // currentAnim.setEffectiveWeight(1.0);
      currentAnim.crossFadeFrom(prevAnim, 0.3, true);
      currentAnim.play();
    } else {
      currentAnim.play();
    }
  }

  exit(){
  }

  update(input, delta){
    if ((input.forward || input.backward || input.right || input.left)){
      if (!input.shift) {
        this.parent.setState('walk');
      }
    } else if (input.hotkey1_out_slash) {
      this.parent.setState('outwardSlash');
    } else if (input.hotkey2_up_slash) {
      this.parent.setState('upwardSlash');
    } else if (input.hotkey3_spin_atk) {
      this.parent.setState('spinAttack');
    } else if (input.hotkeySpace_dodge) {
      input.forward = true;
      this.parent.setState('dodge');
      input.forward = false;
    }
  }
}
import {States} from './finite_state_machine.js';

export class StrafeLeftState {
  constructor(player,parent) {
    this.player = player; 
    this.parent = parent;
    this.name = 'strafeLeft';
  }

  enter(prevState){
    let currentAnim = this.player.animations['strafeLeft'].action;
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
    if (input.forward && input.shift) {
      this.parent.setState('run');
    } else if(input.backward){
      this.parent.setState('back')
    } else if(input.right){
      this.parent.setState('strafeRight');
    } else if (input.hotkey1_slash) {
      this.parent.setState('hotkey1_slash');
    } else if (input.hotkey2_slash) {
      this.parent.setState('hotkey2_spin');
    } else if (input.hotkey3_spin) {
      this.parent.setState('hotkey3_ulti');
    } else if (input.hotkeySpace_dodge) {
      this.parent.setState('dance');
    } else if(!(input.forward || input.backward || input.right || input.left)) {
      this.parent.setState('idle');
    }
  }
}
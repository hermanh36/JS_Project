import {State} from './state.js'

export class IdleState {
  constructor(player, parent) {
    this.player = player;
    this.parent = parent;
    this.name = 'idle';
  }

  enter(prevState){
    const action = this.player.animations['idle'].action;
    if (prevState){ //cross fade if prevState exists, otherwise just play
      const prevAction = this.player.animations[prevState.name].action;
      action.enabled = true;
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
    console.log("idling");
    if((input.forward || input.backward || input.right || input.left) && input.shift){
      this.parent.setState('run');
    } else if (input.forward || input.backward || input.right || input.left){
      console.log("walk");
      this.parent.setState('walk');
    } else if (input.hotkey1_out_slash){
      this.parent.setState('outwardSlash');
    } else if (input.hotkey2_up_slash){
      this.parent.setState('upwardSlash');
    } else if (input.hotkey3_spin_atk){
      this.parent.setState('spinAttack');
    } else if (input.hotkeySpace_dodge){
      input.parent.forward = true;
      this.setState('dodge');
      input.parent.forward = false;
    }
    return; 
  }




}
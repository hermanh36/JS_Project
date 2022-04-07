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
    if(input.forward && input.shift){
      this.parent.setState('run');
    } else if(input.backward){
      this.parent.setState('back')
    } else if(input.right){
      this.parent.setState('strafeRight');
    } else if(input.left){
      this.parent.setState('strafeLeft');
    } else if (input.forward){
      this.parent.setState('walk');
    } else if (input.hotkey1_slash){
      this.parent.setState('slash');
    } else if (input.hotkey2_spin){
      this.parent.setState('spin');
    } else if (input.hotkey3_ulti){
      this.parent.setState('ulti');
    } else if (input.hotkeySpace_dodge){
      this.parent.setState('dance');
    }
    return; 
  }




}
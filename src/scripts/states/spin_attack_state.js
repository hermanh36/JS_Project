import * as THREE from 'three';

export class SpinAttackState  {
  constructor(player, parent) {
    this.player = player;
    this.parent = parent;
    this.name = "spinAttack"

  }

  enter(prevState){
    let currentAnim = this.player.animations['spinAttack'].action;
    let checkForFinish = currentAnim.getMixer();
    checkForFinish.addEventListener('finished', () =>{
      let currentAnim = this.player.animations['spinAttack'].action;
      this.parent.setState('idle');
    });
    if(prevState){
      let prevAnim = this.player.animations[prevState.name].action;
      currentAnim.enabled = true;
      currentAnim.reset();
      console.log(currentAnim);
      currentAnim.setLoop(THREE.LoopOnce);
      currentAnim.time = 0.0;
      currentAnim.crossFadeFrom(prevAnim, 0.3, true);
      currentAnim.play();
    } else {
      currentAnim.play();
    }
  }

  idleState() {
    debugger;
    let currentAnim = this.player.animations['spinAttack'].action;
    let checkForFinish = currentAnim.getMixer();
    // checkForFinish.removeEventListener('finished', idleState)
    this.parent.setState('idle');
  }

  exit(){
    // let currentAnim = this.player.animations['spinAttack'].action;
    // if(!currentAnim.isRunning()){
    //   this.parent.setState('idle');
    // }  
  }

  update(input, delta){
    let currentAnim = this.player.animations['spinAttack'].action;
    if(!currentAnim.isRunning()){
      if ((input.forward || input.backward || input.right || input.left) && input.shift) {
        this.parent.setState('run');
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
      } else if(!(input.forward || input.backward || input.right || input.left)) {
        this.parent.setState('idle');
      }
    }
  }
}
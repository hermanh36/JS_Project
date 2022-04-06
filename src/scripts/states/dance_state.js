import * as THREE from 'three';

export class DanceState  {
  constructor(player, parent) {
    this.player = player;
    this.parent = parent;
    this.name = "dance"

  }

  enter(prevState){
    let currentAnim = this.player.animations['dance'].action;
    let checkForFinish = currentAnim.getMixer();
    checkForFinish.addEventListener('finished', () =>{
      this.parent.setState('idle')
    });
    if(prevState){
      let prevAnim = this.player.animations[prevState.name].action;
      currentAnim.enabled = true;
      currentAnim.reset();
      console.log(currentAnim);
      currentAnim.setLoop(THREE.LoopOnce);
      currentAnim.time = 0.0;
      currentAnim.clampWhenFinished = true;
      currentAnim.crossFadeFrom(prevAnim, 0.3, true);
      currentAnim.play();
    } else {
      currentAnim.play();
    }
  }


  exit(){
    // let currentAnim = this.player.animations['spinAttack'].action;
    // if(!currentAnim.isRunning()){
    //   this.parent.setState('idle');
    // }  
  }

  update(input, delta){
  }
}
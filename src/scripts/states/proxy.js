import {FiniteStateMachine} from './finite_state_machine'
import {IdleState} from './idle_state.js'
import { RunState } from './run_state.js';
import { WalkState} from './walk_state.js';
// import { UpwardSlashState } from './states/upward_slash_state.js';
// import { OutwardSlashState } from './states/outward_slash_state.js';
// import { DodgeState } from './states/dodge_state.js';
import { SpinAttackState } from './spin_attack_state.js';
export class PlayerProxy extends FiniteStateMachine{
  constructor(player){
    super(); 
    this.player = player;
    // this.animations = animations; //animations from models from player
    this.addState('idle', new IdleState(this.player,this));
    this.addState('walk', new WalkState(this.player, this));
    this.addState('run', new RunState(this.player,this));
    // this.addState('upwardSlash', UpwardSlashState);
    // this.addState('outwardSlash', OutwardSlashState);
    // this.addState('dodge', DodgeState);
    this.addState('spin', new SpinAttackState(this.player, this));
  }
}



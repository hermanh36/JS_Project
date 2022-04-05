import {FiniteStateMachine} from './finite_state_machine'
import { IdleState } from './states/idle_state.js'
import { RunState } from './states/run_state.js';
import { WalkState} from './states/walk_state.js';
import { UpwardSlashState } from './states/upward_slash_state.js';
import { OutwardSlashState } from './states/outward_slash_state.js';
import { DodgeState } from './states/dodge_state.js';
import { SpinAttackState } from './states/spin_attack_state.js';
class PlayerProxy extends FiniteStateMachine{
  constructor(){
    super(animations); 
    this.animations = animations; //animations from models from player
  }

  addAllStates(){
    this.addState('idle', IdleState);
    this.addState('walk', WalkState);
    this.addState('run', RunState);
    this.addState('upwardSlash', UpwardSlashState);
    this.addState('outwardSlash', OutwardSlashState);
    this.addState('dodge', DodgeState);
    this.addState('spinAttack', SpinAttackState);
  }
}



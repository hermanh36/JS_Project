import {FiniteStateMachine} from './finite_state_machine'
import {IdleState} from './idle_state.js'
import { RunState } from './run_state.js';
import { WalkState} from './walk_state.js';
// import { UpwardSlashState } from './states/upward_slash_state.js';
import {SlashState} from './slash_state.js'
// import { DodgeState } from './states/dodge_state.js';
import { SpinAttackState } from './spin_attack_state.js';
import { StrafeLeftState } from './strafe_left_state';
import { StrafeRightState } from './strafe_right_state';
export class PlayerProxy extends FiniteStateMachine{
  constructor(player){
    super(); 
    this.player = player;
    // this.animations = animations; //animations from models from player
    this.addState('idle', new IdleState(this.player,this));
    this.addState('walk', new WalkState(this.player, this));
    this.addState('run', new RunState(this.player,this));
    this.addState('strafeLeft', new StrafeLeftState(this.player, this))
    this.addState('strafeRight', new StrafeRightState(this.player, this))
    this.addState('slash', new SlashState(this.player, this));
    // this.addState('dodge', DodgeState);
    this.addState('spin', new SpinAttackState(this.player, this));
  }
}



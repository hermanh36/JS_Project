export class PlayerController {

  constructor(){
    this.forward = false;
    this.backward = false;
    this.left = false;
    this.right = false;
    this.shift = false;
    this.hotkey3_slash = false;
    this.hotkey2_spin = false;
    this.hotkey3_ulti = false;
    this.hotkeySpace_dodge = false;


    document.addEventListener('keydown', (e)=>this.keyDown(e));
    document.addEventListener('keyup', (e)=>this.keyUp(e));

  }

  keyDown(event) {
    if (event.code === 'KeyW'){
      this.forward = true;
    } else if (event.code === 'KeyS'){
      this.backward = true;
    } else if (event.code === 'KeyA'){
      this.left = true;
    } else if (event.code === 'KeyD'){
      this.right = true;
    } else if (event.code === 'ShiftLeft'){
      this.shift = true;
    } else if (event.code === 'Digit1'){
      this.hotkey3_slash = true;
    } else if (event.code === 'Digit2'){
      this.hotkey2_spin = true;
    } else if (event.code === 'Digit3'){
      this.hotkey3_ulti = true;
    } else if (event.code === 'Space'){
      this.hotkeySpace_dodge = true;
    } else if (event.code === 'Digit5') {
      this.hotkey5 = true;
    }
  }

  keyUp(event) {
    if (event.code === 'KeyW') {
      this.forward = false;
    } else if (event.code === 'KeyS') {
      this.backward = false;
    } else if (event.code === 'KeyA') {
      this.left = false;
    } else if (event.code === 'KeyD') {
      this.right = false;
    } else if (event.code === 'ShiftLeft') {
      this.shift = false;
    } else if (event.code === 'Digit1') {
      this.hotkey3_slash = false;
    } else if (event.code === 'Digit2') {
      this.hotkey2_spin = false;
    } else if (event.code === 'Digit3') {
      this.hotkey3_ulti = false;
    } else if (event.code === 'Space') {
      this.hotkeySpace_dodge = false;
    } else if (event.code === 'Digit5') {
      this.hotkey5 = false;
    }
  }
}
class PlayerController {

  constructor(){
    this.forward = false;
    this.backward = false;
    this.left = false;
    this.right = false;
    this.dodge = true;
    this.hotkey1 = false;
    this.hotkey2 = false;
    this.hotkey3 = false;
    this.hotkey4 = false;
    this.hotkey5 = false;

    document.addEventListener('keydown',keyDown);
    document.addEventListener('keyup', (e) => this.keyUp);

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
      this.dodge = true;
    } else if (event.code === 'Digit1'){
      this.hotkey1 = true;
    } else if (event.code === 'Digit2'){
      this.hotkey2 = true;
    } else if (event.code === 'Digit3'){
      this.hotkey3 = true;
    } else if (event.code === 'Digit4'){
      this.hotkey4 = true;
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
      this.dodge = false;
    } else if (event.code === 'Digit1') {
      this.hotkey1 = false;
    } else if (event.code === 'Digit2') {
      this.hotkey2 = false;
    } else if (event.code === 'Digit3') {
      this.hotkey3 = false;
    } else if (event.code === 'Digit4') {
      this.hotkey4 = false;
    } else if (event.code === 'Digit5') {
      this.hotkey5 = false;
    }
  }

}
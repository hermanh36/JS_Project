import * as THREE from 'three';
import { FirstPersonControls } from './first-person-controls';


document.addEventListener("DOMContentLoaded", () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);

  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(1280, 720);
  document.body.appendChild(renderer.domElement);
  window.addEventListener('resize',function(){
    let width = window.innerWidth;
    let height = window.innerHeight; 
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
    renderer.setSize(width,height);
  });

  const geometry = new THREE.BoxGeometry(5, 5, 5);
  //creating cube with geometry and mesh material
  const material = new THREE.MeshBasicMaterial({ color: 'green', wireframe: false});
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 20;

  function update() {
    //game logic goes here
    cube.rotation.x+=0.01;
    cube.rotation.y+=0.01;
    delta = clock.getDelta();
  }
  let delta;
  function render() {
    renderer.render(scene, camera);
    controls.update(delta);
  }

  function GameLoop() {
    //update render repeat
    requestAnimationFrame(GameLoop);
    update();
    render();
    // controls.update();
  }
  let clock = new THREE.Clock();

  let controls = new FirstPersonControls(camera, renderer.domElement);
  controls.lookSpeed = 0.05;
  controls.movementSpeed = 5;
  debugger;
  // GameLoop();
  console.log("Hit2");
});


  // GameLoop();
  // console.log("Hit");




import * as THREE from 'three';
import "./first-person-controls";


document.addEventListener("DOMContentLoaded", () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  let renderer = new THREE.WebGLRenderer();
  renderer.setSize(1280, 720);
  document.body.appendChild(renderer.domElement);
  window.addEventListener('resize',function(){
    let width = window.innerWidth;
    let height = window.innerHeight;
    renderer.setSize(width,height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
  });

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  //creating cube with geometry and mesh material
  const material = new THREE.MeshBasicMaterial({ color: 'green', wireframe: true });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  camera.position.z = 3;

  function update() {
    //game logic goes here
    cube.rotation.x+=0.01;
    cube.rotation.y+=0.005;
  }

  function render() {
    renderer.render(scene, camera);
  }

  function GameLoop() {
    //update render repeat
    requestAnimationFrame(GameLoop);
    update();
    render();
  }

  controls = new FirstPersonControls(camera, renderer.domElement);

  GameLoop();
  console.log("Hit");
});


  // GameLoop();
  // console.log("Hit");




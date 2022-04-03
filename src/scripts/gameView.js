import * as THREE from 'three';
import { FirstPersonControls } from './first-person-controls';

const back= require('./skybox_img/back.jpg');
const front = require('./skybox_img/front.jpg');
const tops = require('./skybox_img/top.jpg');
const bottom = require('./skybox_img/bottom.jpg');
const left = require('./skybox_img/left.jpg');
const right = require('./skybox_img/right.jpg');

let clock = new THREE.Clock();
let delta;
export class GameView {
    constructor(){
        this.canvasSetUp();
        this.textureSetup();
        this.stageSetup();
        this.controls = new FirstPersonControls(this.camera, this.renderer.domElement);
        this.gameLoop();
    }

    canvasSetUp() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
        window.addEventListener('resize',function(){
            let height = window.innerHeight;
            let width = window.innerWidth;
            this.camera.aspect = width/height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width,height);
          });
        this.camera.position.z = 10;
        const dirLight = new THREE.DirectionalLight(0xFFFFFF, 1);
        dirLight.position.set(50, 50, 50);
        //edit later when target is made
        // dirLight.target.position.set(targetVector);
        this.scene.add(dirLight);
        const amb_light = new THREE.AmbientLight(0xFFFFFF, 1);
        this.scene.add(amb_light);
    }

    textureSetup() {
        //arr in form of [+x,-x,+y,-y,+z,-z]
        let skyboxArr = [front.default,back.default,tops.default,bottom.default,right.default,left.default];
        const skybox = new THREE.CubeTextureLoader().load(skyboxArr)
        this.scene.background = skybox;
    }

    //creating a stage
    stageSetup() {
        // const geometry = new THREE.PlaneGeometry(20,20)
        // const meshMats = new THREE.MeshBasicMaterial({color: 'white', side: THREE.DoubleSide});
        // const stage =  new THREE.Mesh(geometry, meshMats);
        // this.scene.add(stage);
    }
    
    //update, render, loop
    update(player) {
        //game logic goes here
        player.update();
        delta = clock.getDelta();
    }



    render() {
        //re-render everything
        this.renderer.render(this.scene, this.camera);
        this.controls.update(delta);
    }

    gameLoop() {
        //update render repeat
        this.update();
        this.render();
        requestAnimationFrame(this.gameLoop.bind(this));
        // controls.update();
    }

    addModel(model){
        this.scene.add(model);
    }

};

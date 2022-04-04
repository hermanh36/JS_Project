import * as THREE from 'three';
import { FirstPersonControls } from './pointer-lock-controls';
import {Player} from './player';
// import { OrbitControls } from './examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

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
        this.models = []
        this.canvasSetUp();
        this.textureSetup();
        this.stageSetup();
        this.controls = new FirstPersonControls(this.camera, this.renderer.domElement);
        // this.controls.addEventListener('change', this.render);
        this.gameLoop();
    }

    canvasSetUp() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
        this.camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 1, 2000);
        window.addEventListener('resize',function(){
            let height = window.innerHeight;
            let width = window.innerWidth;
            this.camera.aspect = width/height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width,height);
          });
        this.camera.position.set = (70,30,30);
        const dirLight = new THREE.DirectionalLight(0xFFFFFF, 1);
        dirLight.position.set(50, 50, 50);
        //edit later when target is made
        // dirLight.target.position.set(targetVector);
        this.scene = new THREE.Scene();
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
        const geometry = new THREE.PlaneGeometry(25,25)
        const meshMats = new THREE.MeshBasicMaterial({color: 'white', side: THREE.DoubleSide});
        const stage =  new THREE.Mesh(geometry, meshMats);
        stage.rotation.x = -Math.PI/2;
        this.scene.add(stage);
    }
    
    //update, render, loop
    update(player) {
        //game logic goes here
        for (let i = 0; i< this.models.length; i++){
            if (this.models[i] instanceof Player){
                this.models[i].loadToScene(this.scene);
            }
        }
        delta = clock.getDelta();
    }


    addModels(object){
        this.models.push(object);
        this.scene.add(object.model);
        object.model.position.set(1,1,2);
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
    }

};

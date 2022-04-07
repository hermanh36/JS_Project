import * as THREE from 'three';
import { FirstPersonControls } from './pointer-lock-controls';
import {Player} from './player';
// import { OrbitControls } from './examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

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
        this.models = [];
        this.canvasSetUp();
        this.textureSetup();
        this.stageSetup();
        this.controls = new FirstPersonControls(this.camera, this.renderer.domElement);
        // this.controls.addEventListener('change', this.render);
        this.gameLoop();
    }

    canvasSetUp() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(1080, 720);
        
        document.getElementsByClassName('main-canvas')[0].appendChild(this.renderer.domElement);
        this.camera = new THREE.PerspectiveCamera(75, 1080 / 720, 1, 2000);
        window.addEventListener('resize',() => {
            let canvas = this.renderer.domElement
            let height = canvas.clientHeight;
            let width = canvas.clientWidth;
            this.camera.aspect = width/height;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(width,height);
          },);
        this.camera.position.set = (-200,50,50);
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
        // const geometry = new THREE.PlaneGeometry(25,25)
        // const meshMats = new THREE.MeshBasicMaterial({color: 'white', side: THREE.DoubleSide});
        // const stage =  new THREE.Mesh(geometry, meshMats);
        // stage.rotation.x = -Math.PI/2;
        // this.scene.add(stage);
    }
    
    //update, render, loop
    update() {
        //game logic goes here
        delta = clock.getDelta();
        if(this.models.length > 0){
            for(let i = 0; i<this.models.length;i++){
                this.models[i].update(delta);
            }
        }
    }


    addModels(object){
        // object.loadToScene(this.scene);
        let loadCompleted = function() {
            this.models.push(object);
        }
        loadCompleted = loadCompleted.bind(this);
        object.loadAnimated(this.scene, loadCompleted); // async function
    }

    render() {
        //re-render everything
        this.renderer.render(this.scene, this.camera);
        this.controls.update(delta);
    }

    gameLoop() {
        //update render repeat
        this.update();
        requestAnimationFrame(() =>{
            this.render();
            this.gameLoop();
        });
    }

};

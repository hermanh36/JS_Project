import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


const tpose= require('./model/wolf.gltf');

export class Player{
    
    constructor(){
        this.hp = 10000;
        this.atk = 100;
        this.def = 100;
        this.vel = [];
        this.skills = [];
    }

    is_hit(){

    }

    is_alive(){

    }

    loadToScene(scene){
        let loader = new GLTFLoader();
        this.model = loader.load(tpose.default,(model)=>{
            scene.add(model.scene);
        });
    }

    update(){
        // this.model.rotation.x+=0.01;
        // this.model.rotation.y+=0.01;
    }

    

}

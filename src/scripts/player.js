import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

const idle= require('./model/idle.fbx');
const tpose= require('./model/tpose.fbx');
const dash = require('./model/dash.fbx');
const death = require('./model/death.fbx');
const jump_slash = require('./model/jump_slash.fbx');
const outward_slash = require('./model/outward_slash.fbx');
const thrust_slash = require('./model/thrust_slash.fbx');
const walk= require('./model/walk.fbx');


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
        let loader = new FBXLoader();
        this.model = loader.load(tpose.default,(model)=>{
            scene.add(model);
        });
    }

    update(){
        // this.model.rotation.x+=0.01;
        // this.model.rotation.y+=0.01;
    }

    

}

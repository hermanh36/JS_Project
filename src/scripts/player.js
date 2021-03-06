import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import {PlayerController} from './player_controller.js';
import {PlayerProxy} from './states/proxy.js'


export class Player{
    
    constructor(){
        this.hp = 10000;
        this.atk = 100;
        this.def = 100;
        this.vel = [];
        this.skills = [];
        this.input = new PlayerController();
        this.stateMachine = new PlayerProxy(this)
        this.animations = {};
        this.position = new THREE.Vector3();
    }

    is_hit(){

    }

    is_alive(){

    }

    loadAnimated(scene, loadCompletion) {
        const loader = new FBXLoader();
        //callback is async, loadAnimated exits before the callback finishes executing, 
        loader.load('./src/scripts/model/tpose.fbx', (model) => {  //get the model
            model.scale.multiplyScalar(0.05);
            scene.add(model);
            model.position.set(-10,-10,-5);
            console.log(model);
             //onLoad will take in an animation name and call the animModel function to store into dictionary
            this.mixer = new THREE.AnimationMixer(model);
            const onLoad = (animationName, animModel) => {
                const animClip = animModel.animations[0];
                const action = this.mixer.clipAction(animClip);
                this.animations[animationName] =
                {
                    clip: animClip,
                    action: action
                }
            };
            
            this.mixer = new THREE.AnimationMixer(model);
            this.loadManager = new THREE.LoadingManager();
            
            this.loadManager.onLoad = () => {
                this.stateMachine.setState('idle');

            }
           
            //fill up dictionary
            const innerLoader = new FBXLoader(this.loadManager);
            innerLoader.load('./src/scripts/model/dance.fbx',(animModel) => {
                onLoad('dance', animModel);
            });
            innerLoader.load('./src/scripts/model/idle.fbx', (animModel) => {
                onLoad('idle', animModel);
            });
            innerLoader.load('./src/scripts/model/walk.fbx', (animModel) => {
                onLoad('walk', animModel);
            });
            innerLoader.load('./src/scripts/model/run.fbx', (animModel) => {
                onLoad('run', animModel);
            });
            innerLoader.load('./src/scripts/model/slash.fbx', (animModel) => {
                onLoad('slash', animModel);
            });
            innerLoader.load('./src/scripts/model/spin.fbx', (animModel) => {
                onLoad('spin', animModel);
            });
            innerLoader.load('./src/scripts/model/ulti.fbx', (animModel) => {
                onLoad('ulti', animModel);
            });
            innerLoader.load('./src/scripts/model/strafe-left.fbx', (animModel) => {
                onLoad('strafeLeft', animModel);
            });
            innerLoader.load('./src/scripts/model/strafe-right.fbx', (animModel) => {
                onLoad('strafeRight', animModel);
            });
            innerLoader.load('./src/scripts/model/back.fbx', (animModel) => {
                onLoad('back', animModel);
            });
            loadCompletion();
        });
    }

    update(delta){
        this.mixer.update(delta);
        this.stateMachine.update(this.input,delta);
        
    }

    

}

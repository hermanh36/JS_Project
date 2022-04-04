import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


// const tpose= require('./model/tpose.fbx');

export class Player{
    
    constructor(){
        this.hp = 10000;
        this.atk = 100;
        this.def = 100;
        this.vel = [];
        this.skills = [];
        this.input = new PlayerController();
        this.stateMachine = new FiniteStateMachine();
        this.mixer = new THREE.AnimationMixer();

        this.loadModel();
    }

    is_hit(){

    }

    is_alive(){

    }



    // loadToScene(scene){
    //     let loader = new GLTFLoader();
    //     let loader2 = new FBXLoader();
    //     this.model = loader2.load('./src/scripts/model/thrust_slash.fbx',(model)=>{
    //         model.scale.setScalar(0.1);
    //         scene.add(model);
    //     })
    //     // this.model = loader.load('./src/scripts/model/phoenix_bird/scene.gltf',(model)=>{
    //     //     model.scene.scale.set(.01 * model.scene.scale.x, .01 * model.scene.scale.y, .01 * model.scene.scale.z);
    //     //     scene.add(model.scene);
    //     // });
    // }

    loadAnimated(scene, loadCompletion) {
        loader = new FBXLoader();
        //callback is async, loadAnimated exits before the callback finishes executing, 
        loader.load('./src/scripts/model/tpose.fbx', (model) => {  //get the model
            model.scale.multiplyScalar(0.1);
            scene.add(model);
            this.loadManager = new THREE.LoadingManager();
            initload = () => {
                this.stateMachine.setState = ('idle');
            };
            this.loadManager.onLoad = initload();
            //onLoad will take in an animation name and call the animModel function to store into dictionary
            onLoad = (animationName, animModel ) => {
                const animClip = animModel.animations[0];
                const action = this.mixer.clipAction(clip);
                this.animations[animationName] = 
                {
                    clip: animClip,
                    action: action
                }
            };
            //fill up dictionary
            const innerLoader = new FBXLoader();
            innerLoader.load('./src/scripts/model/dash.fbx',(animModel) => {
                onLoad('dash', animModel);
            });
            innerLoader.load('./src/scripts/model/death.fbx', (animModel) => {
                onLoad('death', animModel);
            });
            innerLoader.load('./src/scripts/model/idle.fbx', (animModel) => {
                onLoad('idle', animModel);
            });
            innerLoader.load('./src/scripts/model/run.fbx', (animModel) => {
                onLoad('run', animModel);
            });
            innerLoader.load('./src/scripts/model/outward_slash.fbx', (animModel) => {
                onLoad('outward-slash', animModel);
            });
            innerLoader.load('./src/scripts/model/jump_slash.fbx', (animModel) => {
                onLoad('jump-slash', animModel);
            });
            innerLoader.load('./src/scripts/model/thrust_slash.fbx', (animModel) => {
                onLoad('thrust-slash', animModel);
            });
            innerLoader.load('./src/scripts/model/ANIMATION4.fbx', (animModel) => {
                onLoad('ANIMATION4', animModel);
            });
            innerLoader.load('./src/scripts/model/ANIMATION5.fbx', (animModel) => {
                onLoad('ANIMATION5', animModel);
            });
        });
    }

    update(delta){
        this.animationMixer.update(delta);
    }

    

}

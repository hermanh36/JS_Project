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
    }

    is_hit(){

    }

    is_alive(){

    }

    loadToScene(scene){
        let loader = new GLTFLoader();
        let loader2 = new FBXLoader();
        this.model = loader2.load('./src/scripts/model/thrust_slash.fbx',(model)=>{
            model.scale.setScalar(0.1);
            scene.add(model);
        })
        // this.model = loader.load('./src/scripts/model/phoenix_bird/scene.gltf',(model)=>{
        //     model.scene.scale.set(.01 * model.scene.scale.x, .01 * model.scene.scale.y, .01 * model.scene.scale.z);
        //     scene.add(model.scene);
        // });
    }

    loadAnimated(scene, loadCompletion) {
        const loader2 = new FBXLoader();
        //callback is async, loadAnimated exits before the callback finishes executing, 
        loader2.load('./src/scripts/model/thrust_slash.fbx', (model) => {
            model.scale.multiplyScalar(0.1);

            const animate = new FBXLoader();
            animate.load('src/scripts/model/outward-slash.fbx',(animate) => {
                this.animationMixer = new THREE.AnimationMixer(model);
                console.log(this.mixer);
                let outwardSwing = this.animationMixer.clipAction(animate.animations[0]);
                outwardSwing.play();
                scene.add(model);
                loadCompletion();
            });
        });
    }

    update(delta){
        this.animationMixer.update(delta);
    }

    

}

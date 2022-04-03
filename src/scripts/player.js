export class Player{
    
    constructor(){
        this.hp = 10000;
        this.atk = 100;
        this.def = 100;
        this.vel = [];
        this.skills = [];
        this.geometry = new THREE.BoxGeometry(1, 1, 1);
        this.material = new THREE.MeshBasicMaterial({ color: 'green', wireframe: true});
        this.model = new THREE.Mesh(geometry, material);

    }

    is_hit(){

    }

    is_alive(){

    }

    update(){
        this.model.rotation.x+=0.01;
        this.model.rotation.y+=0.01;
    }

    

}

// create a scene, that will hold all our elements such as objects, cameras and lights. 
var scene = new THREE.Scene();
function cubo(dim, color, material, alambrado){
    var cubeGeometry = new THREE.BoxGeometry(dim, dim, dim);
    var cubeMaterial;
    switch(material){
     case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color: color, wireframe: alambrado});
      break;

     case 'Standard': cubeMaterial = new THREE.MeshStandardMaterial({color: color, wireframe: alambrado});
      break;

     case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color: color, wireframe: alambrado});
      break;

     case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color: color, wireframe: alambrado});
      break;

     case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({color: color, wireframe: alambrado});
      break;
    }
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    scene.add(cube);
    return(cube);
}
function init() {
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);
    Cubo = [];
for(var i=0;i<3;i++){
    var c;
    if(i==0){
        c=0xFFDD00;
    }else if(i==1){
       c=0xFF0000; 
    }else if(i==2){
        c=0xE633FF
    } else if (i==3){
        c=0x333FFF;
    }else if (i==4){
        c=0x55FF33;
    }
     Cubo.push(cubo(4, c, 'Physical', false));
    Cubo[i].position.set(0, 0, 0);
}
    Cubo[0].translateX(15);
    Cubo[1].translateY(15);
    Cubo[2].translateZ(15);
    light = new THREE.PointLight(0xFFFF00);
    light.position.set( 10, 5, 10 )
    scene.add( light ); 
    camera.position.set(30, 40, 30);
    camera.lookAt(scene.position);
    document.getElementById("webgl-output").appendChild(renderer.domElement);
    renderer.render(scene, camera);
}


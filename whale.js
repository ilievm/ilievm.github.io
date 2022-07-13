import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/build/three.module.js';
import {OrbitControls} from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://threejsfundamentals.org/threejs/resources/threejs/r115/examples/jsm/loaders/GLTFLoader.js';

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
  renderer.autoClearColor = false;
  var clock = new THREE.Clock(); /* this defines accurate time for animation */
  var mixer; /* variable for animations */


  // stuff for determining mouse position when it mooves for screen moove
  var windowHalfX = window.innerWidth / 2;      /* splits window in half (2 views) */
  var windowHalfY = window.innerHeight / 3;
  var mouseX = 0;
  var mouseY = 0;



  const fov = 75;
  const aspect = 2;  // the canvas default
  const near = 0.1;
  const far = 1000;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 50;

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 0, 0);
  controls.update();

  const scene = new THREE.Scene();


// REMOVES ALL CONTROLS
  controls.dispose();

  document.addEventListener( 'mousemove', onDocumentMouseMove, false );

// import model
    let loader = new GLTFLoader();
    loader.load('scene.gltf', function(gltf){               /* import model */
    mixer = new THREE.AnimationMixer( gltf.scene );         /* import animation */
    var action = mixer.clipAction( gltf.animations[ 0 ] );
    let whale = gltf.scene.children[0];                     /* set a whale to variable and set it's position */
    whale.position.y = 7;
    action.play();

    scene.add(gltf.scene);
    })

//  lights
    var light = new THREE.HemisphereLight( 0xcfc2ae, 1 );
				light.position.set( 30, 100, 1000 );
        scene.add( light );
    var light = new THREE.PointLight( 0xf5822a, 2 );
				light.position.set( 30, 100, 1000 );
        scene.add( light );
    var light = new THREE.DirectionalLight( 0xffe7d6, 1 );
				light.position.set( 0, 100, 0 );
        scene.add( light );    



// skybox
  {
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
      './converted/d.jpg',
      './converted/c.jpg',
      './converted/top.jpg',
      './converted/bottom.jpg',
      './converted/b.jpg',
      './converted/a.jpg',
    ]);
    scene.background = texture;
    
  }
// responsivness
  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
// changing camer positions on mousemove
  function onDocumentMouseMove( event ) {
    // doing with mouse moving 
mouseX = event.clientX - windowHalfX;
mouseY = event.clientY - windowHalfY;

  }

// rendering and constantly updating all the stuff
  function render(time) {
    time *= 0.001;
    let delta = clock.getDelta();
       
//change this to restrict maximum \/ left-right          this \/ slows down mooving of the camera
    camera.position.x += ( mouseX/17 - camera.position.x ) * .007;
    camera.position.y += ( mouseY/35 - camera.position.y ) * .03;
    camera.lookAt( scene.position );
    // actually resizes canvas all the time
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }


    renderer.render(scene, camera);

    if ( mixer ) mixer.update( delta ); /* apparetnly updates animation */

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
  
}

main();

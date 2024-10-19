import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GPUComputationRenderer } from 'three/examples/jsm/misc/GPUComputationRenderer';
import texture5 from '../../assets/images/texture-5.jpg'; // Import the texture

const LARGESCREEN = window.innerWidth > 1680;
const BGTEXTURE = texture5;
const BGCOLOR = 'black';
const SHINECOLOR = '#00ffff';
const MOUSESIZE = 18;
const VISCOSITY = 0.98;
const BOUNDS = 512 * 2; // Adjust as needed
const WIDTH = 256; // Adjust as needed
const HEIGHT = 100;
const BackgroundAnim = () => {
  const containerRef = useRef(null);
  const clock = useRef(new THREE.Clock());
  const renderer = useRef(null);
  const camera = useRef(null);
  const scene = useRef(null);
  const composer = useRef(null);
  const controls = useRef(null);
  const gpuCompute = useRef(null);
  const pointsWrap = useRef(null);
  const mousePosition = useRef(new THREE.Vector2());

  useEffect(() => {
    init();
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('mousemove', onMouseMove);
      cleanup();
    };
  }, []);

  const init = () => {
    // Setup the renderer
    renderer.current = new THREE.WebGLRenderer({ antialias: true });
    renderer.current.setPixelRatio(window.devicePixelRatio);
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.current.domElement);

    // Setup camera
    camera.current = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 3000);
    camera.current.position.set(0, window.innerHeight * 1.63, 0);

    // Setup scene
    scene.current = new THREE.Scene({ background: new THREE.Color(BGCOLOR) });

    // Setup lights
    const sun = new THREE.DirectionalLight(0x40A040, 0.2);
    sun.position.set(800, 450, 200);
    scene.current.add(sun);

    const sun2 = new THREE.DirectionalLight(0x40A040, 0.2);
    sun2.position.set(-500, 300, 0);
    scene.current.add(sun2);

    // Setup controls
    controls.current = new OrbitControls(camera.current, renderer.current.domElement);
    controls.current.enableRotate = false;
    controls.current.enableZoom = false;
    controls.current.enablePan = false;

    // Setup composer for post-processing
    composer.current = new EffectComposer(renderer.current);
    composer.current.addPass(new RenderPass(scene.current, camera.current));

    // Initialize water
    initWater();
    // Initialize point grid
    initPointGrid();

    // Start the animation loop
    animate();
  };

  const initWater = () => {
    const textureLoader = new THREE.TextureLoader();
    const texture_test = textureLoader.load(BGTEXTURE);
    texture_test.wrapS = THREE.RepeatWrapping;
    texture_test.wrapT = THREE.RepeatWrapping;
    texture_test.repeat.set(4, 4);

    const geometry = new THREE.PlaneGeometry(BOUNDS, BOUNDS, WIDTH - 1, WIDTH - 1);

    const waterVertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const waterFragmentShader = `
      uniform sampler2D texture;
      varying vec2 vUv;
      void main() {
        gl_FragColor = texture2D(texture, vUv);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: {
        texture: { value: texture_test },
      },
      vertexShader: waterVertexShader,
      fragmentShader: waterFragmentShader,
    });

    const waterMesh = new THREE.Mesh(geometry, material);
    waterMesh.rotation.x = -Math.PI / 2;
    scene.current.add(waterMesh);

    // Creates the GPU computation class and sets it up
    gpuCompute.current = new GPUComputationRenderer(WIDTH, WIDTH, renderer.current);
    const heightmap0 = gpuCompute.current.createTexture();

    const heightmapVariable = gpuCompute.current.addVariable('heightmap', waterFragmentShader, heightmap0);
    gpuCompute.current.setVariableDependencies(heightmapVariable, [heightmapVariable]);
    gpuCompute.current.init();
  };

  const initPointGrid = () => {
    const pointGridSize = LARGESCREEN ? Math.floor(WIDTH * 0.15) : Math.floor(WIDTH * 0.125);
    const dotSize = 0.5;
    const sphereGeometry = new THREE.PlaneGeometry(dotSize, dotSize);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      depthTest: false,
    });

    pointsWrap.current = new THREE.Object3D();
    pointsWrap.current.rotation.x = -Math.PI / 2;

    for (let i = 0; i < pointGridSize; i++) {
      for (let j = 0; j < pointGridSize; j++) {
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.position.x = -WIDTH * 1.25 + (i / pointGridSize) * WIDTH * 2.5;
        sphere.position.y = -WIDTH * 1.25 + (j / pointGridSize) * WIDTH * 2.5;

        pointsWrap.current.add(sphere);
      }
    }

    scene.current.add(pointsWrap.current);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    render();
  };

  const render = () => {
    composer.current.render();
    renderer.current.render(scene.current, camera.current);
  };

  const onMouseMove = (event) => {
    mousePosition.current.x = (event.clientX / window.innerWidth) * 2 - 1;
    mousePosition.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    spreadPoints();
  };

  const spreadPoints = () => {
    const pointObjects = pointsWrap.current.children;
    const mouseX = (mousePosition.current.x * WIDTH) / 2;
    const mouseY = (mousePosition.current.y * HEIGHT) / 2;

    for (const point of pointObjects) {
      const dx = point.position.x - mouseX;
      const dy = point.position.y - mouseY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const spreadFactor = Math.max(0, 1 - dist / 200); // Adjust the distance threshold
      point.position.x += (Math.random() - 0.5) * spreadFactor; // Spread based on mouse position
      point.position.y += (Math.random() - 0.5) * spreadFactor;
    }

    pointsWrap.current.children.forEach(point => {
      point.geometry.attributes.position.needsUpdate = true; // Notify Three.js to update the position attribute
    });
  };

  const onWindowResize = () => {
    camera.current.aspect = window.innerWidth / window.innerHeight;
    camera.current.updateProjectionMatrix();
    renderer.current.setSize(window.innerWidth, window.innerHeight);
  };

  const cleanup = () => {
    if (renderer.current) {
      renderer.current.dispose();
    }
  };

  return <div ref={containerRef} style={{ width: '100%', height: '100vh' }} />;
};

export default BackgroundAnim;
